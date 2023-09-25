import { User } from "../models/user.js"





export const login = async (req, res, next) => {

    const { email, password } = req.body
    const user = await User.findOne({ email }).select("+password")


    if (!user){
        return res.status(400).json({
            sucess:false,
            message:"Incorrect Email"
        })
    }


    // Handle error 
    const isMatched = await user.comparePassword(password)

    if (!isMatched) {
        return res
            .status(400)
            .json({ sucess: false, message: "Incorrect  Password" })
    }
    res.status(200).json({
        sucess:true,
        message:`Welcome back, ${user.name}`
    })



}

export const signup = async (req, res, next) => {

    const {
        name,
        email,
        password,
        address,
        city,
        country,
        pinCode
    } = req.body

    // Add C


    await User.create({
        name,
        email,
        password,
        address,
        city,
        country,
        pinCode
    })


    res.status(201).json({
        sucess: true,
        message: "Register Successfully"

    })

}

