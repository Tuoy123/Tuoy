import React, { useState } from 'react'
import { ArrowLeft, Arrow } from '@react-vant/icons';
import "@/Login.css"
import { Form, Input, Button, Toast } from 'react-vant';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();

    const handleGetYzm = () => {
        Toast.loading({
            message: '1212',
            forbidClick: true,
        });
        setTimeout(() => {
            Toast.clear();
        }, 1500);
    }

    const onFinish = async (values) => {
        try {
            // 向后端发起请求
            const response = await axios.post('http://8.154.37.184:8080/user/login', values);
            if (response.status === 200) {
                // 注册成功后的处理逻辑，比如提示用户并跳转到登录页面
                Toast.success('登录成功！');
                navigate('/mine', { replace: true });
            } else {
                // 注册失败的处理逻辑，比如显示错误信息
                Toast.fail('登录失败，请检查输入信息。');
            }
        } catch (error) {
            // 处理请求错误的逻辑，比如网络问题或服务器错误
            Toast.fail('登录请求发生错误，请稍后再试。');
        }
    };

    return (
        <div className="login">
            <header>
                <ArrowLeft onClick={() => navigate(-1)} />
            </header>

            <Form
                className="login-content"
                onFinish={onFinish}
                footer={
                    <div style={{ marginTop: '25px' }}>
                        <Button round nativeType='submit' block className='submit' color='#FCCB30'>
                            <span className='submit'>登录</span>
                        </Button>
                    </div>}
            >

                <span className="title-text">登录</span>

                <Form.Item
                    className='username'
                    name='username'
                >
                    <Input placeholder="请输入用户名" />
                </Form.Item>

                <Form.Item
                    className='password'
                    name='password'
                >
                    <Input placeholder="请输入密码" />
                </Form.Item>

                <Form.Item
                    name='yzm'
                    rules={[{ pattern: /^[0-9]{4}$/, message: '请输入正确的验证码' }]}
                >
                    <div className="captcha">

                        <Input className='yzm' placeholder="请输入邮箱验证码" />
                        <Button block color='rgba(255,255,255,0)' className='getYzm' onClick={handleGetYzm}><span>获取验证码</span></Button>

                    </div>
                </Form.Item >

            </Form>

            <div className="newUser">
                <Link to='/register'>
                    <span>新用户注册</span>
                    <span><Arrow /> </span>
                </Link>
            </div>

            <div className="other">

                <span>其他登录方式</span>

                <div className="list">

                    <div className="wx">
                        <img src='/public/images/other/WX.png' onClick={() => Toast('使用微信登录')} />
                    </div>

                    <div className="qq">
                        <img src='/public/images/other/QQ.png' onClick={() => Toast('使用QQ登录')} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login




