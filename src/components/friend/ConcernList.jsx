import React, { useState, useEffect } from 'react';
import "@/scss/friend/ConcernList.scss"
import { useNavigate } from 'react-router-dom'

const ConcernList = (props) => {

    const navigate = useNavigate()

    const { data } = props

    // const { pid, name, type, master, createTime, imgArr, txt, supportCount, likeCount, commentCount, visitors } = data

    const [List, setList] = useState([])

    useEffect(() => {

        setList(...List,data)

    }, [data])

    const toDetail = (id, data) => {

        Toast.loading({
            message: '正在跳转',
            forbidClick: true,
            duration: 1000,
            onClose: () => {
                navigate(`/frienddetail/${id}`, { state: { data } })
            },
        });

    }

    return (
        <>
            {
                List.map((item, index) => (
                    <li key={index} onClick={() => toDetail(item.pId, item)}>
                        <img src={item.avatar} />
                    </li>
                ))
            }
        </>
    );
};

export default ConcernList;