// 首页菜单导航栏
import React from 'react'
import "@/scss/home/Menu.scss"
import { useNavigate } from 'react-router-dom'

const Menu = () => {
    const navigate = useNavigate()

    return (
        <div className="Menu">

            <div className="menu-item" onClick={()=>navigate('/home/fostercare')}>

                <div className="menu-item-icon" >
                    <img src="/public/images/Home-index/nav/寄养.png" />
                </div>

                <div className="menu-item-title" >
                    我要寄养
                </div>

            </div>

            <div className="menu-item"  onClick={()=>navigate('/home/hairdressing')}>

                <div className="menu-item-icon" >
                    <img src="/public/images/Home-index/nav/美容.png" />
                </div>

                <div className="menu-item-title" >
                    宠物美容
                </div>

            </div>

            <div className="menu-item"  onClick={()=>navigate('/home/medical')}>

                <div className="menu-item-icon" >
                    <img src="/public/images/Home-index/nav/医疗.png" />
                </div>

                <div className="menu-item-title" >
                    宠物医疗
                </div>

            </div>

            <div className="menu-item"  onClick={()=>navigate('/home/knowledge')}>

                <div className="menu-item-icon" >
                    <img src="/public/images/Home-index/nav/百科.png" />
                </div>

                <div className="menu-item-title" >
                    知识百科
                </div>

            </div>

        </div>
    )
}

export default Menu