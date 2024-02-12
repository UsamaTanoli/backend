import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const conntectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDb connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`Error: MongoDB connetctin Failed : ${error}`);

    }
}

// conntectDB()

export default conntectDB;