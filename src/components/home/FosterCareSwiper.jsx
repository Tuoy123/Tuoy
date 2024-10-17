import React from 'react';
import { Swiper, Toast } from 'react-vant';
import { FosterCareBannerItem } from '@/demo/swiper/FosterCareBannerItem';
import '@/demo/swiper/base.less';

export default () => {

    return (
        <div className="demo-swiper">

            <Swiper
                slideSize={100} //滑块大小80
                autoplay={2000}//自动播放2s
                duration={200}//滑动时间0.2s
                loop={true}//循环播放
                touchable={true}//触摸滑动
                stuckAtBoundary={true}//不粘住边界

            >

                {FosterCareBannerItem}

            </Swiper>
        </div>
    );
};