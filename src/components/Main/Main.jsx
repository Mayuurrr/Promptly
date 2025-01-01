import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets';

const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Promptly</p>
                <img src={assets.user_icon} alt="User Icon" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Bud.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="Compass Icon" />
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="Bulb Icon" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="Message Icon" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="Code Icon" />
                    </div>
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here' />
                    <img src={assets.gallery_icon} alt="Gallery Icon" />
                    <img src={assets.mic_icon} alt="Mic Icon" />
                    <img src={assets.send_icon} alt="Send Icon" />
                </div>
            </div>
            <p className='bottom-info'>
                Promptly may display inaccurate info, including about people, so please use your brain. Your privacy and Promptly Apps.
            </p>
        </div>
    );
};

export default Main;