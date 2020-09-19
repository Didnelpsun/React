// User.jsx
import React from 'react'

function User (props) {
    let check = (mes) => {
        // 获取参数中数据
         const {name, tel, color} = mes
        let style = {"color":color, "display":"flex", "flexDirection":"column", "justifyContent":"center"}
        return (
            <div style={style}>
                <div>{name}</div>
                <div>{tel}</div>
            </div>
        )
    };
    return (
        // 直接传入props到构造方法中
        <div>{check(props)}</div>
    )
}

export default User