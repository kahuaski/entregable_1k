import React from 'react'
import Button from '../Button'
import "./style/Stylecontainer.css"

     
const ContainerIfon = ({quote,handleNewquote}) => {
  return (
    <div>
    
    <section className="container_title">
     <h1>Galletas de la Fortuna</h1>
     <Button  handleNewquote={handleNewquote} />
     <article className='container_phrase'>
     <p>{quote.phrase}</p>
     </article>
     <article>
     <h4>Fuente:{quote.author}</h4>
     </article>
     </section>
    </div>
  )
}

export default ContainerIfon