// 萌宠圈推荐页
import React from 'react'
import "@/scss/friend/FriendRecommend.scss"
import RecommendedList from '@/components/friend/RecommendedList'

const FriendRecommend = () => {
  
  return (
    <div className="FriendRecommend">

    <div className="RecommendList">
      <RecommendedList />
    </div>

    </div>
  )
}

export default FriendRecommend