const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthService {
  async register(data) {
    const hashed = await bcrypt.hash(data.password, 10);
    return User.create({ email: data.email,password: hashed });
  }

  async login(data) {
    const user = await User.findOne({ email:data.email});
    if (!user) throw new Error("Invalid credentials");

    const valid=await bcrypt.compare(data.password, user.password);
    if (!valid) throw new Error("Invalid credentials");

    return jwt.sign({id:user._id}, process.env.JWT_SECRET);
  }
}

module.exports=new AuthService();
