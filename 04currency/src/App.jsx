import React,  { useState, useEffect } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState({})
  useEffect(() => {
     fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr.json`)
     .then(res => res.json())
     .then(setData(res[inr]))
     console.log("PPPP ", data);
 
  },[])
 
 
  return (
   <div>
    <h1>asasas</h1>
    <p>{data}</p>
   </div>
  )
}

export default App
