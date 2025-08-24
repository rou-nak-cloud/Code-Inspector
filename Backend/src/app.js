import express from 'express'
import aiRoutes from './routes/ai.route.js'
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Running')
})
app.use('/api/ai',aiRoutes)

export default app;