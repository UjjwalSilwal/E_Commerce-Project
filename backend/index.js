//Packages
import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

//Utiles
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

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
app.use("/api/category", categoryRoutes)
app.use("/api/products", productRoutes )

// for images
app.use('/api/upload', uploadRoutes)

const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname + "/uploads")))


app.listen(port,()=>console.log(`Server running on port : ${port}`))