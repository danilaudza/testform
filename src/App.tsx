import React from 'react';
import { useState, useEffect } from 'react';
import copy from "copy-to-clipboard";  
import './App.css';

function App() {
  const [name,setName] = useState("")
  const [text,setText] = useState("")
  const [copyText,setCopy] = useState("")

  useEffect(() => {
    setCopy(`Name : ${name}\nText : ${text}`)
    console.log(copyText)
  },[name,text]);

  const copyToClipboard = () => {

    copy(copyText);
    alert(`You have copied "${copyText}"`);
 }
  return (
    <div className='flex flex-col'>
      <p>Name</p>
      <input onChange={e => setName(e.target.value)} className="border-2"/>
      <p>Text</p>
      <input onChange={e => setText(e.target.value)} className="border-2"/>
      <div className='bg-gray-600'>
          <p>Name : {name}</p>
          <p>Text : {text}</p>
      </div>

      <button className='bg-red-600' onClick={copyToClipboard}>
               Copy to Clipboard
      </button>
    </div>
  );
}

export default App;
