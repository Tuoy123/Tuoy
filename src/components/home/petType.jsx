// 选择索引导航
import React from 'react'
import { IndexBar, Tabs, Cell } from 'react-vant'

const indexList = []
const charCodeOfA = 'A'.charCodeAt(0)

for (let i = 0; i < 2; i += 1) {
    indexList.push(String.fromCharCode(charCodeOfA + i))
}



const PetType = (props) => {

    const { type } = props

    return (
        // type = 'w'
        <Tabs>
            <IndexBar>
                {indexList.map(item => (
                    <div key={item}>
                        <IndexBar.Anchor index={item} />

                        {
                            item === 'A' && type === 'w' && (
                                <div>
                                    <Cell title='阿富汗猎犬' />
                                    <Cell title='阿拉斯加雪橇犬' />
                                </div>

                            )
                        }
                        {
                            item === 'B' && type === 'w' && (
                                <div>
                                    <Cell title='伯恩山犬' />
                                    <Cell title='比格猎犬' />
                                    <Cell title='巴哥犬' />
                                    <Cell title='巴吉度犬' />
                                    <Cell title='边境牧羊犬' />
                                    <Cell title='北京犬' />

                                </div>

                            )
                        }

                    </div>
                ))}
            </IndexBar>
        </Tabs>
    )
}


export default PetType