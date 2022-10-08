import React from 'react'
import MyComponent from './MyComponent'

const FirstComponent = () => {
  return (
    <div>
        <h1>FirstComponent</h1>
    <h2>Meu First component</h2>
    <MyComponent />{/*Componente dentro de componente */}

    </div>
  )
}

export default FirstComponent