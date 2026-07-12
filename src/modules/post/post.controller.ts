
import { Request, Response } from "express";

const createPost =async(req:Request,res:Response)=>{
    res.send("post creating api")
}

export const postController= {
    createPost
}