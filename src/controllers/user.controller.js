import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllUsers = async (req, res, next) => {
  try {
    const data = await UserService.getAllUsers();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All users fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const registerUser = async (req, res, next)=>{
  try{
    const registereddata = await UserService.regUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data:registereddata,
      message: 'User registered successfully'
    });

  }catch (error){
    next(error)
  }
}

/**
 * Controller to login user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const loginUser = async (req, res,next) => {
   try{
     const loginData = await UserService.loginUser(req.body);
     console.log(loginData);
     res.status(HttpStatus.OK).json({
       code: HttpStatus.OK,
       data: loginData,
       message: 'Login successful'
     });
   }catch (error){
    next(error)
   }
 }

/**
 * Controller to forget Password 
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const forgetPassword = async (req, res, next) => {
  try {
    const data = await UserService.forgetPasswordService(req.body);
    if (data){
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Sent a mail to reset password'
      });
    }
    
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to forget Password 
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const resetPassword = async (req, res, next) => {
  try {
    const data = await UserService.resetPasswordService(req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'reset password successful'
    });
  } catch (error) {
    next(error);
  }
};


