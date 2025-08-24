import aiService from '../services/ai.service.js'

const getReview = async(req,res)=>{
    const code = req.body.prompt;
   try {
     if(!code){
         return res.status(400).send('Prompt is required')
     }
     const response = await aiService(code)
     res.send(response)
   } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
   }
}
export default getReview;