import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {

    const { prevPrompts, setPrevPrompts, onSent, setRecentPrompt, recentPrompt, showResult, loading, resultData, input, setInput, newChat } = useContext(Context)

    // Utility to get the current greeting
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
    };

    // Handle clicks on cards
    const handleCardClick = (action) => {
        console.log(`Action triggered: ${action}`);
    };

    return (
        <div className="main">
            {/* Navigation */}
            <div className="nav">
                <p onClick= {()=> newChat()}>Promptly</p>
                <img
                    src={assets.user_icon || '/default-user-icon.png'}
                    alt="User Profile Icon"
                />
            </div>

            {/* Main Content */}
            <div className="main-container">
                {!showResult
                    ? <>
                        {/* Greeting Section */}
                        <div className="greet">
                            <p><span>{getGreeting()}, Bud.</span></p>
                            <p>How can I help you today?</p>
                        </div>

                        {/* Cards Section */}
                        <div className="cards">
                            {[
                                {
                                    text: "Suggest beautiful places to see on an upcoming road trip",
                                    icon: assets.compass_icon,
                                    action: "road_trip",
                                },
                                {
                                    text: "Briefly summarize this concept: urban planning",
                                    icon: assets.bulb_icon,
                                    action: "urban_planning",
                                },
                                {
                                    text: "Brainstorm team bonding activities for our work retreat",
                                    icon: assets.message_icon,
                                    action: "team_bonding",
                                },
                                {
                                    text: "Improve the readability of the following code",
                                    icon: assets.code_icon,
                                    action: "improve_code",
                                },
                            ].map(({ text, icon, action }, index) => (
                                <div
                                    key={index}
                                    className="card"
                                    onClick={() => handleCardClick(action)}
                                >
                                    <p>{text}</p>
                                    <img src={icon || '/default-icon.png'} alt={action} />
                                </div>
                            ))}
                        </div>
                        </>
                        : <div className='result'>
                            <div className="result-title">
                                <img src={assets.user_icon} alt="" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="result-data">
                                <img src={assets.gemini_icon} alt="" />
                                {loading
                                ?
                                <div className='loader'>
                                    <hr/>
                                    <hr/>
                                    <hr/>
                                </div>
                                :
                                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                                }                            
                            </div>
                        </div>
                        }


                {/* Bottom Section */}
                <div className="main-bottom">
                    {/* Search Box */}
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder="Enter a prompt here"
                            aria-label="Prompt Input"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    onSent();
                                }
                            }}
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="Open Gallery" />
                            <img src={assets.mic_icon} alt="Start Voice Input" />
                            <img onClick={() => onSent()} src={assets.send_icon} alt="Send Prompt" />
                        </div>
                    </div>

                    {/* Bottom Info */}
                    <p className="bottom-info">
                        Promptly may display inaccurate info, including about people, so
                        please use your brain. Your privacy and Promptly Apps.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
