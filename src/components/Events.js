import React from 'react'

const Events = () => {
    const handleClick = (e) => {
        console.log(e)
        console.log('Ativou evento papai!!')
    }
    return (
    <div>Events
        <div>
            <button onClick={handleClick}>Clique aqui rapidola!</button>

            <button onClick={() =>{console.log('Clicou pela segunda vez!')}}>Clique aqui!</button>
        </div>
    </div>
  )
}

export default Events