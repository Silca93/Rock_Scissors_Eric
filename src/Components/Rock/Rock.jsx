import React from 'react'

export default function Rock(props) {
  return (
    <div className="rock h-full w-1/2 flex justify-center items-center">
        <div className="container h-[180px] w-[180px] border-[1.25rem] border-solid border-[#dc4563] bg-white rounded-full flex justify-center items-center">
            <img src={props.piedra} alt="" />

        </div>
    </div>
  )
}
