// 帖子详情页
import React from 'react'
import CommentSectionItem from "@/components/friend/CommentSectionItem"
import { useLocation } from 'react-router'


const FriendDetail = () => {

    const location = useLocation();

    const data = location.state?.data;

    const { pId, name, type, master, createTime, imgArr, txt, supportCount, likeCount, commentCount, visitors } = data


    return (
        <div className="FriendDetail">


            <CommentSectionItem commentCount={commentCount} isShowRight={true} isReply={false} commentTxt='121212121' />
            <CommentSectionItem commentCount={commentCount} isShowRight={true} isReply={false} commentTxt='12222222222' />



        </div>
    )
}

export default FriendDetail