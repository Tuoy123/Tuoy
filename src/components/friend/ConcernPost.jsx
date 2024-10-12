// 关注也帖子框架
import React, { useState, useEffect } from 'react'
import "@/scss/friend/ConcernPost.scss"
import CflAvatar from "@/components/friend/CflAvatar"
import { useNavigate } from 'react-router-dom'
import { Toast } from 'react-vant';

const concernPost = (props) => {

    const navigate = useNavigate()

    const { data } = props

    const { pid, name, avatar, type, master, createTime, imgArr, txt, supportCount, likeCount, commentCount, visitors } = data


    const formatTimeDifference = (createTime) => {

        const currentTime = Date.now(); // 获取当前时间（以毫秒为单位）
        const timeDifference = currentTime - createTime; // 计算当前时间与创建时间的时间差（以毫秒为单位）

        const min = Math.floor(timeDifference / 1000 / 60); // 将时间差转换为分钟数
        const hour = Math.floor(timeDifference / 1000 / 60 / 60); // 将时间差转换为小时数
        const day = Math.floor(timeDifference / 1000 / 60 / 60 / 24); // 将时间差转换为天数
        const week = Math.floor(timeDifference / 1000 / 60 / 60 / 24 / 7); // 将时间差转换为周数
        const month = Math.floor(timeDifference / 1000 / 60 / 60 / 24 / 30); // 将时间差转换为月数
        const year = Math.floor(timeDifference / 1000 / 60 / 60 / 24 / 365); // 将时间差转换为年

        return year > 0 ? `${year}年前` : month > 0 ? `${month}月前` : week > 0 ? `${week}周前` : day > 0 ? `${day}天前` : hour > 0 ? `${hour}小时前` : min > 0 ? `${min}分钟前` : '刚刚';
    };

    const [isSupport, setIsSupport] = useState(false)
    const [isLike, setIsLike] = useState(false)

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

    const handleSupport = () => {

        //调用接口--点赞数 +1   没有接口

        if (isSupport == false) {
            setIsSupport(!isSupport)
            Toast.success({
                message: '点赞',
                duration: 1000
            })

        } else {
            setIsSupport(!isSupport)
            Toast.success({
                message: '取消点赞',
                duration: 1000
            })

        }
    }

    const handleLike = () => {

        //调用接口--喜欢数 +1   没有接口

        if (isLike == false) {
            setIsLike(!isLike)
            Toast.success({
                message: '喜欢',
                duration: 1000
            })

        } else {
            setIsLike(!isLike)
            Toast.success({
                message: '取消喜欢',
                duration: 1000
            })

        }

    }


    return (
        <div className="ConcernPost">

            <div className="c-header">

                <div className="c-avatar" onClick={() => toDetail(pid, data)}>
                    <img src={avatar} />
                </div>

                <div className="c-userInfo" onClick={() => toDetail(pid, data)}>

                    <div className="userInfo-l" >

                        <div className="c-name">{name}</div>
                        <div className="c-type">{type}-{master}</div>

                    </div>

                    <div className="userInfo-r">
                        {formatTimeDifference(createTime)}
                    </div>

                </div>
            </div>

            <div className="c-content">

                <div className="c-picList" >


                    {
                        imgArr.map((item, index) => (
                            <div key={index} className='c-pic'>
                                <img src={item.src} />
                            </div>
                        ))
                    }

                    


                </div>

                <div className="c-text">
                    {txt}
                </div>

                <div className="c-footer">

                    <div className="c-footer-l">

                        <div className="c-f-l-avatar">
                            <CflAvatar visitors={visitors} />
                        </div>

                        <div className="c-f-l-txt">等人评论过</div>

                    </div>

                    <div className="c-footer-r">

                        <div className="c-support">

                            <span className="c-icon" onClick={handleSupport} ><img src={isSupport ? '/public/images/Friend-index/点赞-active.png' : '/public/images/Friend-index/点赞.png'} /></span>
                            <span className="c-footer-txt" id='supportCount'>{supportCount}</span>

                        </div>

                        <div className="c-like">

                            <span className="c-icon" onClick={handleLike}><img src={isLike ? '/public/images/Friend-index/喜欢-active.png' : '/public/images/Friend-index/喜欢.png'} /></span>
                            <span className="c-footer-txt" id='likeCount'>{likeCount}</span>

                        </div>

                        <div className="c-comments">

                            <span className="c-icon"><img src="/public/images/Friend-index/评论.png" /></span>
                            <span className="c-footer-txt">{commentCount}</span>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default concernPost