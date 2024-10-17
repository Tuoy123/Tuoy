// 预约寄养
import React, { useState } from 'react'
import { ArrowLeft, Arrow } from '@react-vant/icons';
import "@/scss/home/booking.scss"
import { useNavigate } from 'react-router-dom';
import { Button, Input, Form, Toast } from 'react-vant'


// 暂时没数据，模拟已添加待寄养宠物列表
const petList = [
    {
        avatar: '/public/images/Home-index/FosterCare/yy-list/yy-pet (1).png',
        master: '赖小赖',
        type: '伯恩山犬'
    },
    {
        avatar: '/public/images/Home-index/FosterCare/yy-list/yy-pet (2).png',
        master: '小泡芙',
        type: '阿富汗猎犬'
    },
    {
        avatar: '/public/images/Home-index/FosterCare/yy-list/yy-pet (2).png',
        master: '小泡芙',
        type: '阿富汗猎犬'
    },
    {
        avatar: '/public/images/Home-index/FosterCare/yy-list/yy-pet (2).png',
        master: '小泡芙',
        type: '阿富汗猎犬'
    }
]

const Booking = () => {

    const navigate = useNavigate()

    const [value, setValue] = useState(new Date())  //现在的时间 时间戳

    const [StartTime, setStartTime] = useState(new Date())  //开始时间

    const [EndTime, setEndTime] = useState(new Date())  //结束时间

    const [form] = Form.useForm()

    const handleReturn = () => {
        navigate(-1)
    }

    const toAddPet = () => {
        navigate('/home/addpet')
    }

    const onClickBuy = () => {
        Toast.success('立即下单')
    }

    return (
        <div className="Booking">

            <div className="Booking-top">

                <div className="Booking-top-left" onClick={handleReturn} >
                    <ArrowLeft className='Booking-top-left-ic' />
                </div>

                <div className="Booking-top-title">预约寄养</div>
            </div>

            <div className="Booking-title">
                请选择宠物
            </div>

            <div className="Booking-addPet">
                {/* 添加宠物 */}
                <div className="Booking-addPet-add-btn" onClick={toAddPet}>
                    <img src="/public/images/Home-index/添加.png" />
                </div>

                {/* 已添加的待寄养宠物列表 */}
                <div className="Booking-addPet-add-pet">

                    {
                        petList.map((item, index) => {
                            const { avatar, master, type } = item
                            return (
                                <div className="Booking-addPet-add-pet-item" key={index}>

                                    <div className="Booking-addPet-add-pet-item-avatar">
                                        <img src={avatar} />
                                    </div>

                                    <div className="Booking-addPet-add-pet-item-info">

                                        <div className="pet-master">{master}</div>
                                        <div className="pet-type">{type}</div>

                                    </div>

                                </div>
                            )
                        })
                    }


                </div>


            </div>

            <div className="Booking-chooseTime-title">
                <div className="l">请选择寄养时间</div>
                <div className="r">共5天&nbsp;<Arrow /></div>
            </div>

            <div className="Booking-chooseTime">

                <div className="Booking-chooseTime-item">
                    <div className="Booking-chooseTime-item-t">2021-5-28</div>
                    <div className="Booking-chooseTime-item-b">9:00入住</div>
                </div>

                <div className="b-c-i-line"></div>

                <div className="Booking-chooseTime-item">
                    <div className="Booking-chooseTime-item-t">2021-5-28</div>
                    <div className="Booking-chooseTime-item-b">18:00结束</div>
                </div>

            </div>


            <Form
                form={form}
                footer={
                    <div className="d-s-bar">
                        <div className="price">
                            <span className='symbol'>￥</span>
                            <span className='num'>360</span>
                        </div>
                        <Button type="primary" block color='#FCCB30' className='d-s-bar-btn' onClick={onClickBuy}><span>立即下单</span></Button>
                    </div>
                }
            >

                <Form.Item name='master' label='联系人' >
                    <Input placeholder='请输入宠物主人姓名' />
                </Form.Item>

                <Form.Item name='phone' label='手机号' >
                    <Input placeholder='请输入宠物主人电话' />
                </Form.Item>

                <Form.Item name='txt' label='添加备注信息' >

                    <Input type='textarea' placeholder='请输入备注信息，入籍样式宠物所需用品等' />

                </Form.Item>

            </Form>




        </div>
    )
}

export default Booking