import dotenv from 'dotenv'
import connectDb from './db/index.js'
import express from 'express'

dotenv.config({
    'path': './.env'
})


const app = express()

connectDb()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("Error mongodb connection failes !!! ", err);
})








































// const app = express()

// ;(async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`\n Mongodb connected !! DB HOST: ${connectionInstance.connection.host}`);
//        app.on((error) => {
//         console.log(error, "failed to connect");
//         throw error
//        })
//        app.listen(process.env.PORT, () => {
//         console.log(`${process.env.PORT}`);
//        })
//     } catch (error) {
//         console.error("error of connectiing db");
//         throw error
//     }
// })