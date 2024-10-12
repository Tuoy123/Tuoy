import React from 'react'
import { Tabbar } from 'react-vant'
import { useNavigate, useLocation } from 'react-router-dom'

const Tab = () => {

    const navigate = useNavigate()
    //获取路由信息
    const location = useLocation()
    //tabbar默认选中
    const defaultValue = location.pathname
    //tabbar列表
    const tabbarIcons = [
        {
            text: "首页",
            path: "/",
            icon: "/public/images/tabbar/t1.png",
            iconActive: "/public/images/tabbar/t1_active.png"
        },
        {
            text: "萌友圈",
            path: "/friend",
            icon: "/public/images/tabbar/t2.png",
            iconActive: "/public/images/tabbar/t2_active.png"
        },
        {
            text: "我的",
            path: "/mine",
            icon: "/public/images/tabbar/t3.png",
            iconActive: "/public/images/tabbar/t3_active.png"
        }
    ]

    //tabbar点击事件
    const handleChange = (pathname) => {
        // console.log(pathname)
        switch (pathname) {
            case "/":
                navigate("/")
                break
            case "/friend":
                navigate("/friend")
                break
            case "/mine":
                navigate("/mine")
                break
        }
    }
    return (
        <div className='demo-tabbar' >

            <Tabbar
                fixed={true}
                border={false}
                onChange={handleChange}
                activeColor='#080808'
                inactiveColor='#858585'
                defaultValue={defaultValue}
                safeAreaInsetBottom={true}
            >

                {tabbarIcons.map((item, index) => {
                    return (
                        <Tabbar.Item
                            key={index}
                            name={item.path}
                            icon={(active) => (
                                <img src={active ? item.iconActive : item.icon} />
                            )}
                        >
                            {item.text}
                        </Tabbar.Item>
                    )
                })}

            </Tabbar>
        </div>
    )
}

export default Tab