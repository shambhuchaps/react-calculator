import React, { useState } from 'react'

const Calc = () => {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value))
  }
  const clearDisplay = () => {
    setResult("");
  }

  const calculate = () => {
      setResult(eval(result).toString()); 
  }
  return (
    <div className='container my-5'>
      <div className="calculator card ">

        <input type="text" className="calculator-screen" placeholder='0' value={result} />

        <div className="calculator-keys">

          <button type="button" onClick={clickHandler} className="operator btn btn-info" value="+">+</button>
          <button type="button" onClick={clickHandler} className="operator btn btn-info" value="-">-</button>
          <button type="button" onClick={clickHandler} className="operator btn btn-info" value="*">&times;</button>
          <button type="button" onClick={clearDisplay} className="all-clear function btn btn-danger btn-sm" value="clear">AC</button>


          <button type="button" onClick={clickHandler} value="9" className="btn btn-light waves-effect">9</button>
          <button type="button" onClick={clickHandler} value="8" className="btn btn-light waves-effect">8</button>
          <button type="button" onClick={clickHandler} value="7" className="btn btn-light waves-effect">7</button>
          <button type="button" onClick={clickHandler} className="operator btn btn-info" value="/">&divide;</button>

          <button type="button" onClick={clickHandler} value="4" className="btn btn-light waves-effect">4</button>
          <button type="button" onClick={clickHandler} value="5" className="btn btn-light waves-effect">5</button>
          <button type="button" onClick={clickHandler} value="6" className="btn btn-light waves-effect">6</button>



          <button type="button" onClick={clickHandler} value="1" className="btn btn-light waves-effect">1</button>
          <button type="button" onClick={clickHandler} value="2" className="btn btn-light waves-effect">2</button>
          <button type="button" onClick={clickHandler} value="3" className="btn btn-light waves-effect">3</button>


          <button type="button" onClick={clickHandler} className="decimal function btn btn-secondary" value=".">.</button>
          <button type="button" onClick={clickHandler} value="0" className="btn btn-light waves-effect">0</button>
          <button type="button" onClick={clickHandler} className="operator btn btn-info" value="%">%</button>


          <button type="button" className="equal-sign operator btn btn-dark" value="=" onClick={calculate}>=</button>

        </div>
      </div>
    </div>
  )
}

export default Calc