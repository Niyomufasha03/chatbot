import React, { useState } from "react";

const ChatWindow = ({messages, onSend}) => {
    const [input, setInput] = useState("")
    const handleSend = ()=>{
        if(input.trim() !== " "){
            onSend(input)
            setInput("")
        }
    }
    return(
        <div className="w-full flex flex-col h-full p-1.5 bg-white">
            <div className="flex-grow overflow-auto bg-[#f3f4f6] p-4 rounded shadow-sm flex flex-col"> {messages.map((message)=>{
                    console.log(message.sender);
                    return(<div key={message.key} className={`mb-4 p-2 rounded-md max-w-xl ${message.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 self-start'}`}>
                        {message.content}
                    </div>)
                })}
            </div>
            <div className="flex mt-4 mb-4">
                <input type="text" className="flex-grow p-2 border rounded-l-md focus:outline-none focus:rind focus:border-blue-300"
                value = {input}
                onChange={(event)=>{setInput(event.target.value)}} 
                onKeyDown={(event)=>{event.key == "Enter" && handleSend()}}/>
                <button onClick={()=>{handleSend()}} className="bg-blue-500 ml-2 w-20 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:rind focus:ring-blue-300 mr-2">
                    Send
                </button>
            </div>
        </div>
    )
}

export default ChatWindow;