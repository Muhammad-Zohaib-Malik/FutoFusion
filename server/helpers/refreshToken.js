import jwt from 'jsonwebtoken'

export const generateRefreshToken=(user)=>
  jwt.sign(user, process.env.REFRESH_TOKEN_SECRET,{expiresIn:"1d"})
