import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><a href="/">Gmail</a></li>
                <li><a href="/">Hình ảnh</a></li>
                <li className="bars">
                    <a href="/"><img src="img/bars.jpg" alt=""/></a>
                </li>
                <li>
                    <a href="/"><button>Đăng nhập</button></a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
