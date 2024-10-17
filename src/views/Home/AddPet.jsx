// 添加宠物
import React, { useState } from 'react'
import "@/scss/home/AddPet.scss"
import { ArrowLeft } from '@react-vant/icons';
import { Toast, Radio } from 'react-vant';
import { useNavigate } from 'react-router-dom';

const AddPet = () => {

    const navigate = useNavigate()

    const handleReturn = () => {
        navigate(-1)
    }

    const handleSave = () => {
        Toast.success('点击保存')
    }

    const upDataAvatar = () => {
        Toast.success('上传头像')
    }

    const toChoosePetType = () => {
        Toast.success('选择宠物类型')
        navigate('/home/choosepettype')
    }

    return (
        <div className="AddPet">

            <div className="AddPet-top">

                <div className="AddPet-top-left" onClick={handleReturn}><ArrowLeft /></div>
                <div className="AddPet-top-center">
                    添加宠物
                </div>
                <div className="AddPet-top-right" onClick={handleSave}>保存</div>


            </div>

            <div className="AddPet-content">

                <div className="AddPet-content-item">

                    <div className="AddPet-content-item-l">
                        头像
                    </div>

                    <div className="AddPet-content-item-r" onClick={upDataAvatar}>
                        <img src="/public/images/Home-index/FosterCare/空头像.png" alt="" />
                    </div>

                </div>

                <div className="AddPet-content-item">

                    <div className="AddPet-content-item-l">
                        昵称
                    </div>

                    <div className="AddPet-content-item-r">
                        <input type="text" placeholder="请输入昵称" />
                    </div>

                </div>

                <div className="AddPet-content-item">

                    <div className="AddPet-content-item-l">
                        年龄
                    </div>

                    <div className="AddPet-content-item-r">
                        <input type="text" placeholder="请选择出生日期 &nbsp;>" />
                    </div>

                </div>

                <div className="AddPet-content-item">

                    <div className="AddPet-content-item-l">
                        性别
                    </div>

                    <div className="AddPet-content-item-r">
                        <input name='sex' type="text" placeholder="请选择性别 &nbsp;>" />
                    </div>

                </div>

                <div className="AddPet-content-item">

                    <div className="AddPet-content-item-l">
                        宠物类型
                    </div>

                    <div className="AddPet-content-item-r">
                        <input type="text" placeholder="请选择宠物类型 &nbsp;>" onFocus={toChoosePetType} />
                    </div>

                </div>

                <div className="AddPet-content-item">

                    <div className="AddPet-content-item-l">
                        绝育情况
                    </div>

                    <div className="AddPet-content-item-r">
                        <input type="text" placeholder="请选择 &nbsp;>" />
                    </div>

                </div>

                <div className="AddPet-content-item">

                    <div className="AddPet-content-item-l">
                        疫苗情况
                    </div>

                    <div className="AddPet-content-item-r">
                        <input type="text" placeholder="请选择 &nbsp;>" />
                    </div>

                </div>

                <div className="AddPet-content-item">

                    <div className="AddPet-content-item-l">
                        驱虫情况
                    </div>

                    <div className="AddPet-content-item-r">
                        <input type="text" placeholder="请选择 &nbsp;>" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default AddPet