import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets';

const Main = () => {
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
    };

    const handleCardClick = (action) => {
        console.log(`Action triggered: ${action}`);
    };

    return (
        <div className='main'>
            <div className="nav">
                <p>Promptly</p>
                <img src={assets.user_icon || ''} alt="User Icon" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>{getGreeting()}, Bud.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card" onClick={() => handleCardClick('road_trip')}>
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="Compass Icon" />
                    </div>
                    <div className="card" onClick={() => handleCardClick('urban_planning')}>
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="Bulb Icon" />
                    </div>
                    <div className="card" onClick={() => handleCardClick('team_bonding')}>
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="Message Icon" />
                    </div>
                    <div className="card" onClick={() => handleCardClick('improve_code')}>
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="Code Icon" />
                    </div>
                </div>
                <div className="main-bottom">
                <div className="search-box">
                    <input 
                        type="text" 
                        placeholder='Enter a prompt here' 
                        aria-label="Prompt Input" 
                    />
                    <div>
                        <img src={assets.gallery_icon} alt="Gallery Icon" />
                        <img src={assets.mic_icon} alt="Mic Icon" />
                        <img src={assets.send_icon} alt="Send Icon" />
                    </div>
                </div>

                <p className='bottom-info'>
                    Promptly may display inaccurate info, including about people, so please use your brain. Your privacy and Promptly Apps.
                </p>
            </div>
            </div>
        </div>
    );
};

export default Main;
