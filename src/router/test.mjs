import { Route } from "express";
import { route } from "express/lib/application";
import textMiddleware from "../utils/testMiddleware.mjs";

const textRouter = Route();
textRouter.get('/',textMiddleware
,(req,res)=>{
    res.sentStaus(200);
}
);

export default textRouter;