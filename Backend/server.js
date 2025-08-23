import dotenv from 'dotenv'
dotenv.config({ path: "./.env" });

import app from './src/app.js'

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})
