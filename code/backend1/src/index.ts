import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import { info_logger_middleware } from './middlewares/logsstore';


import appRouter from './routes';
import { notFound } from './middlewares/notFound';
import { errorHandler } from './middlewares/errorHandler';

// Clerk imports
import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';

dotenv.config();

const app: Application = express();
const corsOptions = {
  origin: 'http://localhost',
  credentials: true, 
}

app.use(express.json());
app.use(cors(
  corsOptions
));

app.get('/api/users/health', (req, res) => {res.status(200).send('OK from 4000');});

// Middlewares
app.use(info_logger_middleware)
// Clerk middleware: attaches req.auth to all requests
app.use(ClerkExpressWithAuth());
app.use(appRouter);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

