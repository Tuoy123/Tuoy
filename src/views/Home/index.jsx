import React, { useState, useEffect } from 'react'
import Tab from '@/components/Tab'
import "@/scss/home/HomeIndex.scss"
import { ArrowDown, Arrow } from '@react-vant/icons';
import HomeSwiper from '@/components/home/HomeSwiper';
import Menu from '@/components/home/Menu';
import RecommendPost from '@/components/friend/RecommendPost';

//模拟接收到的数据
const recommendApi = [
  {
    uid: 11,
    name: '王小样',
    type: '不拉多尔',
    master: '泡芙',
    identity: '知名宠物博主',
    pId: 1001,//t帖子id
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
    name: '喵喵大人',
    type: '不拉多尔',
    master: '泡芙',
    identity: '知名宠物博主',
    pId: 1001,//t帖子id
    avatar: '/public/images/Friend-index/recommend/recommendList/r-u-avatar (3).png',

    createTime: Date.now() - 1000 * 60, // 1 分钟前的时间戳
    imgArr: [
      { src: '/public/images/Friend-index/post-img/post-pet (3).png' },
      { src: '/public/images/Friend-index/post-img/post-pet (4).png' },
      { src: '/public/images/Friend-index/post-img/post-pet (7).png' },
    ],
    txt: '狗狗是人类的最好的朋友，它们忠诚可靠，守护着他们的主人不离不弃。甚至，比生命更为重要。',
    supportCount: 289,
    commentCount: 36,
    commentCount: 14,
    visitors: [
      { id: 1, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-1.png' },
      { id: 2, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-2.png' },
      { id: 3, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-3.png' },

    ],
    isConcern: false,
  },
  {
    uid: 33,
    name: '我很懒',
    type: '不拉多尔',
    master: '泡芙',
    identity: '知名宠物博主',
    pId: 1001,//t帖子id
    avatar: '/public/images/Friend-index/recommend/recommendList/r-u-avatar.png',

    createTime: Date.now() - 1000 * 60, // 1 分钟前的时间戳
    imgArr: [
      { src: '/public/images/Friend-index/post-img/post-pet (3).png' },
      { src: '/public/images/Friend-index/post-img/post-pet (4).png' },
      { src: '/public/images/Friend-index/post-img/post-pet (7).png' },
    ],
    txt: '狗狗是人类的最好的朋友，它们忠诚可靠，守护着他们的主人不离不弃。甚至，比生命更为重要。',
    supportCount: 289,
    commentCount: 36,
    commentCount: 14,
    visitors: [
      { id: 1, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-1.png' },
      { id: 2, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-2.png' },
      { id: 3, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-3.png' },

    ],
    isConcern: false,
  },

]

const workerList = [
  {
    wid: 1,
    wname: '朱小亮',
    job: '专家医师/经理',
    wTime: 15,
    avatar: '/public/images/Home-index/worker-List/worker-1.png',
  },
  {
    wid: 2,
    wname: '高小峰',
    job: '主治医师/院长',
    wTime: 9,
    avatar: '/public/images/Home-index/worker-List/worker-2.png',
  },
  {
    wid: 3,
    wname: '朱小小',
    job: '高级医师',
    wTime: 9,
    avatar: '/public/images/Home-index/worker-List/worker-3.png',
  },
  {
    wid: 4,
    wname: '王小样',
    job: '高级医师',
    wTime: 9,
    avatar: '/public/images/Home-index/worker-List/worker-4.png',
  },

]


const index = () => {

  return (
    <div className="Home">

      <div className="Home-top">

        <div className="Home-top-selectRegion">
          海淀区
        </div>

        <div className="Home-top-region-icon"><ArrowDown /></div>


      </div>

      <div className="banner">
        <div className="h-b-l"></div>
        <div className="h-b-r"></div>
        <HomeSwiper />

      </div>

      <div className="menuList">
        <Menu />
      </div>

      <div className="home-recomment">

        <div className="h-r-top">

          <div className="home-recomment-title">
            每日推荐
          </div>

          <div className="h-r-top-more">

            <span>查看全部</span>
            <span><Arrow /></span>

          </div>

        </div>

        <div className="h-r-content">
          <RecommendPost data={recommendApi[0]} />
        </div>

      </div>

      <div className="home-hot-worker">

        <div className="h-r-top">

          <div className="home-recomment-title">
            热门宠物护理师
          </div>

          <div className="h-r-top-more">

            <span>查看全部</span>
            <span><Arrow /></span>

          </div>

        </div>

        <div className="h-r-content">

          <div className="h-hot-worker-list">

            {
              workerList.map((item, index) => {
                return (
                  <div className="hot-worker-item" key={index}>

                    <div className="hot-worker-item-avatar">

                      <img src={item.avatar} />

                    </div>
                    <div className="hot-worker-item-info">
                      <div className="hot-worker-item-info-name">{item.wname}</div>
                      <div className="hot-worker-item-info-job">{item.job}</div>
                      <div className="hot-worker-item-info-time">从业{item.wTime}年</div>
                    </div>

                  </div>
                )
              })
            }


          </div>
        </div>

      </div>


















      {/* 底部 Tabbar 栏 */}
      <Tab />
    </div>
  )
}

export default index