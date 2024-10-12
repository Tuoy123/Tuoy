// 萌宠圈关注页
import React from 'react'
import ConcernList from "@/components/friend/ConcernList"
import "@/scss/friend/FriendConcern.scss"
import ConcernPost from "@/components/friend/ConcernPost"
const FriendConcern = () => {

  // 调用接口获取已关注博主的帖子列表---没有

  //模拟接收到的数据
  const friendApi = [
    {
      uid: 11,
      pid:1001,
      name: '王小样',
      type: '不拉多尔',
      master: '泡芙',
      identity: '知名宠物博主',
      avatar: '/public/images/Friend-index/recommend/recommendList/r-u-avatar (2).png',
      createTime: Date.now() - 1000 * 60, // 1 分钟前的时间戳
      imgArr: [
        { src: '/public/images/Friend-index/post-img/post-pet (2).png' },
        { src: '/public/images/Friend-index/post-img/post-pet (5).png' },
        { src: '/public/images/Friend-index/post-img/post-pet (6).png' },
      ],
      txt: '狗狗是人类的最好的朋友，它们忠诚可靠，守护着他们的主人不离不弃。甚至，比生命更为重要。',
      supportCount: 289,
      likeCount: 36,
      commentCount: 14,
      visitors: [
        { id: 1, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-1.png' },
        { id: 2, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-2.png' },
        { id: 3, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-3.png' },
      ],
      isConcern: false,
    },
    {
      uid: 22,
      pid:1002,
      name: '喵喵大人',
      type: '不拉多尔',
      master: '泡芙',
      identity: '知名宠物博主',
      avatar: '/public/images/Friend-index/recommend/recommendList/r-u-avatar (3).png',

      createTime: Date.now() - 1000 * 60, // 1 分钟前的时间戳
      imgArr: [
        { src: '/public/images/Friend-index/post-img/post-pet (3).png' },
        { src: '/public/images/Friend-index/post-img/post-pet (4).png' },
        { src: '/public/images/Friend-index/post-img/post-pet (7).png' },
      ],
      txt: '狗狗是人类的最好的朋友，它们忠诚可靠，守护着他们的主人不离不弃。甚至，比生命更为重要。',
      supportCount: 123,
      commentCount: 23,
      commentCount: 53,
      visitors: [
        { id: 1, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-1.png' },
        { id: 2, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-2.png' },
        { id: 3, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-3.png' },

      ],
      isConcern: false,
    },
    {
      uid: 33,
      pid:1003,
      name: '我很懒',
      type: '不拉多尔',
      master: '泡芙',
      identity: '知名宠物博主',
      avatar: '/public/images/Friend-index/recommend/recommendList/r-u-avatar.png',

      createTime: Date.now() - 1000 * 60, // 1 分钟前的时间戳
      imgArr: [
        { src: '/public/images/Friend-index/post-img/post-pet (3).png' },
        { src: '/public/images/Friend-index/post-img/post-pet (4).png' },
        { src: '/public/images/Friend-index/post-img/post-pet (7).png' },
      ],
      txt: '狗狗是人类的最好的朋友，它们忠诚可靠，守护着他们的主人不离不弃。甚至，比生命更为重要。',
      supportCount: 762,
      commentCount: 124,
      commentCount: 12,
      visitors: [
        { id: 1, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-1.png' },
        { id: 2, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-2.png' },
        { id: 3, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-3.png' },

      ],
      isConcern: false,
    },

  ]

  return (
    <div className="FriendConcern">

      <ul className="ConcernList">

        <ConcernList data={friendApi}/>

      </ul>

      <div className="Concern-content">

        {
          friendApi.map((item, index) => {

            return <ConcernPost key={index} data={item} />
          })
        }


      </div>



    </div>
  )
}

export default FriendConcern