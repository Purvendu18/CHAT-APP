// import { hash } from "bcrypt";   
import User from "../Model/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCoockie from "../jwt/generateToken.js";

export const signup = async (req, res) => {
    try {
        const {name, email, password, confirmpassword} = req.body;
    if(password != confirmpassword)
       { return res.status(400).send({message: "Passwords don't match"}); }

    const user = await User.findOne({email})
    if(user)
        { return res.status(400).send({message: "Email already exists"}); }
    
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await new User({name, email, password: hashPassword});
    
        await newUser.save();
        if(newUser){
            createTokenAndSaveCoockie(newUser._id, res);
            res.status(201).json({message: "User registered succesfully" , newUser});
        }
           
        

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error registering user"});
        
    }
    
};



export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        
        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(password, user.password);

        if(!user || !isMatch){
            return res.status(400).send({message: "Invalid Username or Password"});
        }
        createTokenAndSaveCoockie(user._id, res);
        res.status(201).json({message: "User logged in succesfully" , 
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,

        },
    });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error registering user"});
    }
};


export const logout = async (req, res) => {
    try {
        res.clearCookie('jwt');
        res.status(200).json({message: "User logged out succesfully" });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error registering user"});
    }
} 