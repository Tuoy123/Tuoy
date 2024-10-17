// 门店详情
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import "@/scss/home/StoresDetail.scss"
import { ArrowLeft } from '@react-vant/icons';
import StarRating from "@/components/StarRating"
import { LocationO, PhoneO, ChatO } from '@react-vant/icons';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'react-vant';


const StoresDetail = () => {

    const location = useLocation()

    const navigate = useNavigate()

    const data = location.state.data

    const { sid,name, star, address, houseType, AreaSize, fosterCareNum } = data

    const [isCollection, setIsCollection] = useState(false)

    const handleReturn = () => {
        navigate(-1)
    }


    const handleCollection = () => {

        if (isCollection === false) {

            //调用接口收藏

            setIsCollection(true)
            document.querySelector('#sdc').setAttribute('src', '/public/images/Home-index/FosterCare/收藏-active.png')
            Toast.success('收藏成功')

        }
        else {

            //调用接口取消收藏

            setIsCollection(false)
            document.querySelector('#sdc').setAttribute('src', '/public/images/Home-index/FosterCare/收藏.png')
            Toast.success('取消收藏')
        }
    }
    const handleShare = () => {
        Toast.success('点击了分享')
    }

    const handleYy = () => {

        navigate('/home/booking')

    }

    return (
        <div className="StoresDetail">

            <div className="StoresDetail-top">

                <div className="s-t-l" onClick={handleReturn}><ArrowLeft /></div>

                <div className="s-t-r">

                    <div className='collection' onClick={handleCollection}>

                        <img id='sdc' src="/public/images/Home-index/FosterCare/收藏.png" />
                    </div>

                    <div className='share' onClick={handleShare}>
                        <img src="/public/images/Home-index/FosterCare/分享.png" />
                    </div>
                </div>

            </div>

            <div className="StoresDetail-header">

                <div className="name">{name}</div>
                <div className="s-h-star"><StarRating initialRating={star} /></div>
                <div className="address">
                    <LocationO />
                    {address}
                </div>


                <div className="details">
                    {/* 宠物类型 */}
                    <div className="distance-item">

                        <div className="one">{houseType}</div>

                        <div className="two">房屋类型</div>

                    </div>
                    {/* 门店面积 */}
                    <div className="distance-item">

                        <div className="one">{AreaSize}m&sup2;</div>

                        <div className="two">房屋面积</div>

                    </div>
                    {/* 宠物数量 */}
                    <div className="distance-item">

                        <div className="one">{fosterCareNum}只</div>

                        <div className="two">待寄养宠物</div>

                    </div>

                </div>

            </div>

            <div className="StoresDetail-Price">

                <div className="s-p-title">寄养价格</div>

                <div className="s-p-item">
                    <div className="s-p-item-left">小型犬</div>
                    <div className="s-p-item-right">￥60元/天</div>
                </div>

                <div className="s-p-item">
                    <div className="s-p-item-left">中型犬</div>
                    <div className="s-p-item-right">￥80元/天</div>
                </div>

                <div className="s-p-item">
                    <div className="s-p-item-left">大型犬</div>
                    <div className="s-p-item-right">￥100元/天</div>
                </div>

                <div className="s-p-item">
                    <div className="s-p-item-left">喵星人</div>
                    <div className="s-p-item-right">￥50元/天</div>
                </div>

            </div>

            <div className="StoresDetail-other">

                <div className="s-p-o-title">寄养价格</div>

                <div className="s-p-o-item">
                    <div className="s-p-o-item-left">上门喂养</div>
                    <div className="s-p-o-item-right">￥60元/天</div>
                </div>

            </div>

            <div className="StoresDetail-footer">

                <div className="StoresDetail-footer-zx">
                    <div className="s-f-zx-ic"><ChatO /></div>
                    <div className="s-f-zx-title">咨询</div>
                </div>

                <div className="StoresDetail-footer-line"></div>

                <div className="StoresDetail-footer-dh">
                    <div className="s-f-dh-ic"><PhoneO /></div>
                    <div className="s-f-dh-title">电话</div>
                </div>

                <div className="StoresDetail-footer-yy">
                    <button className="StoresDetail-footer-yy-btn" onClick={handleYy}>
                        立即预约
                    </button>
                </div>
            </div>

        </div>
    )
}

export default StoresDetail