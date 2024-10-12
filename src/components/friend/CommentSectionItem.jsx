// 帖子评论区
import React, { useState } from 'react'
import "@/scss/friend/CommentSectionItem.scss"
import { Toast } from 'react-vant';
import CommentSectionItemReply from "@/components/friend/CommentSectionItemReply"

const CommentSectionItem = (props) => {

    const { isShowRight,commentTxt,CommentSectionItemReply,replyTxt,replyTime } = props

    // const [isShowRight, setIsShowRight] = useState(true)    //是否显示右侧 喜欢和评论数
    // const [isReply, setIsReply] = useState(false)           //是否用于 回复评论的评论

    const [isLike, setIsLike] = useState(false)

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
            <div className="CommentSectionItem">

            <div className="CommentSectionItem-body">

                <div className="section-header">

                    <div className="section-header-avatar">
                        <img src="/public/images/Friend-index/commentLisr-avatar/comment-avatar(1).png" />
                    </div>

                    <div className="section-header-info">

                        <div className="section-header-info-name">哈利波特</div>
                        <div className="section-header-info-createTime">2021-05-26 10:33:12</div>

                    </div>

                    {
                        isShowRight &&
                        <div className="section-header-r" >

                            <div className="section-header-r-like">

                                <span className="comment-icon" onClick={handleLike}>
                                    <img src={isLike ? '/public/images/Friend-index/喜欢-active.png' : '/public/images/Friend-index/喜欢.png'} />
                                </span>

                                <span className="comment-count">36</span>

                            </div>

                            <div className="section-header-r-comment">

                                <span className="comment-icon" >
                                    <img src='/public/images/Friend-index/评论.png' />
                                </span>

                                <span className="comment-count">14</span>
                            </div>

                        </div>
                    }
                </div>

                <div className="section-content">
                    
                    <div className="section-content-text">
                        {commentTxt}
                        {
                            CommentSectionItemReply &&
                            <CommentSectionItemReply replyTxt={replyTxt} replyTime={replyTime}/>
                        }
                    </div>

                </div>


            </div> 





        </div>
        
    )
}

export default CommentSectionItem