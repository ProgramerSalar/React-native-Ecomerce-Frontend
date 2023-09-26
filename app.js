import express from "express";
import { config } from "dotenv";
import cookieParser from 'cookie-parser'

config({
  path: "./data/config.env",
});




export const app = express()



// Using Middleware 
app.use(express.json())
app.use(cookieParser())



app.get('/', (req, res, next) => {
  res.send('working')
})


// import Routes here 
import user from './routes/user.js'
import product from './routes/product.js'


app.use('/api/v1/user', user)
app.use('/api/v1/product', product)




// using Error Middleware 
import { errorMiddleware } from "./middlewares/error.js";
app.use(errorMiddleware)