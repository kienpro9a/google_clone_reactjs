import React, { useState } from 'react';

const Main = ({ setSearch }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim().length !== 0) {
            setSearch(input);
        }
    };
    return (
        <div className="main">
            <div className="google"><img src="img/google.jpg" alt="" /></div>
            <div className="searchSection">
                <form onSubmit={handleSubmit}>
                    <div className="searchBox ">
                        <div className="insideSearchBox">
                            <div className="searchImg">
                                <img src="img/search.jpg" alt="" />
                            </div>
                            <div className="searchBar">
                                <div className="space"></div>
                                <input type="text" autoFocus value={input} onChange={(event) => setInput(event.target.value)} />
                            </div>
                            <div className="tool">
                                <div className="keyboard">
                                    <img src="./img/keyboard.jpg" alt="" />
                                </div>
                                <div className="mic">
                                    <img src="./img/mic.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="buttons">
                <button onClick={handleSubmit}>Tìm với google</button>
                <button>Xem trang đầu tiên tìm được</button>
            </div>
            <ul className="languages">
                <li> Google có các thứ tiếng:</li>
                <li><a href="/">English</a></li>
                <li><a href="/">Français</a></li>
                <li><a href="/">繁體中文</a></li>
            </ul>
        </div>
    );
};

export default Main;
