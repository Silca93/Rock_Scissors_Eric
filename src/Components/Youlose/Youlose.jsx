import React from 'react'
import Paper from '../Paper/Paper'
import Scissors from '../Scissors/Scissors'

export default function Youlose(props) {
  return (
    <div className={`w-full h-3/5 flex flex-col justify-center items-center`}>
      <div className="laboxeflex w-1/2 h-[200px] flex justify-between px-[50px]"> 
        <h1 className="text-white text-[1.55rem]">YOU PICKED </h1> 
        <h1 className="text-white text-[1.55rem]">THE HOUSE PICKED</h1>
      </div>
      
        
        <div className="left w-1/2 h-full flex justify-center items-center">
            
            <Paper/>
            <div className="w-[200px] h-[100px] flex justify-center items-center flex-col gap-3">
                <h1 className='text-white text-[2.25rem]'>YOU LOST</h1>
                <button onClick={() => props.setCount("Accueil")}  className="bg-white w-[150px] rounded-md py-3">PLAY AGAIN</button>
            </div>
            <Scissors/>
        </div>
    </div>
  )
}
