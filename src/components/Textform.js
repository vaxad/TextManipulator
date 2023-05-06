import React, {useState} from 'react'


export default function Textform(props) {

    const toUpr=()=>{
        let newtext=text.toUpperCase();
        settext(newtext);
    }


    const handleOnChange=(event)=>{
        settext(event.target.value);
        
    }

    const clrBox=(event)=>{
        let newtext="";
        settext(newtext);
    }

    const cpy=(event)=>{
    navigator.clipboard.writeText(text);
    }

    const toInverse=(event)=>{
        let newtext=text;
        let a=[];
        for(let i=0;i<newtext.length;i++){
            if(i%2==0){
                a.push(newtext.charAt(i).toUpperCase());
            }else{
                a.push(newtext.charAt(i).toLowerCase());
            }
        }
        settext(a.join(""));
    }

    const [text,settext]=useState("");
    return (
        <>
        <div style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>  
            <div className="mb-3">
                <textarea className="form-control" id="myBox"  value={text} onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button type="button" class={`btn btn-outline-${props.mode==='dark'?'light':'dark'} mx-3`} onClick={toUpr}>Convert to Uppercase</button>
            <button type="button" class={`btn btn-outline-${props.mode==='dark'?'light':'dark'}`} onClick={toInverse}>Convert to InVeRsEcAsE</button>
            <button type="button" class={`btn btn-outline-${props.mode==='dark'?'light':'dark'} mx-3`} onClick={clrBox}>Clear</button>
            <button type="button" class={`btn btn-outline-${props.mode==='dark'?'light':'dark'}`} onClick={cpy}>Copy</button>
            <div className="container my-3">
                <h1>Summary:</h1>
                <p>{text.length===0?"0 words 0 characters":text.split(" ").length+" words, "+text.length+" characters"}</p>
                <p>{text.length===0?0:0.008*text.split(" ").length} minutes required to read</p>
        
            </div>
            </div>
        </>
    )
}
