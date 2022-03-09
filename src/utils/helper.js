import { link } from "@hapi/joi";
import nodeMailer from "nodemailer";
import logger from "../config/logger"

  // create reusable transporter object using the default SMTP transport  

  export const sendMail = async (userEmail, token) =>{

    let transporter = nodeMailer.createTransport({
      service: "gmail",
       auth: {
         user: process.env.SENDER_ID, // generated ethereal user
         pass: process.env.PASSWORD, // generated ethereal password
       },
     });

   
     const sendInfo = {
       from : process.env.SENDER_ID,
       to: userEmail,
       subject: "Password reset link",
       html: `<h1>Hello,</h1>
       <p>Click on the link to reset your password <a href="${process.env.APP_HOST}:${process.env.APP_PORT}/${token}">click here</a></p>`
      // html: `<h1>Hello,</h1>
      //  <p>Click on the link to reset your password <a href="${process.env.APP_HOST}:${process.env.APP_PORT}/${token}">click here</a></p>`

     }
     return new Promise((resolve, reject)=>{
      transporter.sendMail(sendInfo, (err,info)=>{
        if(err){
          logger.log("error",err)
          return reject();
        }else{
          logger.log("info",info)
          return resolve("Email sent")
        }
      })
     })
     
     
  }

  export const sendRegisterMail = async (userEmail) =>{

    let transporter = nodeMailer.createTransport({
      service: "gmail",
       auth: {
         user: process.env.SENDER_ID, // generated ethereal user
         pass: process.env.PASSWORD, // generated ethereal password
       },
     });

   
     const sendInfo = {
       from : process.env.SENDER_ID,
       to: userEmail,
       subject: "Registered Successfully",
       html: `<h1>Hi,</h1>
       <p>Congrats!! Now you are registered to FundooNotes</p>`

     }
     return new Promise((resolve, reject)=>{
      transporter.sendMail(sendInfo, (err,info)=>{
        if(err){
          logger.log("error",err)
          return reject();
        }else{
          logger.log("info",info)
           return resolve("Email sent")
        }
      })
     })
     
     
  }

  