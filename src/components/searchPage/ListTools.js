import React from 'react';
import { Link } from 'react-router-dom';

const ListTools = () => {
    return (
        <div className="listTools">
            <div className="yg51vc">
                <div className="hdtb-msb">
                    <div>
                        <div className="MUFPAc">
                            <div className="hdtb-mitem">
                                <Link to={'/'} className="Link"><img src="img/search.jpg" alt='' />Tất cả</Link>
                            </div>
                            <div className="hdtb-mitem">
                                <Link to={'/'} className="Link"><img src="img/news.jpg" alt='' />Tin tức</Link>
                            </div>
                            <div className="hdtb-mitem">
                                <Link to={'/'} className="Link"><img src="img/books.jpg" alt='' />Sách</Link>
                            </div>
                            <div className="hdtb-mitem">
                                <Link to={'/'} className="Link"><img src="img/images.jpg" alt='' />Hình ảnh</Link>
                            </div>
                            <div className="hdtb-mitem">
                                <Link to={'/'} className="Link"><img src="img/videos.jpg" alt='' />Video</Link>
                            </div>
                            <div className="hdtb-mitem">
                                <Link to={'/'} className="Link"><img src="img/more.jpg" alt='' />Thêm</Link>
                            </div>
                            <div className="hdtb-mitem">
                                <Link to={'/'} className="Link">Công cụ</Link>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default ListTools;
