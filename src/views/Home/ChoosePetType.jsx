import React, { useState, useEffect } from 'react'
import PetType from "@/components/home/PetType"
import "@/scss/home/ChoosePetType.scss"
import { ArrowLeft } from '@react-vant/icons';
import { useNavigate } from 'react-router-dom';

const ChoosePetType = () => {

    const [isSelectW, setIsSelectW] = useState(false)

    const [isSelectM, setIsSelectM] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {

        setIsSelectW(true)

    }, [])

    const handleReturn = () => {
        navigate(-1)
    }


    const handleToggleW = () => {

        setIsSelectW(true)
        setIsSelectM(false)

    }

    const handleToggleM = () => {

        setIsSelectM(true)
        setIsSelectW(false)

    }

    return (
        <div className="ChoosePetType">

            <div className="ChoosePetType-top">

                <div className="ChoosePetType-top-left" onClick={handleReturn}><ArrowLeft /></div>

                <div className="ChoosePetType-top-center">
                    <div className="c-t-c-w" style={{ backgroundColor: isSelectW ? '#FEFFFE' : '#EEEEEE' }} onClick={handleToggleW}>汪星人</div>
                    <div className="c-t-c-m" style={{ backgroundColor: isSelectM ? '#FEFFFE' : '#EEEEEE' }} onClick={handleToggleM}>喵星人</div>
                </div>


            </div>

            {isSelectW ? <PetType type='w' /> : isSelectM && <PetType type='m' />}

        </div>
    )
}

export default ChoosePetType