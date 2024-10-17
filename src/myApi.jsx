

// 这里存放用上的模拟接口
import React from 'react'

// -萌友圈接口

//关注与未关注，推荐共用
const friendApi = [
    {
        uid: 11,    //用户id
        pid: 1001,  //帖子id
        name: '王小样', //用户名
        type: '不拉多尔',   //宠物类型
        master: '泡芙',     //主人
        identity: '知名宠物博主',   //身份
        avatar: '/public/images/Friend-index/recommend/recommendList/r-u-avatar (2).png',   //用户头像
        createTime: Date.now() - 1000 * 60, // 1 分钟前的时间戳    这模拟数据-需要后端处理
        imgArr: [ //帖子上传的图片数组
            { src: '/public/images/Friend-index/post-img/post-pet (2).png' },
            { src: '/public/images/Friend-index/post-img/post-pet (5).png' },
            { src: '/public/images/Friend-index/post-img/post-pet (6).png' },
        ],
        txt: '狗狗是人类的最好的朋友，它们忠诚可靠，守护着他们的主人不离不弃。甚至，比生命更为重要。',  //帖子内容
        supportCount: 289,  //点赞数
        likeCount: 36,      //喜欢数
        commentCount: 14,   //评论数
        visitors: [         //最近访客头像
            { id: 1, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-1.png' },
            { id: 2, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-2.png' },
            { id: 3, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-3.png' },
        ],
        isConcern: false,   //是否关注
    },
    {
        uid: 22,
        pid: 1002,
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
        pid: 1003,
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

// -发布动态---上传模拟图集
const mockImgArr = [
    { url: '/public/images/Friend-index/post-img/post-pet (2).png' },
    { url: '/public/images/Friend-index/post-img/post-pet (3).png' },
    { url: '/public/images/Friend-index/post-img/post-pet (4).png' },
    { url: '/public/images/Friend-index/post-img/post-pet (5).png' },
    { url: '/public/images/Friend-index/post-img/post-pet (6).png' },
    { url: '/public/images/Friend-index/post-img/post-pet (7).png' },
    { url: '/public/images/Friend-index/post-img/post-pet.png' },
]



// 首页接口

//-每日推荐数据  recommendApi  <===>  friendApi
const recommendApi = [
    {
        uid: 11,
        name: '王小样',
        type: '不拉多尔',
        master: '泡芙',
        identity: '知名宠物博主',
        pId: 1001,//t帖子id
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
        name: '喵喵大人',
        type: '不拉多尔',
        master: '泡芙',
        identity: '知名宠物博主',
        pId: 1001,//t帖子id
        avatar: '/public/images/Friend-index/recommend/recommendList/r-u-avatar (3).png',

        createTime: Date.now() - 1000 * 60, // 1 分钟前的时间戳
        imgArr: [
            { src: '/public/images/Friend-index/post-img/post-pet (3).png' },
            { src: '/public/images/Friend-index/post-img/post-pet (4).png' },
            { src: '/public/images/Friend-index/post-img/post-pet (7).png' },
        ],
        txt: '狗狗是人类的最好的朋友，它们忠诚可靠，守护着他们的主人不离不弃。甚至，比生命更为重要。',
        supportCount: 289,
        commentCount: 36,
        commentCount: 14,
        visitors: [
            { id: 1, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-1.png' },
            { id: 2, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-2.png' },
            { id: 3, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-3.png' },

        ],
        isConcern: false,
    },
    {
        uid: 33,
        name: '我很懒',
        type: '不拉多尔',
        master: '泡芙',
        identity: '知名宠物博主',
        pId: 1001,//t帖子id
        avatar: '/public/images/Friend-index/recommend/recommendList/r-u-avatar.png',

        createTime: Date.now() - 1000 * 60, // 1 分钟前的时间戳
        imgArr: [
            { src: '/public/images/Friend-index/post-img/post-pet (3).png' },
            { src: '/public/images/Friend-index/post-img/post-pet (4).png' },
            { src: '/public/images/Friend-index/post-img/post-pet (7).png' },
        ],
        txt: '狗狗是人类的最好的朋友，它们忠诚可靠，守护着他们的主人不离不弃。甚至，比生命更为重要。',
        supportCount: 289,
        commentCount: 36,
        commentCount: 14,
        visitors: [
            { id: 1, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-1.png' },
            { id: 2, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-2.png' },
            { id: 3, username: '用户名', type: '宠物类型', avatar: '/public/images/Friend-index/concern/ConcernList/椭圆形-3.png' },

        ],
        isConcern: false,
    },

]

//-热门宠物护理师数据
const workerList = [
    {
        wid: 1,
        wname: '朱小亮',
        job: '专家医师/经理',
        wTime: 15,
        avatar: '/public/images/Home-index/worker-List/worker-1.png',
    },
    {
        wid: 2,
        wname: '高小峰',
        job: '主治医师/院长',
        wTime: 9,
        avatar: '/public/images/Home-index/worker-List/worker-2.png',
    },
    {
        wid: 3,
        wname: '朱小小',
        job: '高级医师',
        wTime: 9,
        avatar: '/public/images/Home-index/worker-List/worker-3.png',
    },
    {
        wid: 4,
        wname: '王小样',
        job: '高级医师',
        wTime: 9,
        avatar: '/public/images/Home-index/worker-List/worker-4.png',
    },

]



const myApi = () => {

    return (
        <div className="myApi">

            <h1>模拟接口</h1>

            <hr></hr>

            
        </div>
    )
}

export default myApi

