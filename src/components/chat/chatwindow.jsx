import React, { useState } from "react";
import { ThumbsUpIcon, ThumbsDownIcon } from "hugeicons-react"

const ChatWindow = ({messages, onSend}) => {

    const [providefeedback, setProvideFeedback] = useState(false)
    const [feedback, setFeedback] = useState("")
    const [input, setInput] = useState("")
    const handleSend = ()=>{
        if(input.trim() !== " "){
            onSend(input)
            setInput("")
        }
    }


    const handleClose = () =>{
        setProvideFeedback(false)
    }

    const handleSubmitFeedback =()=>{
        // send feedback to the backend
        const checked = document.querySelectorAll('input[type="checkbox]:checked')
        classes = []
        checked.forEach((checked_)=>{
            classes.push(checked_.value)
        })
        console.log(classes);
        setFeedback("")
        setProvideFeedback(false)
    }    

    const FeedbackForm = ()=>{
        return <div className="justify-center bg-[#f3f4f6] rounded-md w-[60%] self-center h-[60%] mt-[10%]">
            <form className="w-full p-4 z-10">
                <div className="flex flex-row justify-center">
                    <ThumbsDownIcon color="red" className="bg-red-50 rounded-xl"/>
                    <h1 className ="font-bold text-mdn ml-3">Provide additional feedback</h1>
                </div>
                <textarea name="" placeholder="What was the issue with the response? How could it be improved?" id="" className="mt-4 w-full h-28 border rounded-md p-3 focus:outline-none focus:rind focus:ring-blue-300"></textarea>
                <div className="flex flex-row">
                <input className="m-2" type="checkbox" id="harmful"/>
                    <label className="m-2" htmlFor="harmful">
                    This is harmful / unsafe</label>
                </div>
                <div className=" flex flex-row container">
                    <input type="checkbox" id="helpful" className="m-2"/>
                    <label className="m-2" htmlFor="helpful">This isn't helpful</label>
                </div>
                <div className="container">
                    <input className="m-2" type="checkbox" id="helpful"/>
                    <label className="m-2" htmlFor="helpful">
                    This isn't true</label>
                </div>
                <div className="flex flex-row justify-end">
                    <button className="bg-blue-200 p-1 w-16 mr-4" onClick={()=>{handleClose()}}>back</button>
                    <button className="bg-green-200 border text-black p-1" onClick={()=>{handleSubmitFeedback()}}>Submit Feedback</button>
                </div>
            </form>
        </div>
    }

    return(
        <div className={`w-full flex flex-col h-full p-1.5 ${(providefeedback) ? 'bg-[#f3f4f6]' : 'bg-white'}`}>
            {providefeedback ? <FeedbackForm />:
            <div className="flex-grow overflow-auto bg-[#f3f4f6] p-4 rounded shadow-sm flex flex-col"> {messages.map((message)=>{
                    return(<div key={message.key} className={`mb-4 p-2 rounded-md max-w-xl ${message.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 self-start'}`}>
                        <div className="flex flex-row">
                            {message.content}
                        </div>
                        {message.sender != "user"? <div className="flex flex-row justify-end">
                                <ThumbsUpIcon onClick={()=>{setTimeout(alert("Thank you for your feedback!"), 2)}} type="sharp" color="rgb(59 130 246 / var(--tw-bg-opacity))" size={18} className="hover:cursor-pointer" />
                                <ThumbsDownIcon onClick={()=>{setProvideFeedback(true)}} type="sharp" color="rgb(59 130 246 / var(--tw-bg-opacity))" className="hover:cursor-pointer ml-1 right-0"  size={18}/>
                            </div> : "" }
                    </div>)
                })}
            </div>}
                {!providefeedback ?             <div className="flex mt-4 mb-4">
                <input type="text" className="flex-grow p-2 border rounded-l-md focus:outline-none focus:rind focus:border-blue-300"
                value = {input}
                onChange={(event)=>{setInput(event.target.value)}} 
                onKeyDown={(event)=>{event.key == "Enter" && handleSend()}}/>
                <button onClick={()=>{handleSend()}} className="bg-blue-500 ml-2 w-20 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:rind focus:ring-blue-300 mr-2">
                    Send
                </button>
            </div>
            : ""}
        </div>
    )
}

export default ChatWindow;