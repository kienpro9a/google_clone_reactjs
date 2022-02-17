import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ searchTerm, setSearch }) => {
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        setSearchText(searchTerm);
    }, [searchTerm])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchText.trim().length !== 0) {
            setSearch(searchText);
        }
    }

    return (
        <div className="header">
            <form className="topBarLeft" onSubmit={handleSubmit}>
                <div className="searchBox">
                    <div className="logo">
                        <Link to={'/'}>
                            <img src="img/google.jpg" height="30" width="92" alt="" />
                        </Link>
                    </div>
                    <div className="searchBar">
                        <div className="searchBarInside">
                            <div className="a4bIc">
                                <input className="gLFyf" type="text" defaultValue={searchText} onChange={(event) => setSearchText(event.target.value)} />
                            </div>
                            <div className="tool">
                                <div className="keyboard">
                                    <img src="img/keyboard.jpg" alt="" />
                                </div>
                                <div className="mic">
                                    <img src="img/mic.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <button className="searchBtn" onClick={handleSubmit}>
                            <div className="searchButton">
                                <img src="img/blueSearch.jpg" alt="" />
                            </div>
                        </button>
                    </div>
                </div>
            </form>
            <div className="topBarRight">
                <div className="setting">
                    <img src="img/setting.jpg" alt="" />
                </div>
                <div className="bars">
                    <img src="img/bars.jpg" alt="" />
                </div>
                <a href="/"><button>Đăng nhập</button></a>
            </div>
        </div>
    );
};

export default Header;
