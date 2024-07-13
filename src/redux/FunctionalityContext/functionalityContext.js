import React, { useState } from 'react';
import { createContext } from 'react';
import run from '../../config/gemini.js'

export const Context=createContext();

const ContextProvider=(props)=>{

    const [input,setInput]=useState('');
    const [recent,setRecent]=useState('');
    const [prevPrompt,setPrevPrompt]=useState([]);
    const [showResult,setShowResult]=useState(false);
    const [loading,setLoading]=useState(false);
    const [cardFlag,setCardFlag]=useState(false);
    const [resultData,setResultData]=useState('');

    const delayPara=(index,nextWord)=>{
         setTimeout(() => {
            setResultData(prev=>prev+nextWord);
         }, 75*index);
    }

    const onSent=async (prompt)=>{
        setResultData('');
        setLoading(true);
        setShowResult(true);
        let data;
        if(prompt===undefined){
            setRecent(input);
            setPrevPrompt(prev=>[...prev,input]);
            data=await run(input);
        }
        else{
            setRecent(prompt);
            data=await run (prompt);
        }
        let responseArray=data.split("**");
        let newResponse="";
        for(let i=0;i<responseArray.length;i++){
            if(i===0|| i%2!==1){
                newResponse+=responseArray[i];
            }
            else{
                newResponse+='<b><u>'+responseArray[i]+'</b></u>';
            }
        }
        let newResponse2=newResponse.split("*").join('<br/>');
        let newResponseArray=newResponse2.split(" ");
        for(let i=0;i<newResponseArray.length;i++){
            const nextWord=newResponseArray[i];
            delayPara(i,nextWord+" ");
        }
        setLoading(false);
        setInput('');
    }

    

    const contextValue={
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecent,
        recent,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        setShowResult,
        cardFlag,
        setCardFlag
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;