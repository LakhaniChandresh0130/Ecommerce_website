import React from 'react'
import axios from "axios";
import { useState} from "react";

function Chat() {
    const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handlesubmit =(e)=>{
    e.preventDefault();

    axios
    .post("http://localhost:8080/chat",{prompt})
    .then((res) => {setResponse(res.data)})
    .catch((err) => {console.error(err)});
  };

  return (
    <>
        <div className ="w-[720px]  py-24 items-center m-auto mx-10px">
          <h1 className='text-center text-3xl'>CHAT WITH ME</h1>
          <form className='w-full text-center' onSubmit={handlesubmit}>
          <input type="text" value={prompt} onChange={(e)=>setPrompt(e.target.value)} placeholder="Enter your prompt here" className='border-2 rounded-full p-2 text-center'/>
          <button type="submit" className='m-4 border-2 rounded-full  p-2 text-center'>Generate Response</button>
          </form>
          <div className="w-full items-center mt-4">
            <p>{response}</p>
          </div>
          
        </div>
    </>
  )
}

export default Chat
