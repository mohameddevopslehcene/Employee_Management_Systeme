import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import departementRouter from './routes/department.js'
import connectToDataBase from './db/db.js'


connectToDataBase()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/department', departementRouter)

app.listen(process.env.PORT, ()=>{
    console.log("Server is runing on port : " + process.env.PORT)
})

