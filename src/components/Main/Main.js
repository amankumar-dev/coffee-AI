import React, { useContext, useEffect, useRef } from "react";
import './mainCss.css';
import { assets } from "../../assets/assets";
import Theme from "../Theme/Theme";
import { useSelector } from "react-redux";
import { Context } from "../../redux/FunctionalityContext/functionalityContext";

export default function Main() {
    const props = useSelector((state) => state.theme.colors);
    const { onSent, recent, showResult, loading, resultData, setInput, input, setCardFlag, cardFlag } = useContext(Context);
    let c1=useRef();
    let c2=useRef();
    let c3=useRef();
    let c4=useRef();
    function handleInput(e) {
        setInput(e.target.value);
    }
    const handleClick = (val) => {
        setInput(val);
        setCardFlag(true);
    };
    useEffect(()=>{
        // console.log(input)
        // onSent(input)
        setCardFlag(false);
    },[cardFlag]);
    return (
        <div style={{ backgroundColor: props.bgColor }} className="main-container">
            <div className="navbar">
                <h1 style={{ color: props.textColor}} className="nav-text">Coffee & AI</h1>
                <div className="icon-and-switchHolder">
                    <Theme />
                    <div className="nav-image-holder">
                        <img className="img-nav" src={assets.pic} />
                    </div>
                </div>

            </div>

            {showResult ?
                <div className="result-container">
                    <div className="que-img-container" >
                        <div className="ans-image-holder">
                            <img className="img-ans" src={assets.pic} />
                        </div>
                        <h4 className="question" style={{ color: props.textColor }} >{recent}</h4>
                    </div>
                    <div className="img-ans-holder">
                        <i class="fa-regular fa-comments" style={{ color: props.textColor, paddingTop: '5px' }}></i>
                        <div className="answer">{loading ? <div className="animation">
                            <div class="wrapper">
                                <div class="circle" style={{backgroundColor:props.textColor}}></div>
                                <div class="circle" style={{backgroundColor:props.textColor}}></div>
                                <div class="circle" style={{backgroundColor:props.textColor}}></div>
                                <div class="shadow" style={{backgroundColor:props.textColor}}></div>
                                <div class="shadow" style={{backgroundColor:props.textColor}}></div>
                                <div class="shadow" style={{backgroundColor:props.textColor}}></div>
                            </div>
                        </div> : <p className="answer-text" style={{ color: props.textColor }} dangerouslySetInnerHTML={{ __html: resultData }}  ></p>}</div>
                    </div>
                </div> :
                <div className="main-middle-holder">
                    <div className="greet-holder">
                        <p className="first-greet">Hey There,</p>
                        <p className="first-greet">Search your query</p>
                    </div>

                    <div className="card-holder">
                        <div className="card" style={{ backgroundColor: props.thirdBg}} onClick={()=>{const val=c1.current.innerText; handleClick(val)}} >
                            <p ref={c1} style={{ color: props.textColor }} className="card-text">Suggests beautiful places for hiking..</p>
                            <i style={{ color: props.textColor }} class="fa-regular fa-compass"></i>
                        </div>

                        <div className="card" style={{ backgroundColor: props.thirdBg }} onClick={()=>{const val=c2.current.innerText; handleClick(val)}} >
                            <p ref={c2} style={{ color: props.textColor }} className="card-text">Briefly summarize the...</p>
                            <i style={{ color: props.textColor }} class="fa-regular fa-lightbulb"></i>
                        </div>

                        <div className="card" style={{ backgroundColor: props.thirdBg }} onClick={()=>{const val=c3.current.innerText; handleClick(val)}} >
                            <p ref={c3} style={{ color: props.textColor }} className="card-text">Teach me how to play chess as a good...</p>
                            <i style={{ color: props.textColor }} class="fa-regular fa-chess-king"></i>
                        </div>

                        <div className="card htaao" style={{ backgroundColor: props.thirdBg }} onClick={()=>{const val=c4.current.innerText; handleClick(val)}} >
                            <p ref={c4} style={{ color: props.textColor }} className="card-text">Write code of sum of two number...</p>
                            <i style={{ color: props.textColor }} class="fa-solid fa-code"></i>
                        </div>
                    </div>
                </div>
            }

            <div className="input-holder" style={{ backgroundColor: props.thirdBg }} >
                <input className="input-bar" style={{ color: props.textColor }} placeholder="Write Prompt here..." onChange={(e) => { handleInput(e) }} onKeyDown={(e) => { if (e.key.toLowerCase() === 'enter') { onSent(); setInput('') } }} value={input} />
                <div className="input-icon-holder">
                    {/* <i class="fa-regular fa-image" style={{ color: props.textColor }} ></i>
                    <i class="fa-solid fa-microphone" style={{ color: props.textColor }} ></i> */}
                    <i class="fa-solid fa-circle-arrow-up" style={{ color: props.textColor, fontSize:'25px' }} onClick={() => { onSent() }} ></i>
                </div>
            </div>
        </div>
    )
}