import React, { useState, useEffect } from 'react';
import "@/scss/friend/FriendIndex.scss";
import Tab from "@/components/Tab";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const index = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedClassifyIndex, setSelectedClassifyIndex] = useState(null);

    const items = ['关注', '推荐'];
    const itemRoutes = ['/friend/concern', '/friend/recommend'];

    const handleClassifyClick = (index) => {
        setSelectedClassifyIndex(index);
        navigate(itemRoutes[index], { replace: true });
    };

    useEffect(() => {
        const currentPath = location.pathname;
        const index = itemRoutes.findIndex(route => route === currentPath);
        if (index!== -1) {
            setSelectedClassifyIndex(index);
        } else {
            // 如果没有匹配到当前路径，默认选中关注
            setSelectedClassifyIndex(0);
            navigate(itemRoutes[0], { replace: true });
        }
    }, [location]);

    return (
        <div className='friend'>
            <div className="top container">
                <div className="search">
                    <div className="icon">
                        <img src="/public/images/Friend-index/搜索.png" alt="搜索" />
                    </div>
                    <input type="text" placeholder='搜索你想要的' />
                </div>
                <div className="camera">
                    <img src="/public/images/Friend-index/上传.png" alt="拍照上传" />
                </div>
            </div>
            <div className="classify-list">
                {items.map((item, index) => (
                    <div
                        className={`item ${index === selectedClassifyIndex? 'selected' : ''}`}
                        key={index}
                        onClick={() => handleClassifyClick(index)}
                    >
                        <div className="txt">{item}</div>
                        {index === selectedClassifyIndex && <div className="yLine"></div>}
                    </div>
                ))}
            </div>
            <Outlet />
            {/* 底部 Tabbar 栏 */}
            <Tab />
        </div>
    );
};

export default index;