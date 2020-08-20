// App.jsx
import React from 'react';
import './App.css';

function App() {
  const username = 'Didnelpsun'
  const username2 = 'Reactjs'
  let check = (state) => {
    if (state>0) {
      return <div style={{'color':'red'}}>{username}</div>
    }
    else {
      return <div style={{'color':'aqua'}}>{username2}</div>
    }
  }
  return (
    <div className="App">
      {check(-1)}
    </div>
  )
}

export default App;