import React from 'react'
import "@/scss/friend/FriendIndex.scss"
import Tab from "@/components/Tab"
import { Tabs } from 'react-vant'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const items = [1, 2]
const index = () => {
    const navigate = useNavigate()
  return (
    <div className='friend'>

      <div className="top container">

        <div className="search">

          <div className="icon">
            <img src="/public/images/Friend-index/搜索.png" alt="搜索" />
          </div>

          <input type="text" placeholder='搜索你想要的'/>
        </div>

        <div className="camera">
          <img src="/public/images/Friend-index/上传.png" alt="拍照上传" />
        </div>

      </div>

      <div className="classify">

      <Tabs 
      defaultActive={2}
      align='start'
      titleInactiveFontSize={20}
      titleInactiveColor='#999'
      titleActiveFontSize={21}
      titleActiveColor='#08090A'
      color='#FCCB30'
      onClickTab={(index)=>{

        console.log(index)
        if(index==1){
          navigate('/friend/concern')
        }
        if(index==2){
          navigate('/friend/recommend')
        }
      }}
      >
        {items.map(item => (
          <Tabs.TabPane key={item} title={item === 1?'关注':'推荐'}>
            <Outlet />
          </Tabs.TabPane>
        ))}
      </Tabs>

      </div>





      {/* 底部 Tabbar 栏 */}
      <Tab />
    </div>
  )
}

export default index