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
            <h1 className='mb-2'>{props.heading}</h1>  
            <div className="my-3">
                <textarea className="form-control" id="myBox"  value={text} onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <div className="row">
            <button type="button" class={`btn btn-outline-${props.mode==='dark'?'light':'dark'} mx-3 col-sm`} onClick={toUpr}>Convert to Uppercase</button>
            <button type="button" class={`btn btn-outline-${props.mode==='dark'?'light':'dark'} col-sm`} onClick={toInverse}>Convert to InVeRsEcAsE</button>
            <button type="button" class={`btn btn-outline-${props.mode==='dark'?'light':'dark'} mx-3 col-sm`} onClick={clrBox}>Clear</button>
            <button type="button" class={`btn btn-outline-${props.mode==='dark'?'light':'dark'} col-sm`} onClick={cpy}>Copy</button>
        
            </div>
            <div className="container">
                <h1>Summary:</h1>
                <p>{text.length===0?"0 words 0 characters":(text.charAt(text.length-1)==='\n')||(text.charAt(text.length-1)===' ')?text.split(/\s+/).length-1+" words, "+text.length+" characters":text.split(/\s+/).length+" words, "+text.length+" characters"}</p>
                <p>{text.length===0?0:0.008*text.split(" ").length} minutes required to read</p>
        
            </div>
            </div>
        </>
    )
}
