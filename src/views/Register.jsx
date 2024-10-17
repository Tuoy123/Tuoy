import React, { useState } from 'react'
import { ArrowLeft, Arrow } from '@react-vant/icons';
// import "@/Register.css"
import { Form, Input, Button, Toast } from 'react-vant';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
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
            const response = await axios.post('http://8.154.37.184:8080/user/register', values);
            if (response.status === 200) {
                // 注册成功后的处理逻辑，比如提示用户并跳转到登录页面
                Toast.success('注册成功！');
                navigate('/login', { replace: true });
            } else {
                // 注册失败的处理逻辑，比如显示错误信息
                Toast.fail('注册失败，请检查输入信息。');
            }
        } catch (error) {
            // 处理请求错误的逻辑，比如网络问题或服务器错误
            Toast.fail('注册请求发生错误，请稍后再试。');
        }
    };

    return (
        <div className="Register">
            <header>
                <ArrowLeft onClick={() => navigate(-1)} />
            </header>

            <Form
                className="Register-content"
                onFinish={onFinish}
                footer={
                    <div style={{ marginTop: '25px' }}>
                        <Button round nativeType='submit' block className='submit' color='#FCCB30'>
                            <span className='submit'>注册</span>
                        </Button>
                    </div>}
            >

                <span className="title-text">注册</span>

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
                    className='phone'
                    name='phone'
                >
                    <Input placeholder="请输入手机号" />
                </Form.Item>

                <Form.Item
                    className='email'
                    name='email'
                    rules={[{ pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: '请输入正确的邮箱' }]}
                >
                    <Input placeholder="请输入邮箱" />

                </Form.Item >

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
                <Link to='/login'>
                    <span>已注册，去登录</span>
                    <span><Arrow /> </span>
                </Link>
            </div>

        </div>

    )
}

export default Register




