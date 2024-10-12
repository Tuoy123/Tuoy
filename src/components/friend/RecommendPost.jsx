// 关注也帖子框架
import React, { useState, useEffect } from 'react'
import "@/scss/friend/RecommendPost.scss"
import CflAvatar from "@/components/friend/CflAvatar"
import ImgBox from "@/components/ImgBox"
import { Toast } from 'react-vant';
import { useNavigate } from 'react-router-dom';

const RecommendPost = (props) => {

    const navigate = useNavigate()

    const { data } = props

    const { pId, name, type, master, imgArr, txt, supportCount, likeCount, commentCount, visitors, isConcern } = data

    const [isSupport, setIsSupport] = useState(false)
    const [isLike, setIsLike] = useState(false)

    const toDetail = (id,data) => {
        navigate(`/frienddetail/${id}`, { state: { data } })
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
        <div className="RecommendPost">

            <div className="r-header">

                <div className="r-header-avatar">
                    <img src="/public/images/Friend-index/concern/ConcernList/椭圆形-1.png" alt="" />
                </div>

                <div className="r-header-userInfo">

                    <div className="r-userInfo-l" onClick={() => toDetail(pId,data)}>

                        <div className="r-name">{name}</div>
                        <div className="r-type">{type}-{master}</div>

                    </div>

                    <div className="r-header-userInfo-r" >
                        <div className="r-concernBtn">
                            <span>+</span>
                            <span>关注</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="r-post--content">

                <div className="r-picList">

                    <ImgBox imgArr={imgArr} />

                </div>

                <div className="r-text">
                    {txt}
                </div>

                <div className="r-footer">

                    <div className="r-footer-l">

                        <div className="r-footer-l-avatar">
                            <CflAvatar visitors={visitors} />
                        </div>

                        <div className="r-footer-l-txt">等人评论过</div>

                    </div>

                    <div className="r-footer-r">

                        <div className="r-support">

                            <span className="r-icon" onClick={handleSupport} ><img src={isSupport ? '/public/images/Friend-index/点赞-active.png' : '/public/images/Friend-index/点赞.png'} /></span>
                            <span className="r-footer-txt" id='supportCount'>{supportCount}</span>

                        </div>

                        <div className="r-like">

                            <span className="r-icon" onClick={handleLike}><img src={isLike ? '/public/images/Friend-index/喜欢-active.png' : '/public/images/Friend-index/喜欢.png'} /></span>
                            <span className="r-footer-txt" id='likeCount'>{likeCount}</span>

                        </div>

                        <div className="r-comments">

                            <span className="r-icon"><img src="/public/images/Friend-index/评论.png" /></span>
                            <span className="r-footer-txt">{commentCount}</span>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default RecommendPost