import dotenv from "dotenv"
import conntectDB from "./db/index.js"

dotenv.config({
    path: "./env"
})

conntectDB()