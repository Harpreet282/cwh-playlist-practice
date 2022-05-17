import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const changeHandle = (e) => {
    setText(e.target.value);
  };
  const upperCase = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to Upper-case','success')
  };
  const lowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to Lower-case','success')
  };
  const getWordCount=(str)=> {
    return str.split(' ')
      .filter(function(n) { return n !== '' })
      .length;
}
const getCharCount=(str)=> {
   var withoutSpace = str.replace(/ /g,"");
    var textLength=withoutSpace.length;
    return textLength;
}

  return (
    <div className={`container my-4 text-${props.mode==='light' ? 'black' : 'white'}`} style={{backgroundColor:`${props.mode==='light' ? 'white' : props.mode==='success'?'#093a14':'rgb(14 58 102)'}`}} >
      <h1>Enter Your Text Here</h1>
      <form className="my-2">
        <div className="form-group">
          <textarea
            className="form-control"
            id="textArea"
            rows="8"
            value={text}
            onChange={changeHandle}
            style={{backgroundColor:`${props.mode==='light' ? 'white' : 'gray'}`,color:`${props.mode==='light' ? 'black' : 'white'}`}}
          ></textarea>
        </div>
      </form>
      <button className={`btn btn-${props.mode==='light'?'primary' : props.mode} mx-2`} style={{border:'1px solid white'}} onClick={upperCase}>
        Convert To Upper-Case
      </button>
      <button className={`btn btn-${props.mode==='light'?'primary' : props.mode} mx-2`} style={{border:'1px solid white'}} onClick={lowerCase}>
        Convert To Lower-Case
      </button>
      
      <button className={`btn btn-${props.mode==='light'?'primary' : props.mode} mx-2`} style={{border:'1px solid white'}} onClick={() => setText("") }>
        Clear
      </button>
      <p className="my-2">Total Words: {getWordCount(text)} </p>
      <p>Total Characters:{getCharCount(text)}</p>
      <p>
        It will take about {0.008 * text.split(" ").filter(function(n) { return n !== '' }).length} minutes to read.
      </p>
      <h2>Preview</h2>
      <p style={{ textAlign: "justify" }}>{text.length >0  ? text : 'Enter Something in text-box to preview it...'}</p>
    </div>
  );
};

export default TextForm;
