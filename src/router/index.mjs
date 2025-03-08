import { Route } from "express";
import userRouter from "./user.mjs";
import  productRouter  from "./product.mjs";
import textRouter from "./text.mjs";

const rootRouter =Route();
rootRouter.get('/',(req,res)=>res.sendStatus(200));
rootRouter.use('/product',productRouter);
rootRouter.use('/user',userRouter);
rootRouter.use('/text',textRouter);

export default rootRouter;
