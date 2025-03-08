import express from 'express';
import userRouter from './src/router/user.mjs';
import productRouter from './src/router/product.mjs';
import { join } from '@prisma/client/runtime/library';

const server = express();
server.use(express.json()); //to handel to the JSON reuquest for backend 
server.use('/api/v1/user',userRouter);
server.use('/api/v1/product',productRouter);
server.listen(4000,()=>console.log('listening on port'))