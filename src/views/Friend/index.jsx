import React, { useState, useEffect } from 'react';
import "@/scss/friend/FriendIndex.scss";
import Tab from "@/components/Tab";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Toast } from 'react-vant';
import FriendSearch from "@/views/Friend/FriendSearch";

const friendApi = [
    {
      uid: 11,
      pid:1001,
      name: '王小样',
      type: '不拉多尔',
      master: '泡芙',
      identity: '知名宠物博主',
      avatar: '/public/images/Friend-index/recommend/recommendList/r-u-avatar (2).png',
      createTime: Date.now() - 1000 * 60, // 1 分钟前的时间戳
      imgArr: [
        { src: '/public/images/Friend-index/post-img/post-pet (2).png' },
        { src: '/public/images/Friend-index/post-img/post-pet (5).png' },
        { src: '/public/images/Friend-index/post-img/post-pet (6).png' },
      ],
      txt: '狗狗是人类的最好的朋友，它们忠诚可靠，守护着他们的主人不离不弃。甚至，比生命更为重要。',
      supportCount: 289,
      likeCount: 36,
      commentCount: 14,
      visitors: [
        { id: 1, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-1.png' },
        { id: 2, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-2.png' },
        { id: 3, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-3.png' },
      ],
      isConcern: false,
    },
    {
      uid: 22,
      pid:1002,
      name: '喵喵大人',
      type: '不拉多尔',
      master: '泡芙',
      identity: '知名宠物博主',
      avatar: '/public/images/Friend-index/recommend/recommendList/r-u-avatar (3).png',

      createTime: Date.now() - 1000 * 60, // 1 分钟前的时间戳
      imgArr: [
        { src: '/public/images/Friend-index/post-img/post-pet (3).png' },
        { src: '/public/images/Friend-index/post-img/post-pet (4).png' },
        { src: '/public/images/Friend-index/post-img/post-pet (7).png' },
      ],
      txt: '狗狗是人类的最好的朋友，它们忠诚可靠，守护着他们的主人不离不弃。甚至，比生命更为重要。',
      supportCount: 123,
      commentCount: 23,
      commentCount: 53,
      visitors: [
        { id: 1, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-1.png' },
        { id: 2, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-2.png' },
        { id: 3, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-3.png' },

      ],
      isConcern: false,
    },
    {
      uid: 33,
      pid:1003,
      name: '我很懒',
      type: '不拉多尔',
      master: '泡芙',
      identity: '知名宠物博主',
      avatar: '/public/images/Friend-index/recommend/recommendList/r-u-avatar.png',

      createTime: Date.now() - 1000 * 60, // 1 分钟前的时间戳
      imgArr: [
        { src: '/public/images/Friend-index/post-img/post-pet (3).png' },
        { src: '/public/images/Friend-index/post-img/post-pet (4).png' },
        { src: '/public/images/Friend-index/post-img/post-pet (7).png' },
      ],
      txt: '狗狗是人类的最好的朋友，它们忠诚可靠，守护着他们的主人不离不弃。甚至，比生命更为重要。',
      supportCount: 762,
      commentCount: 124,
      commentCount: 12,
      visitors: [
        { id: 1, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-1.png' },
        { id: 2, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-2.png' },
        { id: 3, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-3.png' },

      ],
      isConcern: false,
    },

  ]

const index = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [selectedClassifyIndex, setSelectedClassifyIndex] = useState(null);
    const [isSearch, setIsSearch] = useState(false);

    const items = ['关注', '推荐'];
    const itemRoutes = ['/friend/concern', '/friend/recommend'];

    const handleSearchFocus = () => {
        setIsSearch(true);

    }

    const handleSearchBlur = () => {
        setIsSearch(false);
    };

    const handleCamera = () => {

        Toast.loading({
            message: '正在跳转',
            forbidClick: true,
            duration: 1000,
            onClose: () => {
                navigate('/friend/createpost');
            },
        });

    };

    const handleClassifyClick = (index) => {
        setSelectedClassifyIndex(index);
        navigate(itemRoutes[index], { replace: true });
    };

    useEffect(() => {
        const currentPath = location.pathname;
        const index = itemRoutes.findIndex(route => route === currentPath);
        if (index !== -1) {
            setSelectedClassifyIndex(index);
        } else {
            // 如果没有匹配到当前路径，默认选中关注
            setSelectedClassifyIndex(0);
            navigate(itemRoutes[0], { replace: true });
        }
    }, [location]);

    return (
        <div className='friend'>

            <div className="top container">

                <div className="search">

                    <div className="icon">
                        <img src="/public/images/Friend-index/搜索.png" alt="搜索" />
                    </div>

                    {/* 没有搜索参照标准，功能暂时不写 */}
                    <input type="text" placeholder='搜索你想要的' onFocus={handleSearchFocus} onBlur={handleSearchBlur}/>

                </div>

                <div className="camera">
                    <img src="/public/images/Friend-index/上传.png" alt="拍照上传" onClick={handleCamera} />
                </div>

            </div>

            {isSearch && <FriendSearch />}

            <div className="classify-list">

                {items.map((item, index) => (
                    <div
                        className={`item ${index === selectedClassifyIndex ? 'selected' : ''}`}
                        key={index}
                        onClick={() => handleClassifyClick(index)}
                    >

                        <div className="txt">{item}</div>
                        {index === selectedClassifyIndex && <div className="yLine"></div>}

                    </div>
                ))}

            </div>
            <Outlet />
            {/* 底部 Tabbar 栏 */}
            <Tab />
        </div>
    );
};

export default index;