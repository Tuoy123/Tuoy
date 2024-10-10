import React, { useState } from 'react'
import { ArrowLeft, Arrow } from '@react-vant/icons';
import "@/Register.css"
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

    const onFinish = (values) => {

        console.log('Success:', values);
        if(values.username === '' || values.username === null || values.username === undefined) {
            Toast.fail('请输入用户名');
            return false;
        }
        if (values.phone === '' || values.phone === null || values.phone === undefined) {
            Toast.fail('请输入手机号');
            return false;
        }
        if (values.yzm === '' || values.yzm === null || values.yzm === undefined) {
            Toast.fail('请输入验证码');
            return false;
        }
        //调用接口验证身份

    }
    return (
        <div className="register">
            <header>
                <ArrowLeft onClick={() => navigate('/login')} />
            </header>

            <Form
                className="register-content"
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
                    rules={[{ required: false, message: '请输入用户名' }]}
                >
                    <Input  placeholder="请输入用户名" />

                </Form.Item >

                <Form.Item
                className='Phone'
                    name='phone'
                    rules={[{ pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }]}
                >
                    <Input  placeholder="请输入手机号" />

                </Form.Item >

                <Form.Item
                    name='yzm'
                    rules={[{ pattern: /^[0-9]{4}$/, message: '请输入正确的验证码' }]}
                >
                    <div className="captcha">

                        <Input className='yzm' placeholder="请输入手机验证码" />
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




