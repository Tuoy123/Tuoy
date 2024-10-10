import React from 'react'
import Tab from '@/components/Tab'
import "@/scss/mine/MineIndex.scss"
import { Arrow } from '@react-vant/icons'
import { Toast } from 'react-vant';
import { useNavigate } from 'react-router-dom';

const index = () => {

    const navigate = useNavigate()

    return (
        <div className='Mine'>

            <div className="top">
                <div className="fun">
                    <div className="icon" onClick={()=>{Toast({message:'点击了通知信息'})}}>
                        <img src="/public/images/Mine-index/铃.png" alt="" />
                    </div>

                    <div className="icon" onClick={()=>{Toast({message:'点击了分享主页'})}}>
                        <img src="/public/images/Mine-index/分享.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="top-userInfo">

                <div className="avatar">
                    <img src="/public/images/Mine-index/头像.png" alt="用户头像" title='我的王泡芙' />
                </div>

                <div className="info">

                    <div className="name">王泡芙</div>
                    <div className="desc">爱猫猫，爱狗狗</div>

                </div>

            </div>

            <div className="otherInfo">

                <div className="item">

                    <div className="number">158</div>
                    <div className="title">粉丝</div>

                </div>

                <div className="item">

                    <div className="number">66</div>
                    <div className="title">关注</div>

                </div>

                <div className="item">

                    <div className="number">3152</div>
                    <div className="title">被赞</div>

                </div>

            </div>

            <div className="menu">

                <div className="item" onClick={()=>{navigate('/mine/mypet')}}>

                    <div className="icon">
                        <img src="/public/images/Mine-index/形状 2.png" alt="" />
                    </div>

                    <div className="title">
                        我的宠物
                    </div>

                </div>

                <div className="item" onClick={()=>{navigate('/mine/myorder')}}>

                    <div className="icon">
                        <img src="/public/images/Mine-index/订单.png" alt="" />
                    </div>

                    <div className="title">
                        服务订单
                    </div>

                </div>

                <div className="item" onClick={()=>{navigate('/mine/myappraise')}}>

                    <div className="icon">
                        <img src="/public/images/Mine-index/评论3.png" alt="" />
                    </div>

                    <div className="title">
                        我的评价
                    </div>

                </div>

                <div className="item" onClick={()=>{navigate('/mine/mycollection')}}>

                    <div className="icon">
                        <img src="/public/images/Mine-index/收藏.png" alt="" />
                    </div>

                    <div className="title">
                        我的收藏
                    </div>

                </div>

            </div>

            <div className="line"></div>

            <div className="configList">

                <div className="options">

                    <div className="icon">
                        <img src="/public/images/Mine-index/发布.png" alt="发布" />
                    </div>

                    <div className="title">我的发布</div>

                    <div className="right">
                        <Arrow className='r' />
                    </div>
                </div>

                <div className="options">

                    <div className="icon">
                        <img src="/public/images/Mine-index/寄养.png" alt="寄养" />
                    </div>

                    <div className="title">我的寄养</div>

                    <div className="right">
                        <Arrow className='r' />
                    </div>
                </div>

                <div className="options">

                    <div className="icon">
                        <img src="/public/images/Mine-index/收藏-1.png" alt="收藏" />
                    </div>

                    <div className="title">我的收藏</div>

                    <div className="right">
                        <Arrow className='r' />
                    </div>
                </div>

                <div className="op-line"></div>
                <div className="options">

                    <div className="icon">
                        <img src="/public/images/Mine-index/认证.png" alt="实名认证" />
                    </div>

                    <div className="title">实名认证</div>

                    <div className="right">
                        <Arrow className='r' />
                    </div>
                </div>

                <div className="options">

                    <div className="icon">
                        <img src="/public/images/Mine-index/设置.png" alt="账户设置" />
                    </div>

                    <div className="title">账户设置</div>

                    <div className="right">
                        <Arrow className='r' />
                    </div>
                </div>
            </div>



            {/* 底部 Tabbar 栏 */}
            <Tab />

        </div>
    )
}

export default index