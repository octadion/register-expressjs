import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { routes } from './routes';

createConnection().then(() => {
    const app = express();

    app.use(express.json());
    app.use(cookieParser());
    app.use(cors({
        origin: ['https://register-expressjs.vercel.app/'],
        credentials: true
    }));

    routes(app);

    app.listen(8000, () => {
        console.log('Listening to port 8000');
    })
})