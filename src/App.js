import './App.css';
import Nav from './components/Nav';
import Note from './components/note';
import React, {useState} from 'react';
import { addNote, removeNote } from './features/grocery';
import {useDispatch, useSelector} from "react-redux";
import { nanoid } from 'nanoid';


function App() {
  const data = useSelector((state)=>state.grocery.value);

  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");

  

  


  const dispatch = useDispatch();

  const add = (event)=>{
    event.preventDefault();

    dispatch(addNote({
      id: nanoid(),
      text: input,
      price: Math.round(amount),
    }));

    setInput("");
    setAmount("");
  }


  

  return (
    <div className="App">
      <Nav/>

      <div className="container">
      
      <form onSubmit={add} >
        <input type="text" placeholder="Type Grocery here" className="text" onChange={(event)=>{setInput(event.target.value)}} value={input}  ></input>
        <input type="number" placeholder="Price" className="amount" onChange={(event)=>{setAmount(event.target.value)}} value={amount}  ></input>
        <button type="submit">Add</button>
      </form>

      <div>
        
        { data &&
          data.map((eachNote)=>{
            const {text, id, price} = eachNote;
            return (
            <Note
              key={id}
              id={id}
              note={text}
              price={price}
              remove={()=>dispatch(removeNote(id))}
            />);
          })
        }

      </div>
      
      </div>
    </div>
  );
}

export default App;
