// import React from 'react'
import {HiOutlineCalendar} from 'react-icons/hi'
import {BsSearch} from 'react-icons/bs'
import './comp.css';
export const Bottom = () => {
  return (
    <div className='bottom-bar'>
        <HiOutlineCalendar style={{height:"10px"}}></HiOutlineCalendar>
        <button></button>
        <BsSearch></BsSearch>
    </div>
  )
}
