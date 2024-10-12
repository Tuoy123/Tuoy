//  关注页帖子 浏览人头像 c-f-l-avatar
import React from 'react'
import "@/scss/friend/CflAvatar.scss"

const CflAvatar = (props) => {

    const {visitors} = props

    return (
        <>
            {
                visitors.map(item => {
                    return (
                        <div className="c-f-l-avatar-img" key={item.id}>
                            <img src={item.avatar}  />
                        </div>
                    )
                })
            }
        </>

    )
}

export default CflAvatar