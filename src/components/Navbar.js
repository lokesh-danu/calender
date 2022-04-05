import React from 'react'
import {MdSignalCellularAlt} from 'react-icons/md'
import {FiBell} from 'react-icons/fi'
import './comp.css'
export default function Navbar(props ) {
  return (
    <div className='navbar' style={{display:"flex"}}>
        <MdSignalCellularAlt style={{height:"1.2rem"}}></MdSignalCellularAlt>
        {props.children}
        <FiBell style={{height:"1.2rem"}} ></FiBell>
    </div>
  )
}
