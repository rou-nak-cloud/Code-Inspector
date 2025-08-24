import React from 'react'
import Navbar from './navbar'
import CodeBlock from './CodeBlock';
import axios from 'axios'
import { useState } from 'react';
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'

const Ui = () => {
     const [code, setCode] = useState(`function greet(name) {
    return \`Hello, \${name}!\`;
  }
  console.log(greet("World"));`)

    const [review, setReview] = useState(`👋 Welcome to GenAI Reviewer — your expert dev assistant! Paste your code on the left and click *Review* to get feedback.`)
    const [loading, setLoading] = useState(false);

  
    const apiUrl = import.meta.env.VITE_API_reviewURL;
    async function reviewCode() {
        try {
            setLoading(true); // show loader
            const response = await axios.post(`${apiUrl}/get-review`, { code });
            setReview(response.data);
        } catch (error) {
            setReview("Error while fetching review.");
            console.error(error);
        } finally {
            setLoading(false); // hide loader
        }
    }
  return (
    <>
    <Navbar />
       <div className='w-full h-[calc(100vh-28px)] p-1.5 flex items-center justify-around gap-4 max-sm:flex-col'>
        <div className='right relative h-full basis-[40%] bg-gray-900 rounded-xl max-sm:h-1/2 max-sm:w-full cursor-cell'>
        <h1 className='text-white/80 text-center pt-1 pb-3 font-mono'>Write your <span className='text-blue-500'>Code</span> here or <span className='text-blue-700'>Paste</span> here</h1>
            <CodeBlock 
            language="javascript" 
            initialCode={code}
            // "Hey CodeBlock, whenever something changes inside you, please call this onChange function I’m giving you, and tell me what the new value is."
            onChange={setCode} // pass setter to update Ui state
            />
          <button 
          onClick={reviewCode}
          className='absolute bottom-2 right-4 bg-blue-600/90 text-white/90 sm:font-semibold px-7 py-3 max-sm:px-2 max-sm:py-1 cursor-pointer rounded-md hover:bg-blue-600/80 transition-colors duration-300 select-none'> 
            {loading ? "Checking..." : "Review"}
          </button>
        </div>
        <div className='left h-full basis-[60%] max-sm:p-2 sm:p-4 sm:text-lg overflow-auto bg-gray-700/90 text-gray-300 leading-8 rounded-xl max-sm:h-1/2 max-sm:w-full'>
            <div className='markdown'>
                {loading ? (
                       <div className=" h-screen flex flex-col items-center justify-center gap-3">
                        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
                        <p className="font-mono text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Reviewing your code...</p>
                       </div>
                ) : review.startsWith("👋") ? (
                    // Welcome Hero
                    <div className="text-center max-w-2xl mx-auto sm:pt-60 max-sm:pt-10">
                        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent leading-snug select-none">
                        {review}
                        </h1>
                    </div>
                    ) : (
                    <Markdown
                    rehypePlugins={[ rehypeHighlight ]}
                    
                    >
                    {review}
                    </Markdown>
                )}
            </div>
        </div>
      </div>
    </>
  )
}

export default Ui