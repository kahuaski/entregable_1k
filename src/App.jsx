
import { useState } from 'react'
import './App.css'
import bd from "./bd/bd.json"
import ContainerIfon from './Componets/ContainerInfo'

const imgen=["bg","bg1","bg2","bg3"]
function App() {

  const getRadomItem=(listItems)=>{
  const ramdonIndex= Math.floor(Math.random() * listItems.length)
  return listItems[ramdonIndex]
  }
 const [quote, setquote] = useState(getRadomItem(bd))
 const [imagenbd, setimagen]=useState(getRadomItem(imgen))
 
 const handleNewquote=()=>{
 setquote(getRadomItem(bd))
 setimagen(getRadomItem(imgen))
 }
  
console.log(bd)
  return (
    <div className={`App ${imagenbd} `}>
  
     <ContainerIfon quote= {quote} handleNewquote={handleNewquote}  />
     
        
    </div>
  )
}

export default App
