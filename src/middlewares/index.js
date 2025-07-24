import { validationResult } from "express-validator";

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