// 推荐列表
import React, { useState, useEffect } from 'react';
import "@/scss/friend/RecommendedLists.scss"

const RecommendedList = (props) => {

  const [List, setList] = useState([]);

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

    // 模拟接口数据---用接收的那个
    const {recommendedList} = props;
    const upList = [...recommendedList]

    setList(
      ...List,
      upList
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