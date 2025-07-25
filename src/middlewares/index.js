import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import asyncHandler from "express-async-handler";
import { userModel } from "../models/user.model.js";


export function teacherMiddleware(req, res, next){
    if (req.query.minYear){
        const minYear = parseInt(req.query.minYear);
        if (isNaN(minYear)){
            return res.status(400).json({ message: "min Year Must be integer"});
        }
    }
    if(req.query.subject){
        const subj = parseInt(req.query.subject);
                
        if(!isNaN(subj)){
            return res.status(400).json({
                message: "Subject must be string"
            });
        }
    }
    next();
}
export function handleValidation(req,res,next){
    const result = validationResult(req);
    console.log(result);
    if(!result.isEmpty()){
        return res.status(400).send({ error: result.array()});
    }
    next();
}
export function handleError(error, req, res, next) {
    return res.status(500).json({ message: error.message })
}

export const authenticate = asyncHandler(async (req, res, next) => {
    // Verify JWT
    // Bearer TOKEN
    if (!req.headers.authorization) {
        return res.status(400).json({ message: "No token provided" })
    }
    const token = req.headers.authorization.split(' ')[1]
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    const user = await userModel.findById(payload._id)
    req.user = user
    next()
})