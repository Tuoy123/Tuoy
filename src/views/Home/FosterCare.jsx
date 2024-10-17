// 我要寄养
import React from 'react'
import "@/scss/home/FosterCare.scss"
import { ArrowLeft } from '@react-vant/icons';
import FosterCareSwiper from '@/components/home/FosterCareSwiper';
import StoresList from '@/components/home/StoresList';

// 模拟的门店列表数据
const StoresData = [
  {
    sid: 1,                 // 门店id
    name: '淘气联盟宠物店', // 门店名称
    avatar: '/public/images/Home-index/FosterCare/Stores-list/Stores.png',  // 门店头像
    star: 4,    // 星级
    address: '丰台长丰园和顺家园底商B23-89',  // 地址
    distance: 3.55,         // 距离
    houseType: '2室1厅一卫',// 房屋类型
    AreaSize: 120,          // 房屋面积
    fosterCareNum: 2,       // 寄养数量
  },
  {
    sid: 2,
    name: '喵喵幼稚园',
    avatar: '/public/images/Home-index/FosterCare/Stores-list/Stores (2).png',
    star: 4,
    address: '丰台长丰园和顺家园底商B23-89',
    distance: 3.55,
    houseType: '2室1厅一卫',// 房屋类型
    AreaSize: 120,          // 房屋面积
    fosterCareNum: 2,       // 寄养数量
  },
  {
    sid: 3,
    name: 'Cream喵咪生活馆',
    avatar: '/public/images/Home-index/FosterCare/Stores-list/Stores (3).png',
    star: 4,
    address: '丰台长丰园和顺家园底商B23-89',
    distance: 3.55,
    houseType: '2室1厅一卫',// 房屋类型
    AreaSize: 120,          // 房屋面积
    fosterCareNum: 2,       // 寄养数量
  },
  {
    sid: 4,
    name: '呼噜大王托狗园',
    avatar: '/public/images/Home-index/FosterCare/Stores-list/Stores (4).png',
    star: 4,
    address: '丰台长丰园和顺家园底商B23-89',
    distance: 3.55,
    houseType: '2室1厅一卫',// 房屋类型
    AreaSize: 120,          // 房屋面积
    fosterCareNum: 2,       // 寄养数量
  },
]

const FosterCare = () => {

  const handleReturn = () => {
    history.go(-1)
  }

  return (
    <div className="FosterCare">

      <div className="FosterCare-top">

        <div className="FosterCare-top-left" onClick={handleReturn}>
          <ArrowLeft className='FosterCare-top-left-ic'  />
        </div>

        <div className="FosterCare-top-title">寄养</div>
      </div>

      <FosterCareSwiper />

      <div className="fosterCare-title">
        <span>推荐门店</span>
      </div>

      {StoresData.map((item, index) => {
        return <StoresList data={item} key={index} />
      })}



    </div>
  )
}

export default FosterCare