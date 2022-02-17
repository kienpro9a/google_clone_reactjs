import React, { useState} from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';//
import HomePage from './components/homePage';
import SearchPage from './components/searchPage';
import { searchData } from './api/googleSearch';

const App = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [googleData, setGoogleData] = useState({});
  const setSearch = async (term) => {
    setSearchTerm(term);
    const data = await searchData(term);
    setGoogleData(data);
    navigate('/search');
  }
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage setSearch={setSearch} />} />
        <Route exact path="/search" element={searchTerm !== "" ? <SearchPage setSearch={setSearch} searchTerm={searchTerm} googleData={googleData} /> : <Navigate to="/" />} />
        {/* <Route exact path="/search" element={<SearchPage setSearch={setSearch} searchTerm={searchTerm} googleData={googleData} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
