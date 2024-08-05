import React, { useState } from "react";

const NewConversation = ({onCreate}) =>{
    const [name, setName] = useState("")
    const handleCreate = () =>{
        if(name.trim() !== ''){
            onCreate(name)
            setName('')
        }
    }

    return(
        <div className= "justify-between items-center mb-4" >
            <input type="text" 
            className="w-8/9 p-2 border rounded-md mb-4 focus:outline-none focus:border-blue"
            placeholder="new conversation name"
            value = {name}
            onChange={(event)=>{setName(event.target.value)}}/>
            <button className="w-20 bg-blue-500 ml-2 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 "
            onClick={handleCreate}>Create</button>
        </div>
    ) 
}


export default NewConversation;