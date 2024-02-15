import React from 'react'

export default function Scissors(props) {
  return (
    <div className="scissors h-full w-1/2 flex justify-center items-center">
        <div className="container h-[180px] w-[180px] border-[1.25rem] border-solid border-[#efa925] bg-white rounded-full flex justify-center items-center">
            <img src={props.tijera} alt="" />

        </div>

    </div>
  )
}
