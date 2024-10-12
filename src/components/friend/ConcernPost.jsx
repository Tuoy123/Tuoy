// 关注也帖子框架
import React, { useState, useEffect } from 'react'
import "@/scss/friend/ConcernPost.scss"
import CflAvatar from "@/components/friend/CflAvatar"

const concernPost = (props) => {

    const {item} = props

    const {name,type,master,time,imgArr,txt,supportCount,likeCount,commentCount,visitors} = item


    return (
        <div className="ConcernPost">

            <div className="c-header">

                <div className="c-avatar">
                    <img src="/public/images/Friend-index/concern/ConcernList/椭圆形-1.png" alt="" />
                </div>

                <div className="c-userInfo">

                    <div className="userInfo-l">

                        <div className="c-name">{name}</div>
                        <div className="c-type">{type}-{master}</div>

                    </div>

                    <div className="userInfo-r">
                        {time}分钟前
                    </div>

                </div>
            </div>

            <div className="c-content">

                <div className="c-picList">


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
                            <CflAvatar visitors={visitors}/>
                        </div>

                        <div className="c-f-l-txt">等人评论过</div>

                    </div>

                    <div className="c-footer-r">

                        <div className="c-support">

                            <span className="c-icon"><img src="/public/images/Friend-index/点赞.png" /></span>
                            <span className="c-footer-txt">{supportCount}</span>

                        </div>

                        <div className="c-like">

                            <span className="c-icon"><img src="/public/images/Friend-index/喜欢.png" /></span>
                            <span className="c-footer-txt">{likeCount}</span>

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