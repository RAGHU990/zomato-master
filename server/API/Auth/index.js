// libary
import express from "express";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";

//Models
import { UserModel } from "../../database/user";

const Router = express.Router();

Router.post("/signup", async (req, res) => {
    try {
     await UserModel.findBYEmailAndPhone(req.body.credentials);
      const newUser =  await UserModel.create(req.body.credentials);
        const token = newUser.generateJwtToken();
        return res.status(200).json({ token, status:"success" });
         }
          catch (error) {
        return res.status(500).json({error: error.message});

    }
});

/* Route   /signin
   Des     Signin with email and password
   Params none 
   Access Public
   Method POST 
*/ 

Router.post("/signin", async (req, res) => {
    try {
   const user = await UserModel.findBYEmailAndPassword(
       req.body.credentials
       );
     
        const token = user.generateJwtToken();
        return res.status(200).json({ token, status:"success" });
         }
          catch (error) {
        return res.status(500).json({error: error.message});

    }
});


export default Router;