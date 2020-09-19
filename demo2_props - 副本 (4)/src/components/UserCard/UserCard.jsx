// UserCard.jsx
import React from 'react'
import User from '../User/User'

function UserCard(props) {
    // 只需要backColor就只取出这个属性
    const {backColor} = props
    let style = {"backgroundColor":backColor, "width":"10vw", "padding":"15px", "margin":"15px"}
    return (
        <div style={style}>
            {/* 再重新展开传入参数 */}
            <User {...props}></User>
        </div>
    )
}

export default UserCard