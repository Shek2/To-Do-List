import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItems = ({ item, handleClick, handleDelete }) => {
  return (
    <li className='item'>
                    <input type='checkbox'
                    onChange={()=>handleClick(item.id)}
                    checked={item.checked} />
                <label style={(item.checked) ? {textDecoration:"line-through"}:null} onDoubleClick={()=>handleClick(item.id)}>{item.item}</label>
                <FaTrashAlt 
                onClick={()=>handleDelete(item.id)}
                role='button'
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
                />
                </li>
  )
}

export default LineItems