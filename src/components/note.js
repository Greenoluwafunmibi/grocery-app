import React from 'react';
import { RiDeleteBin2Fill } from "react-icons/ri";


const Note = ({id, note, price, remove}) => {
  return (
    <div className="note-div">
        <h3>{note}</h3>
        <h3>&#163;{price}</h3> 
        <RiDeleteBin2Fill className="delete" onClick={()=>remove(id)}/>
        

    </div>
  )
}

export default Note