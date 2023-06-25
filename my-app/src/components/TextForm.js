import React, { cloneElement, useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handelUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handelLowerClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handelClearClick = () => {
        let newtext = '';
        setText(newtext);
    }

    const onChanged = (event) => {
        setText(event.target.value);
    }

    return (<>
        <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <div className="mb-3 my-5">
                <h1> {props.heading}</h1>
                <label htmlFor="text-box" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={onChanged} id="text-box" style={{ backgroundColor: props.mode === 'dark' ? '#03182d' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handelUpClick}> Convert Into Upper Case </button>
            <button className="btn btn-primary mx-2 my-2" onClick={handelLowerClick}> Convert Into Lower Case </button>
            <button className="btn btn-primary mx-2 my-2" onClick={handelClearClick}> Clear Text </button>
        </div>
        <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <h1>You Text Summary</h1>
            <p> the text have {text.split(" ").length}words</p>
            <p> the text have {text.length} Characters</p>
            <p> {0.008 * text.split(" ").length} Minutes to Read</p>
            <h2> Preview </h2>
            <p>{text.length > 0 ? text : "Enter something in the above textbox to preview here "}</p>
        </div>

    </>
    )
} 
