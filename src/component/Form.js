import React, { useState } from 'react'

export default function Form(props) {

    const [text, setText] = useState('')
    
    const handletoChange = (event) => {
        setText(event.target.value)
    }


    const handleToUppercase = () => {
        let newText=text.toUpperCase()
        setText(newText)
    }

    const handleToLowercase = () => {
        let newText=text.toLowerCase()
        setText(newText)
    }

    const handleToCopy = () => {
        let newText=document.getElementById("exampleFormControlTextarea1")
        newText.select()
        navigator.clipboard.writeText(newText.value)
    }

    const handleToClear = () => {
        setText('')
    }

    return (

    
        <>
        <div className="container my-3">
        <h2>Enter the text below to analyze</h2>
            <div className="mb-3"  >
                <textarea className="form-control"  data-bs-theme={props.nowcolor} value={text}onChange={handletoChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button type="button" onClick={handleToUppercase} className="btn btn-primary mx-2 my-2">Convert to Uppercase</button>
            <button type="button" onClick={handleToLowercase} className="btn btn-primary mx-2 my-2">Convert to Lowercase</button>
            <button type="button" onClick={handleToCopy} className="btn btn-primary mx-2 my-2">Copy text</button>
            <button type="button" onClick={handleToClear} className="btn btn-primary mx-2 my-2">Clear text</button>
        </div>
        </>
    )
}
