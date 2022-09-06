import { useState } from 'react'
import CalcInput from './components/CalcInput/CalcInput';
import Buttons from './components/Buttons/Buttons';

function App() {

const [ result, setResult ] = useState("");

  const addItem = (e: any) => {
    setResult(result.concat(e.target.name))
  } 

  const clear = () => {
    setResult("")
  }

  const backspace = () => {
    setResult(result.slice(0, -1))
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (err) {
      setResult("Error")
      console.log(err)
    }
  }

  return (
    <>
      <div className="app-container">
        <CalcInput 
          result={result} 
        />
        <Buttons 
          addItem={addItem} 
          clear={clear} 
          backspace={backspace} 
          calculate={calculate} 
        />
      </div>
    </>
  )
}

export default App;
