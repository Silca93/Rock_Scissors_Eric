import React from 'react'
import App from '../App'

export default function Header(props) {
  return (
    <div className="container w-1/2 h-1/5 flex justify-center">
        <div className="w-full h-full border-2 border-solid border-white rounded-xl mt-10 leading-none  pl-5 pr-5 flex justify-between">
          <div className="left w-1/2 h-full flex flex-col items-start justify-center">
            <h1 className="text-white text-[2.25rem] ">ROCK</h1>
            <h1 className="text-white text-[2.25rem] ">PAPER</h1>
            <h1 className="text-white text-[2.25rem] ">SCISSORS</h1>
          </div> 
          <div className="right w-1/2 h-full flex flex-col items-end justify-center">
            <div className="square w-[140px] h-[110px] bg-white rounded-md flex flex-col gap-4 items-center justify-center">
                <h1>SCORE</h1>
                <h1 className="text-[3.15rem]">{props.score}</h1>
            </div>
          </div>   
        </div>
    </div>
  )
}
