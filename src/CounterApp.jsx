import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ( {value} ) => {

  const [ counter, setCounter ] = useState( value );

  const handleSubtract = () => {
    setCounter( counter - 1 );
  }

  const handleAdd = () => {
    setCounter( counter + 1 );
    // setCounter( (c) => c + 1 );
  }

  const handleReset = () => {
    setCounter( value );
  }

  return (
    <>
    <h1>CounterApp</h1>
    <h2 data-testid="counter-value" > { counter } </h2>
    <button data-testid="substract-1" onClick={handleSubtract}>-1</button>
    <button data-testid="add-1" onClick={handleAdd}>+1</button>
    <button data-testid="reset" onClick={handleReset}>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
  value: 0,
}