// 帖子详情帖子模块
import React from 'react'
import "@/scss/friend/FriendDetailPost.scss"
import ImgBox from "@/components/ImgBox"
import TimeStampConverter from "@/components/TimeStampConverter"
import { Toast } from 'react-vant';

const FriendDetailPost = (props) => {

    const { data } = props
    const { pId, name, type, master, createTime, imgArr, txt, supportCount, likeCount, commentCount, visitors } = data

    const handleToConcern = () => {
        Toast.fail('此处关注功能暂未开放');
        return
    }
    
    return (
        <div className="FriendDetailPost">

            <div className="f-d-header">

                <div className="f-d-header-avatar">
                    <img src="/public/images/Friend-index/concern/ConcernList/椭圆形-1.png" alt="" />
                </div>

                <div className="f-d-header-userInfo">

                    <div className="f-d-userInfo-l" >

                        <div className="f-d-name">{name}</div>
                        <div className="f-d-type">{type}-{master}</div>

                    </div>

                    <div className="f-d-header-userInfo-r" onClick={handleToConcern}>
                        <div className="f-d-concernBtn">
                            <span>+</span>
                            <span>关注</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="f-d-content">

                <div className="f-d-content-txt">
                    {txt}
                </div>

                <div className="f-d-content-pic">
                    <ImgBox imgArr={imgArr} />
                </div>

                <div className="f-d-content-createTime">
                    <TimeStampConverter createTime={createTime} />
                </div>

            </div>

            

        </div>
    )
}

export default FriendDetailPost