import aiService from '../services/ai.service.js'

const getResponse = async(req,res)=>{
    const prompt = req.query.prompt;
   try {
     if(!prompt){
         return res.status(400).send('Prompt is required')
     }
     const response = await aiService(prompt)
     res.send(response)
   } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
   }
}
export default getResponse;