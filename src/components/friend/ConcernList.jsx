import React, { useState, useEffect } from 'react';
import "@/scss/friend/ConcernList.scss"

const ConcernList = () => {

    const [List,setList] = useState([])

    useEffect(() => {
        // 真实调用接口
        /*
        const fetchData = async () => {
            try {
                const response = await fetch('/real-api-route');
                const data = await response.json();
                List = data;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        */

        // 模拟接口数据
        const mockData = [
            {id:  1, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-1.png' },
            {id:  2, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-2.png' },
            {id:  3, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-3.png' },
            {id:  4, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-4.png' },
            {id:  5, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-5.png' },
            {id:  6, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形.png' },
            {id:  7, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-1.png' },
            {id:  8, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-2.png' },
            {id:  9, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-3.png' },
            {id:  10, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-4.png' },
            {id:  11, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-5.png' },
        ];



        setList(
            ...List,
            mockData
        )
    }, []);

    return (
        <>
            {
            List.map((item, index) => (
                <li key={index}>
                    <img src={item.avatar} alt={`Avatar ${index}`} />
                </li>
            ))
            }
        </>
    );
};

export default ConcernList;