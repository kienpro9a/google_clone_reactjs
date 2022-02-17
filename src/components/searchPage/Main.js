import React from 'react';
// import { Link } from 'react-router-dom';

const Main = ({ googleData }) => {
    return (
        <div className="main">
            <div className='appbar'>
                <p>Khoảng {googleData?.searchInformation.formattedTotalResults} kết quả ({googleData?.searchInformation.formattedSearchTime} giây)</p>
            </div>
            <div className='GyAeWb'>
                <div className='s6JM6d'>
                    {googleData?.items.map((data, id) => (
                        <div key={id} className="tF2Cxc">
                            <div>
                                <a href={data.link} className="displayLink" >{data.formattedUrl}</a><img src='img/down.jpg' alt='' />
                            </div>
                            <div>
                                <a href={data.link} className="title" >{data.title}</a>
                            </div>
                            <div>
                                <p className="snippet">{data.snippet}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Main;