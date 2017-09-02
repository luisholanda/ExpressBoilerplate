/**
 * @Author: Luis Holanda <luiscm>
 * @Date:   22-Aug-2017
 * @Email:  luiscmholanda@gmail.com
 * @Last modified by:   luiscm
 * @Last modified time: 23-Aug-2017
 */

require('marko/node-require').install()
import * as express from 'express'

// Middlewares
import * as async from 'async'
import * as marko from 'marko/express'
import * as favicon from 'serve-favicon'
import * as logger from 'morgan'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import * as compression from 'compression'
import * as helmet from 'helmet'
import * as serveStatic from 'serve-static'
import * as lassoMw from 'lasso/middleware'
import * as lasso from 'lasso'

import Routes from './routes'


export class Server {

	// Stores the express application
	private _server: express.Application


	constructor() {
		this._server = express()

		// Set middlewares
		this.config()

		// Set routes
		this.routes()

		this.setupErrors()
	}

	/**
	 * bootstrap:: void -> Server
	 * 
	 * 	Creates a new Server object
	 * 
	 * @return: new Server object
	 */
	public static boostrap(): Server {
		return new Server();
	}

	/**
	 * routes:: void -> void
	 * Set the routes for the _server application
	 */
	private routes(): void {
		let router = express.Router()

		Routes.setRoutes(router)

		this._server.use(router)
	}

	/**
	 * config:: void -> void
	 * 
	 * Configure all the middlewares for the _server application
	 */
	private config(): void {
		this._server.use(parallel([
			helmet(),
			logger('dev'),
			bodyParser.json(),
			bodyParser.urlencoded({ extended:false }),
			cookieParser(),
			compression({ level: 1}),
			marko()
		]))

		this.setupLasso()
	}

	/**
	 * setupLasso:: void -> void
	 * 
	 * Configure the lasso static server.
	 */
  private setupLasso(): void {
    this._server.use(lassoMw.serveStatic())
    lasso.configure({
        plugins: [
          "lasso-marko",
          "lasso-stylus",
          "lasso-optimize-iife",
          "lasso-imagemin"
        ],
        minify: true
    })
  }

  private setupErrors(): void {
    this._server.use((req, res, next) => {
      let err = new Error('Not Found')
      err.status = 404
      next(err)
		})
		
		this._server.use((req, res, err) => {
			// set locals, only providing error in development
			res.locals.message = err.message;
			res.locals.error = req.app.get('env') === 'development'
					? err
					: {};
	
			// render the error page
			res.status(err.status || 500);
			res.render('error');
		})
	}
	
	public get server() : express.Application {
		return this._server
	}
	
}

function parallel(mws: any[]): express.RequestHandler {
	return (req, res, next) => {
			async.each(mws, (mw, cb) => {
					mw(req, res, cb)
			}, next)
	}
}
