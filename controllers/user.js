import { User } from "../models/user.js"



export const login = (req, res, next) => {
    res.send('Login')

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
        sucess:true,
        message:"Register Successfully"

    })

}

