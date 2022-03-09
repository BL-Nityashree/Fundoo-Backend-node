import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { AuthUser } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all users
router.get('', userController.getAllUsers);

//route to register a new user
router.post('/register',newUserValidator, userController.registerUser);

//route to login a registered user
router.post('/login',userController.loginUser);

//route to forget password
router.post('/forgetPassword',userController.forgetPassword);

//route to forget password
router.put('/resetPassword',AuthUser,userController.resetPassword);


export default router;
