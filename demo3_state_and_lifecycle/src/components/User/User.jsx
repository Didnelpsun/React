// User.jsx
import React from 'react'

class User extends React.Component {
    constructor(props){
        super(props)
        // 给这个实例加上一个check方法
        // this.check = (mes) => {
        //     // 获取参数中数据
        //      const {name, tel, color} = mes
        //     let style = {"color":color, "display":"flex", "flexDirection":"column", "justifyContent":"center"}
        //     return (
        //         <div style={style}>
        //             <div>{name}</div>
        //             <div>{tel}</div>
        //         </div>
        //     )
        // }
        this.state = {
            class: '人类',
            clickNum : 0
        }
    }
    render(){
        this.check = (mes) => {
            // 获取参数中数据
             const {name, tel, color} = mes
            let style = {"color":color, "display":"flex", "flexDirection":"column", "justifyContent":"center"}
            return (
                <div style={style}>
                    <div>{name}</div>
                    <div>{tel}</div>
                </div>
            )
        }
        return (
            // 直接传入props到构造方法中
            <div>{this.check(this.props)}</div>
        )
    }
    
}

export default User