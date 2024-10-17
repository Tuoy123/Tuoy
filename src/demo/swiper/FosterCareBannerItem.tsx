import React from 'react'
import { Swiper, Toast } from 'react-vant'

// 模拟寄养首页banner数据
const banners = [
    '/public/images/Home-index/FosterCare/banner/banner.png',
    '/public/images/Home-index/FosterCare/banner/banner.png',
    '/public/images/Home-index/FosterCare/banner/banner.png',
    '/public/images/Home-index/FosterCare/banner/banner.png',
    '/public/images/Home-index/FosterCare/banner/banner.png',
    '/public/images/Home-index/FosterCare/banner/banner.png',
    '/public/images/Home-index/FosterCare/banner/banner.png',
]

export const FosterCareBannerItem =

    banners.map((item, index) => (


        <Swiper.Item key={index} >
            <div
                onClick={() => {
                    Toast.info(`你点击了卡片 ${index + 1}`)
                }}
            >
                <img src={item} />
            </div>
        </Swiper.Item>


    ))
