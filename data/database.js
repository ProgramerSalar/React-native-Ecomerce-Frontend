import mongoose from 'mongoose'


export const connectDB = async() => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URL,{
            dbName:"udamy_user",
        })

        console.log(`Server Connected to database...........................................ON ${connection.host}`)
        
    }
    catch (error) {
        console.log(error)
        process.exit(1)

    }
}