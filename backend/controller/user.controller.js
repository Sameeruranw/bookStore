const User = require("../model/user.model");
const bycryptjs = require("bcryptjs")
const Signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exist" })
        }
        const hashPassword =await bycryptjs.hash(password, 10)
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        })
        createdUser.save()
        res.status(201).json({ message: "User created successfully" })
    } catch (error) {
        console.log("Error:" + error.message)
        res.status(500).json({ message: "internal server error" })
    }
};

const login =async(req,res)=>{
    try {
        const{email,password} = req.body
        const user = await User.findOne({email})
        const isMatch =await bycryptjs.compare(password,user.password)
        if(!user || ! isMatch){
            return res.status(400).json({message:"invalid username or password"});
        }
        else{
            res.status(200).json({message:"login sucessfull",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }

    } catch (error) {
        console.log("Error:" + error.message)
        res.status(500).json({message:"internal server error"})
      }
}



exports.Signup = Signup;
exports.login = login;