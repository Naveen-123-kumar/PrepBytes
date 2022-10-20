import { array, isSchema } from "joi";
import signupModel from "./signup.model";

import {
    errorHandler,
    successHandler,
  } from "../../services/handler/response.handler";
  import {
    InternalError,
  } from "../../services/handler/collegeDekho.error.handler";

export const createUserNew =(req,res)=>{

}
  
  export default class SignupController {
    /**
     * @function
     * @name getUser
     * @description This method is used to get the user details
     * @param {Object} req - Request object to get the request parameters
     * @param {Object} res - Response object to send back the response to client
     */
    static async getUser(req, res) {
      try {
        const result=await signupModel.find({})
        console.log("res", result)
        return successHandler(res, result,201)
      } catch (err) {
        console.log('err.stack :>> ', err.stack);
        return errorHandler(new InternalError(err.message))
      }
    }

    static async createUser(req, res) {
        try {
          console.log("req", req.body)
          const data= req.body;
          console.log("data", data)
          const result=await signupModel.create(data)
          console.log("res", result)
          return successHandler(res, result,201)
        } catch (err) {
          console.log('err.stack :>> ', err.stack);
          return errorHandler(new InternalError(err.message))
        }
      }

      static async updateUser(req, res) {
        try {
          console.log("req", req.body)
          const data= req.body;
          console.log("data", data)
        
          const result=await signupModel.updateOne(data)
          console.log("res", result)
          return successHandler(res, result,201)
        } catch (err) {
          console.log('err.stack :>> ', err.stack);
          return errorHandler(new InternalError(err.message))
        }
      }
  }
  


  export const  getUser= async(req, res)=> {
    try {
      const result=await signupModel.find({})
      console.log("res", result)
      return  res.status(200).json(result);
      // return successHandler(res, result,201)
    } catch (err) {
      console.log('err.stack :>> ', err.stack);
      return errorHandler(new InternalError(err.message))
    }
  }