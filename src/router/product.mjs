import { Router } from "express";
import { productInfo } from "../data/product.mjs";

const productRouter = Router();
productRouter.get('/:id',(req,res)=>{
   const products = productInfo.find((p)=>p.id === Number(req.params.id));
   res.status(200).json({
    msg:"your product",
    data: products,
   });
});

export default productRouter;