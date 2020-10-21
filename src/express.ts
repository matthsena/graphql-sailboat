import express, { NextFunction } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

export default express;

export { app, NextFunction };
