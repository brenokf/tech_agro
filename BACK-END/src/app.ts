import 'reflect-metadata';
import postsRoutes from './routes/posts.routes';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());
app.use(express.json());

app.use(postsRoutes);



export default app;
