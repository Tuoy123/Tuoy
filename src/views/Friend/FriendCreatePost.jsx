// 发布动态页
import React, { useState, useEffect } from 'react'
import "@/scss/friend/FriendCreatePost.scss";
import { ArrowLeft } from '@react-vant/icons';
import { Toast } from 'react-vant';
import { Button, Form } from 'react-vant'
import { useNavigate } from 'react-router-dom';

const FriendCreatePost = () => {

    const navigate = useNavigate()

    const [postTxt, setPostTxt] = useState('分享新鲜事')
    const [postImgArr, setPostImgArr] = useState([])

    // 模拟图集
    const mockImgArr = [
        { url: '/public/images/Friend-index/post-img/post-pet (2).png' },
        { url: '/public/images/Friend-index/post-img/post-pet (3).png' },
        { url: '/public/images/Friend-index/post-img/post-pet (4).png' },
        { url: '/public/images/Friend-index/post-img/post-pet (5).png' },
        { url: '/public/images/Friend-index/post-img/post-pet (6).png' },
        { url: '/public/images/Friend-index/post-img/post-pet (7).png' },
        { url: '/public/images/Friend-index/post-img/post-pet.png' },
    ]

    const handleReturn = () => {
        navigate(-1)
    }

    const onChange = (e) => {
        console.log(e.target.value)
        setPostTxt(e.target.value)

    }

    const handleAddImg = () => {
        Toast.loading({
            message: '获取模拟图集...',
            forbidClick: true,
        });

        // 使用展开运算符将当前的 postImgArr 和 mockImgArr 合并为一个新数组
        setPostImgArr([...postImgArr, ...mockImgArr]);
        console.log("获取模拟图集后", postImgArr);
    };

    const onFinish = (values) => {
        console.log(values)
        Toast.success('发布...')
    };

    return (
        <div className="FriendCreatePost">

            <div className="FriendCreatePost-top">

                <div className="FriendCreatePost-top-left" onClick={handleReturn}>

                    <span><ArrowLeft /></span>

                </div>

                <div className="FriendCreatePost-top-center">发布动态</div>

            </div>

            <Form
                className="FriendCreatePost-content"
                name='postForm'
                onFinish={onFinish}
                footer={
                    <Button className="FriendCreatePost-createPostBtn" nativeType='submit'>
                        立即发布
                    </Button>
                }

            >

                <Form.Item name='postTxt'>
                    <textarea className="FriendCreatePost-content-postTxt" value={postTxt} placeholder={postTxt} onChange={onChange} />
                </Form.Item>

                <Form.Item name='postImgArr'>
                    <div className="FriendCreatePost-content-postImg" >

                        <div className="postImgAdd">

                            <div className="postImgAdd-a" onClick={handleAddImg}>

                                <img className='postImgAdd-a' src="/public/images/Friend-index/添加.png" />

                            </div>
                        </div>

                        {
                            postImgArr.map((item, index) => {
                                return <div className="addPic" key={index}>
                                    <img src={item.url} />
                                </div>
                            })
                        }

                    </div>
                </Form.Item>




            </Form>



        </div>

    )
}

export default FriendCreatePost