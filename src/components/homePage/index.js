import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import './HomePage.css'

const HomePage = ({ setSearch }) => {
    return (
        <div className='HomePage'>
            <Header />
            <Main setSearch={setSearch} />
            <Footer />
        </div>
    )
}

export default HomePage;