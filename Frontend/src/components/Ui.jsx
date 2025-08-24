import React from 'react'
import Navbar from './navbar'
import CodeBlock from './CodeBlock';

const Ui = () => {
  return (
    <>
    <Navbar />
       <div className='w-full h-[calc(100vh-28px)] p-1.5 flex items-center justify-around gap-4 max-sm:flex-col'>
        <div className='right relative h-full basis-[50%] bg-gray-900 rounded-xl max-sm:h-1/2 max-sm:w-full cursor-cell'>
            <CodeBlock language='javascript' code={`function sum(a, b) {
             return a + b;}`} 
            />
             {/* <CodeBlock
                language="java"
                code={`public class Main {
                public static void main(String[] args) {
                    System.out.println("Hello, World!");
                }
                }`}
             /> */}
          <button className='absolute bottom-2 right-4 bg-blue-600/90 text-white/90 sm:font-semibold px-7 py-3 max-sm:px-2 max-sm:py-1 cursor-pointer rounded-md hover:bg-blue-600/80 transition-colors duration-300 select-none'>Review</button>
        </div>
        <div className='left h-full basis-[50%] bg-gray-300 rounded-xl max-sm:h-1/2 max-sm:w-full'>

        </div>
      </div>
    </>
  )
}

export default Ui