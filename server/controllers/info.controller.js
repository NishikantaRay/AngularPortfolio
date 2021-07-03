const info = require('../models/info');
const feed = require('../models/feedback');
const Joi = require('joi');

exports.addInfo=async(req,res)=>{
    console.log(req.body);
    const infoObj =Joi.object({
        email : Joi.string().email().required()
    })
    try {
        const infofield = await infoObj.validateAsync(req.body);
        const infos = new info(infofield);
        // console.log(infos);
        await infos.save();
        res.status(200).json({
            message:"info Added successfully" ,
            infoData:infos
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
}


exports.addFeedbackData=async(req,res)=>{
    console.log(req.body);
    const feedbackObj =Joi.object({
        name : Joi.string().required().min(3).alphanum(),
        email : Joi.string().email().required(),
        feed : Joi.string().required()
    })
    try {
        const feedbackfield = await feedbackObj.validateAsync(req.body);
        const feedbacks = new feed(feedbackfield);
        // console.log(feedbacks);
        await feedbacks.save();
        res.status(200).json({
            message:"feedback Added successfully" ,
            feedData:feedbacks
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
}