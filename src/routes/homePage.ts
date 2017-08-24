import { Response, Request, NextFunction, Router } from 'express'
import * as marko from 'marko'


export default class HomePageRouter
{

	private static template = require('../../views/pages/home')

	public static subscribe(router: Router): void
	{
		router.get('/', (req: Request, res: Response, next: NextFunction) => {
			HomePageRouter.render(req, res, next)
		})
	}

	private static render(req: Request, res: Response, next: NextFunction)
	{
		res.marko(HomePageRouter.template)
	}

}