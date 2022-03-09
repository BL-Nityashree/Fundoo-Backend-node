import jwt from 'jsonwebtoken';
// const jwt = require('jsonwebtoken'); we can either use import or require

export const generateToken = (emailMatch) => {
    let token = jwt.sign({"email":emailMatch.email, "id": emailMatch._id}, process.env.SECRET_KEY)
    return (emailMatch, token)
}