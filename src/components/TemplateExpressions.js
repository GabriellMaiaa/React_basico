import React from 'react'

const TemplateExpressions = () => {
const name = 'Gabriel'
const cidade = 'Manaus - AM'

    return (
        <div>
            <h1>Olá, tudo bem com você {name}?</h1>
            <h2>Pelo que eu sei vocÊ tem {9 * 2} anos, não é?</h2>
            {console.log('Isso aqui é um teste')}
           <p>{console.log('Viu bobão!!!!')}</p>
           <h2>Seu nome é {name}, e vocÊ mora na cidade de {cidade}</h2>
            
        </div>
    )
}

export default TemplateExpressions