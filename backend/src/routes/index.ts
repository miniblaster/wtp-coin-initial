import express, { Router } from 'express';
import authRouter from './auth.router';
// import otpRouter from './otp.router';
// import adminRouter from './admin.router';
// import transactionRouter from './transaction.router';
// import notesRouter from './notes.router';
// import accountRouter from './account.router';
// import notificationsRouter from './notifications.router';

const router = express.Router();

interface IRoute {
    path: string;
    route: Router;
}

const defaultIRoute: IRoute[] = [
    {
      path: '/auth',
      route: authRouter,
    },
    // {
    //   path: '/otp',
    //   route: otpRouter,
    // },
    // {
    //   path: '/admin',
    //   route: adminRouter,
    // },
    // {
    //   path: '/',
    //   route: transactionRouter
    // },
    // {
    //   path: '/',
    //   route: notesRouter
    // },
    // {
    //   path: '/account',
    //   route: accountRouter
    // },
    // {
    //   path: '/',
    //   route: notificationsRouter
    // }
];

defaultIRoute.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;