import path from 'path'
import express from 'express'
import aiRoutes from './routes/ai.route.js'
import cors from 'cors'

const app = express();
const _dirname = path.resolve()

app.use(express.json());
app.use(cors())

// app.get('/',(req,res)=>{
//     res.send('Running')
// })
app.use('/api/ai',aiRoutes)

app.use(express.static(path.join(_dirname, "/Frontend/dist")))
app.get('*', (_,res)=>{
    res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"))
})

export default app;