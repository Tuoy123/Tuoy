// 萌友圈搜索页
import React, { useState, useEffect } from 'react'
import "@/scss/friend/FriendSearch.scss"
import { DeleteO } from '@react-vant/icons';

// 没有接口数据   
//-定义一个模拟的搜索历史数据
const historyData = [
    { historyId: 1, hTitle: "八哥犬" },
    { historyId: 2, hTitle: "狗狗" },
    { historyId: 3, hTitle: "狗狗的生活用品" },
    { historyId: 4, hTitle: "拉布拉多" },
    { historyId: 5, hTitle: "边境牧羊犬" },
    { historyId: 6, hTitle: "伯恩山犬" },

]

//-定义一个模拟的热门搜索数据
const hotData = [
    { ranking: 1, hosId: 1, hTitle: "八哥犬" },
    { ranking: 2, hosId: 2, hTitle: "狗狗" },
    { ranking: 3, hosId: 3, hTitle: "拉布拉多" },
    { ranking: 4, hosId: 4, hTitle: "伯恩山犬" },
    { ranking: 5, hosId: 5, hTitle: "喵星人生活用品" },
    { ranking: 6, hosId: 6, hTitle: "爱喵大机密" },
    { ranking: 7, hosId: 7, hTitle: "找边境牧羊犬" },
    { ranking: 8, hosId: 8, hTitle: "喵喵" },
    { ranking: 9, hosId: 9, hTitle: "汪星人的家" },
    { ranking: 10, hosId: 10, hTitle: "巴吉度权" },

]


const FriendSearch = () => {

    const [historyList, setHistoryList] = useState([])

    const [hotList, setHotList] = useState([])

    useEffect(() => {
        setHistoryList(historyData)
    }, [historyData])

    useEffect(() => {
        setHotList(hotData)
    }, [hotData])


    return (
        <div className="FriendSearchBox">

            {historyList.length == 0 &&
                <div className="FriendSearch-Historical">

                    <div className="FriendSearch-Historical-title">

                        <div className="FriendSearch-Historical-title-l">
                            历史搜索
                        </div>

                        <div className="FriendSearch-Historical-title-r">
                            <DeleteO className='FriendSearch-Historical-title-r-icon' />
                        </div>

                    </div>

                    <div className="FriendSearch-Historical-content">
                        <div className="h-s-item">
                            <span>暂无搜索记录</span>
                        </div>


                    </div>

                </div>
            }

            {historyList.length > 0 &&
                <div className="FriendSearch-Historical">

                    <div className="FriendSearch-Historical-title">

                        <div className="FriendSearch-Historical-title-l">
                            历史搜索
                        </div>

                        <div className="FriendSearch-Historical-title-r">
                            <DeleteO className='FriendSearch-Historical-title-r-icon' />
                        </div>

                    </div>

                    <div className="FriendSearch-Historical-content">

                        {
                            historyList.map((item, index) => {
                                return <div key={index} className="h-s-item">
                                    <span>{item.hTitle}</span>
                                </div>
                            })
                        }

                    </div>

                </div>
            }

            {hotList.length == 0 &&
                <div className="FriendSearch-Hot">

                    <div className="FriendSearch-hot-title">

                        <div className="FriendSearch-hot-title-l">
                            热门搜索
                        </div>

                    </div>

                    <div className="FriendSearch-hot-content">

                        <div className="h-s-item">
                            <span>暂无热搜</span>
                        </div>


                    </div>

                </div>
            }

            {hotList.length > 0 &&
                <div className="FriendSearch-Hot">

                    <div className="FriendSearch-hot-title">

                        <div className="FriendSearch-hot-title-l">
                            热门搜索
                        </div>

                    </div>

                    <div className="FriendSearch-hot-content">

                        {
                            hotList.map((item, index) => {
                                return <div key={index} className="h-s-item">
                                    <span>{item.ranking}&nbsp;{item.hTitle}</span>
                                </div>
                            })
                        }

                    </div>

                </div>
            }


        </div>
    )
}

export default FriendSearch