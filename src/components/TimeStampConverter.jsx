// 时间戳转换器
import React from 'react';

function TimeStampConverter({ createTime }) {

    const date = new Date(createTime);

    const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');

    return <div>{formattedDate}</div>;
    
}

export default TimeStampConverter;