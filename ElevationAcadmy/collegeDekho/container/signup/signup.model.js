import { string } from "joi";
import mongoose from "mongoose";

const Schema   = mongoose.Schema;

const signupModel = new Schema({	
	firstName: String,
    lastName: String,
    email: String, 

});

export default mongoose.model('user', signupModel, "user");