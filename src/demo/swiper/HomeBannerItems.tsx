import React from 'react'
import { Swiper, Toast } from 'react-vant'

// 模拟首页banner数据
const banners = [
    '/public/images/Home-index/swiper-List/banner.png',
    '/public/images/Home-index/swiper-List/banner.png',
    '/public/images/Home-index/swiper-List/banner.png',
    '/public/images/Home-index/swiper-List/banner.png',
    '/public/images/Home-index/swiper-List/banner.png',
    '/public/images/Home-index/swiper-List/banner.png',
    '/public/images/Home-index/swiper-List/banner.png',
]

export const HomeBannerItems =
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
