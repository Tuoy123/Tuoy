// 图片盒子(容量 1-9 张)
import React from 'react'
import "@/scss/ImgBox.scss"

const ImgBox = (props) => {

    const { imgArr } = props
    const len = imgArr.length

    return (
        <div className="ImgBox">

            {/* state1 1张图 */}
            {len === 1 && <div className='state1'> <img src={imgArr[0].src} /></div>}

            {/* state2 1-3张图 */}
            {len > 1 && len < 4 && (
                <div className='state2'>
                    {imgArr.map((item, index) => {
                        return <img key={index} src={item.src} />
                    })}
                </div>
            )}

            {/* state3 4张图 */}
            {len === 4 && (
                <div className='state3'>
                    {imgArr.map((item, index) => {
                        return <img key={index} src={item.src} />
                    })}
                </div>
            )}

            {/* state4 5-9张图 */}
            {len > 4 && len < 10 && (
                <div className='state4'>
                    {imgArr.map((item, index) => {
                        return <img key={index} src={item.src} />
                    })}
                </div>
            )}


        </div>
    )
}

export default ImgBox