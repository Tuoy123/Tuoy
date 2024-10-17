// 门店列表

import React from 'react'
import "@/scss/home/StoresList.scss"
import StarRating from "@/components/StarRating"
import { LocationO } from '@react-vant/icons';
import { useNavigate } from 'react-router-dom';

const StoresList = (props) => {

    const { data } = props

    const { sid, name, avatar, star, address, distance } = data

    const navigate = useNavigate()

    const toCx = (id, data) => {
        navigate(`/home/storesdetail/${id}`,
            {
                state: {
                    id,
                    data
                }
            }
        )

    }

    return (

        <div className="StoresList" >

            <div className="avatar">
                <img src={avatar} />
            </div>

            <div className="StoreInfo">

                <div className="top">

                    <div className="l">

                        <div className="name">
                            {name}
                        </div>

                        <div className="star">
                            <StarRating initialRating={star} />
                        </div>

                    </div>

                    <div className="r">

                        <button className='zx' onClick={() => toCx(sid, data)}>咨询</button>

                    </div>
                </div>

                <div className="bottom">

                    <div className="adress">
                        {address}
                    </div>
                    <div className="distance">
                        <span><LocationO /></span>
                        <span>{distance}km</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StoresList