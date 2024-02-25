import dotenv from "dotenv"
import conntectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
    path: "./env"
})

conntectDB()
.then(()=> {
    app.listen(process.env.PORT || 8000);
    console.log(`Server App is listning on PORT: ${process.env.PORT}`);
})
.catch((err) => {
    console.log("MongoDb connection failed! :" ,err);
})

