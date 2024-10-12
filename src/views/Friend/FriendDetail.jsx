// 帖子详情页
import React from 'react'
import { useLocation } from 'react-router'
import "@/scss/friend/FriendDetail.scss"
import { ArrowLeft } from '@react-vant/icons';
import { useNavigate } from 'react-router';
import { Toast } from 'react-vant';
import FriendDetailPost from "@/components/friend/FriendDetailPost"
import CommentSectionItem from "@/components/friend/CommentSectionItem"
import CommentSectionItemReply from "@/components/friend/CommentSectionItemReply"
const FriendDetail = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const data = location.state?.data;

    const { pId, name, type, master, createTime, imgArr, txt, supportCount, likeCount, commentCount, visitors } = data

    const [isSupport, setIsSupport] = React.useState(false)

    const [isLike, setIsLike] = React.useState(false)

    const handleReturn = () => {
        navigate(-1);
    }

    const handleShare = () => {
        Toast.success('分享成功');
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
        <div className="FriendDetail">

            <div className="FriendDetail-top">

                <div className="FriendDetail-top-left" onClick={handleReturn}>
                    <span><ArrowLeft /></span>
                </div>

                <div className="FriendDetail-top-center">
                    详情
                </div>

                <div className="FriendDetail-top-right" onClick={handleShare}>
                    <span>
                        <img src="/public/images/Friend-index/分享.png" />
                    </span>
                </div>


            </div>

            <div className="FriendDetail-content">

                <FriendDetailPost data={data} />


                <div className="f-d-commentBox">

                    <div className="f-d-comments-title">
                        共{commentCount}条评论
                    </div>

                    {/* 评论区 */}
                    <CommentSectionItem isShowRight='true' commentTxt='你家狗狗的泪痕怎么取的呀，我加的为什么一直有这的不知道是为什么？' />

                    <CommentSectionItem isShowRight='true' CommentSectionItemReply={CommentSectionItemReply} replyTxt='我用的是那个牌子的眼药水' replyTime='11:22'/>

                </div>

            </div>

            <div className="f-d-comments-footer">

                <input type='txt' className="f-d-inputComment" placeholder='一起来讨论讨论' />

                <div className="f-d-footer-r">

                    <div className="f-d-support">

                        {/* <span className="f-d-icon" onClick={handleSupport} ><img src={isSupport ? '/public/images/Friend-index/点赞-active.png' : '/public/images/Friend-index/点赞.png'} /></span> */}
                        <span className="f-d-footer-txt" id='supportCount'>{supportCount}</span>

                    </div>

                    <div className="f-d-like">

                        <span className="f-d-icon" onClick={handleLike}><img src={isLike ? '/public/images/Friend-index/喜欢-active.png' : '/public/images/Friend-index/喜欢.png'} /></span>
                        <span className="f-d-footer-txt" id='likeCount'>{likeCount}</span>

                    </div>

                    <div className="f-d-comments">

                        <span className="f-d-icon"><img src="/public/images/Friend-index/评论.png" /></span>
                        <span className="f-d-footer-txt">{commentCount}</span>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default FriendDetail