import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const userAuth = async (req, res, next) => {
  try {
   
    console.log("inside try user auth", bearerToken);
    if (!bearerToken)
    
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];

    const { user } = await jwt.verify(bearerToken, 'your-secret-key');
    res.locals.user = user;
    res.locals.token = bearerToken;
    next();
  } catch (error) {
    next(error);
  }
};


export const userAuthorization = async (req, res, next) => {

  try {
    let bearerToken = req.header('Authorization');
    // console.log("inside try", bearerToken);
    if (!bearerToken){
    // console.log("inside if");
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token required'
      }
    }else{
    // console.log("inside else", bearerToken);
     bearerToken = bearerToken.split(' ')[1];
    // console.log("inside else",bearerToken);
    const user  = await jwt.verify(bearerToken, process.env.SECRET_KEY, (err, token) => {
      // console.log("insideuser",user);
      if (err) {
        // console.log("inside other if");
        throw {
          code: HttpStatus.BAD_REQUEST,
          message: 'Authorization token is not correct'
        }
      } else {
        // console.log("insideother else");
        req.body['data'] = token;
        // console.log("req data==========", req.body.data);
        next();
      }

    })
  }

  } catch (error) {
    next()
  }
}

export const AuthUser = async (req, res, next) => {

  // console.log("inside", req.body);
  try {
    let bearerToken = req.header('Authorization');
    // console.log("inside try", bearerToken);
    if (!bearerToken){
    // console.log("inside if");
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token required'
      }
    }else{
    // console.log("inside else", bearerToken);
     bearerToken = bearerToken.split(' ')[1];
    // console.log("inside else",bearerToken);
    const user  = await jwt.verify(bearerToken, process.env.SECRET_WORD, (err, token) => {
      // console.log("insideuser",user);
      if (err) {
        // console.log("inside other if");
        throw {
          code: HttpStatus.BAD_REQUEST,
          message: 'Authorization token is not correct'
        }
      } else {
        // console.log("insideother else");
        req.body['data'] = token;
        // console.log("req data==========", req.body.data);
        next();
      }

    })
  }

  } catch (error) {
    next()
  }
}