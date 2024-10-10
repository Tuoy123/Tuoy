import React, { useState } from 'react'
import { ArrowLeft, Arrow } from '@react-vant/icons';
import "@/Login.css"
import { Form, Input, Button, Toast } from 'react-vant';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
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

    const onFinish = (values) => {

        console.log('Success:', values);

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
        <div className="login">
            <header>
                <ArrowLeft onClick={()=>navigate(-1)}/>
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

                <span className="title-text">手机号码登录</span>

                <Form.Item
                    name='phone'
                    rules={[{ pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }]}
                >
                    <Input className='Phone' placeholder="请输入手机号" />

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
                <Link to='/register'>
                    <span>新用户注册</span>
                    <span><Arrow /> </span>
                </Link>
            </div>

            <div className="other">

                <span>其他登录方式</span>

                <div className="list">

                    <div className="wx">
                        <img src='/public/images/other/WX.png' onClick={()=>Toast('使用微信登录')}/>
                    </div>

                    <div className="qq">
                        <img src='/public/images/other/QQ.png' onClick={()=>Toast('使用QQ登录')}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login




