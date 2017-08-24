import { Response, Request, NextFunction, Router,  } from 'express'
import HomePageRouter from './homePage'


export default class Routes {

	public static setRoutes(router: Router): void
	{
		HomePageRouter.subscribe(router)
	}
}
