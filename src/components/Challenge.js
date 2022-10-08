import React from 'react'

const Challenge = () => {
const a = 10
const b = 20
const handleClickSum = () => {
    console.log(a + b)
}
    return (
    <div>
       <h1>{a}, {b}</h1>
       <button onClick={handleClickSum}>Clique aqui para fazer a soma!</button>
    </div>
  )
}

export default Challenge