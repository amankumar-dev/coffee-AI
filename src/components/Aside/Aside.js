import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import './asideCss.css';
import { Context } from '../../redux/FunctionalityContext/functionalityContext';


export default function Aside() {
    const { prevPrompt,onSent,setShowResult } = useContext(Context);
    const [extend, setExtend] = useState(false);
    const props = useSelector((state) => state.theme.colors);
    function handleExtend() {
        setExtend(prev => !prev);
    }
    return (
        <div className='holder' style={{ backgroundColor: props.thirdBg }}>
            <div className={`menu-icon-holder ${extend ? null : 'extra-css'}`} onClick={() => { handleExtend() }}>
                <i class="fa-solid fa-bars" style={{ color: props.textColor }} ></i>
            </div>

            <div className={`new-chat-holder ${extend ? null : 'extra-css'}`} style={{ backgroundColor: props.secondBg }} onClick={()=>{setShowResult(false)}} >
                <i class="fa-solid fa-plus new-chat-icon" style={{ color: props.textColor }}></i>
                {extend ? <p className='new-chat-text' style={{ color: props.textColor }}>New Chat</p> : null}
            </div>

            <div className='recent-holder'  >
                <p className='recent-text' style={{ color: props.textColor }}>Recent</p>
                <div className={`recent-item-holder ${extend ? null : 'extra-css'}`} style={{ backgroundColor: props.secondBg }}>
                    {
                        prevPrompt.map((e,i) => {
                            return (
                                <div className='temp-item-holder' style={{ backgroundColor: props.thirdBg }} key={i} onClick={()=>{onSent(e)}} >

                                <i class="fa-regular fa-message msg-icon" style={{ color: props.textColor }}></i>
                                {extend ? <p className='recent-item-text' style={{ color: props.textColor }}>{e.slice(0,8)}...</p> : null}
                            </div>
                            )
                        })
                    }

                </div>
            </div>

            <div className='bottom-holder'>
                <div className={`help-holder ${extend ? null : 'extra-css'}`}>
                    <i class="fa-regular fa-circle-question" style={{ color: props.textColor }}></i>
                    {extend ? <p className='help-text' style={{ color: props.textColor }}>Help</p> : null}

                </div>

                <div className={`help-holder ${extend ? null : 'extra-css'}`}>
                    <i class="fa-regular fa-clock" style={{ color: props.textColor }}></i>
                    {extend ? <p className='help-text' style={{ color: props.textColor }}>Activity</p> : null}

                </div>

                <div className={`help-holder ${extend ? null : 'extra-css'}`}>
                    <i class="fa-solid fa-gear" style={{ color: props.textColor }}></i>
                    {extend ? <p className='help-text' style={{ color: props.textColor }}>Setting</p> : null}

                </div>
            </div>
        </div>
    );
}