//Packages
import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import categoryRoutes from './routes/categoryRoutes.js'


//Utiles
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config();
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// For user ROutes
app.use("/api/users", userRoutes);
// For Category Routes
app.use('api/category', categoryRoutes)


app.listen(port,()=>console.log(`Server running on port : ${port}`))