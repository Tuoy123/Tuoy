// 推荐列表
import React, { useState, useEffect } from 'react';
import "@/scss/friend/RecommendedLists.scss"

const RecommendedList = () => {

  const [List, setList] = useState([])

  useEffect(() => {

    // 真实调用接口
    /*
    const fetchData = async () => {
        try {
            const response = await fetch('/real-api-route');
            const data = await response.json();
            List = data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    */

    // 模拟接口数据
    const mockData = [
      {
        avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-1.png',
        name: '王泡芙',
        identity: '知名萌宠博主'
      },
      {
        avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-2.png',
        name: '奥力给',
        identity: '知名萌宠博主'
      },
      {
        avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-3.png',
        name: '赖小来',
        identity: '知名萌宠博主'
      },
      {
        avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-4.png',
        name: '王泡芙',
        identity: '知名萌宠博主'
      },
      {
        avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-5.png',
        name: '王泡芙',
        identity: '知名萌宠博主'
      },
      {
        avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形.png',
        name: '王泡芙',
        identity: '知名萌宠博主'
      },
      {
        avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-1.png',
        name: '王泡芙',
        identity: '知名萌宠博主'
      },
      {
        avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-2.png',
        name: '王泡芙',
        identity: '知名萌宠博主'
      },
      {
        avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-3.png',
        name: '王泡芙',
        identity: '知名萌宠博主'
      },
      {
        avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-4.png',
        name: '王泡芙',
        identity: '知名萌宠博主'
      },
      {
        avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-5.png',
        name: '王泡芙',
        identity: '知名萌宠博主'
      },
    ];



    setList(
      ...List,
      mockData
    )
  }, []);

  return (
    <>
      {List.map((item, index) => {
        return (
          <div className='RecommendList-item' key={index}>

            <div className="r-avatar">
              <img src={item.avatar}  />
            </div>

            <div className="r-name">
              {item.name}
            </div>

            <div className="r-identity">
              {item.identity}
            </div>

            <div className="r-concernBtn">
              <span>+</span>
              <span>关注</span>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default RecommendedList