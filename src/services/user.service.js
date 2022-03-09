import User from '../models/user.model';
import bcrypt from 'bcrypt';
import * as Userutil from '../utils/user.util';
import * as mailer from '../utils/helper';
import {sender} from '../utils/rabbitmq';

const jwt = require('jsonwebtoken');

//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

//register new user
export const regUser = async(body)=>{
  const checkDup = await User.findOne({email: body.email});
  if (checkDup == null){
    const salt = await bcrypt.genSalt(10)
    body.password = bcrypt.hashSync(body.password, salt )
  const regData = await User.create(body);//query to create new user
  sender(regData)
  return regData;
  }else{
    throw new Error("User already registered")
  }

}

//login registered user
export const loginUser = async (body) => {
  const emailMatch = await User.findOne({email: body.email});
  if( emailMatch == null){
    throw new Error("User not found, Please register.");
  }else{
    const validPass = await bcrypt.compare(body.password, emailMatch.password);//or compareSync
    if(validPass){
      let token =  Userutil.generateToken(emailMatch);
      return token;
      // let token = await jwt.sign({"email":emailMatch.email, "id": emailMatch._id}, process.env.SECRET_KEY)
      // return (emailMatch, token)
    }else{
      throw new Error("Invalid password")
    }
  }
}

//forget password
export const forgetPasswordService = async (body) => {
  const emailMatch= await User.findOne({email:body.email});
  if(emailMatch == null){
    throw new Error("User not registered");
  }else{
    // let token = Userutil.generateToken(emailMatch);
    let token = await jwt.sign({"email":emailMatch.email, "id": emailMatch._id}, process.env.SECRET_WORD)
    console.log("token for forget password", token);
    const data = await mailer.sendMail(emailMatch.email, token) ;
    return data
  }
};


//reset password
export const resetPasswordService = async (body) => {
  // console.log("reset password body===", body);
  const salt = await bcrypt.genSalt(10)
  body.password = bcrypt.hashSync(body.password, salt )
  const bodydata = {
    "password": body.password
}
  const data = await User.findByIdAndUpdate(
    {
      _id:body.data.id
    },
    bodydata,
    {
      new: true
    }
  );
  return data;
};



