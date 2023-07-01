import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handelUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handelLowerClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handelClearClick = () => {
        let newtext = '';
        setText(newtext);
        props.showAlert("Text Cleared", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const onChanged = (event) => {
        setText(event.target.value);
    }

    return (<div>
        <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <div className="mb-3 my-4">
                <h1> {props.heading}</h1>
                <label htmlFor="text-box" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={onChanged} id="text-box" style={{ backgroundColor: props.mode === 'dark' ? '#03182d' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handelUpClick} disabled={text.length === 0}> Convert Into Upper Case </button>
            <button className="btn btn-primary mx-2 my-2" onClick={handelLowerClick} disabled={text.length === 0}> Convert Into Lower Case </button>
            <button className="btn btn-primary mx-2 my-2" onClick={handelClearClick} disabled={text.length === 0}> Clear Text </button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy} disabled={text.length === 0}> Copy Text </button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces} disabled={text.length === 0}> Remove Extra Spaces </button>
        </div>
        <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <h1>You Text Summary</h1>
            <p> the text have {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words</p>
            <p> the text have {text.length} Characters</p>
            <p> {0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes to Read</p>
            <h2> Preview </h2>
            <p>{text.length > 0 ? text : "Enter something in the above textbox to preview here "}</p>
        </div>

    </div>
    )
} 
