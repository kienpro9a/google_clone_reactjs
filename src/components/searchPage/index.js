import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import ListTools from './ListTools';
import Main from './Main';
import Footer from './Footer'
import './SearchPage.css'

const SearchPage = ({ searchTerm, googleData, setSearch }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (searchTerm === '' || googleData === '{}') {
            navigate('/');
        }else{
            localStorage.setItem('SearchTerm',JSON.stringify(searchTerm));
            localStorage.setItem('GoogleData',JSON.stringify(googleData));
        }
    }, [searchTerm, navigate, googleData]);
    

    return (
        <div className='SearchPage'>
            <Header searchTerm={searchTerm} setSearch={setSearch} />
            <ListTools />
            <Main googleData={googleData} />
            <Footer />
        </div>
    );
};

export default SearchPage;
