// App.jsx
import React from "react";
import "./App.css";
import UserCard from './components/UserCard/UserCard'

class App extends React.Component {
  render() {
    // 如果参数为一个JS变量就要使用{}括起来
    let value = {'name':'Didnelpsun', 'tel':'139959446' ,'color':'red', 'backColor': 'green'}
    // 请一定注意你子组件获取的prop是一个对象，必须把数据提取出来，根据对应属性
    return <div className="App"><UserCard {...value} ></UserCard></div>;
  }
}

export default App;
