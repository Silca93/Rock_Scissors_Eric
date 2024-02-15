import React from 'react'

export default function Paper(props) {
  return (
    <div className="rock h-full w-1/2 flex justify-center items-center">
        <div onClick={() => props.setChoice("paper")} className="container cursor-pointer h-[180px] w-[180px] border-[1.25rem] border-solid border-[#5473f7] bg-white rounded-full flex justify-center items-center">
            <img src={props.papel} alt="" />

        </div>

    </div>
  )
}
