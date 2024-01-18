import { useState } from "react"


function App() {
  // let counter=5
  let [counter,setCounter]=useState(15)

  const addValue=()=>{
    if(counter <20){
      counter=counter+1
      setCounter(counter)
    }else{
      setCounter(counter)
    }
    
    // console.log(counter)
  }
  const removeValue=()=>{
    // console.log(counter)
    if(counter >0){
      counter=counter-1
      setCounter(counter)

    }else{
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button onClick={removeValue}>
        remove Value</button>
      
    </>
  )
}

export default App
