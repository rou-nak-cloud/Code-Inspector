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

    const [review, setReview] = useState(``)

  
    const apiUrl = import.meta.env.VITE_API_reviewURL;
    async function reviewCode(){
        const response = await axios.post(`${apiUrl}/get-review`, { code });
        // console.log(response.data)
        setReview(response.data)
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
          className='absolute bottom-2 right-4 bg-blue-600/90 text-white/90 sm:font-semibold px-7 py-3 max-sm:px-2 max-sm:py-1 cursor-pointer rounded-md hover:bg-blue-600/80 transition-colors duration-300 select-none'>Review</button>
        </div>
        <div className='left h-full basis-[60%] max-sm:p-2 sm:p-4 sm:text-lg overflow-auto bg-gray-700/90 text-gray-300 leading-8 rounded-xl max-sm:h-1/2 max-sm:w-full'>
            <div className='markdown'>
                <Markdown
                rehypePlugins={[ rehypeHighlight ]}
                >
                {review}
               </Markdown>
            </div>
        </div>
      </div>
    </>
  )
}

export default Ui