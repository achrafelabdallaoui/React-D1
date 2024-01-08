/* eslint-disable react/jsx-no-target-blank */


import './App.css'
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/imageComponent'

function App() {
const url = "https://picsum.photos/200/300"
const tagAlt = "random photo"
  return (
    <>
      
      <h1>esesrcizio React</h1>
      <div className="card">
        <ButtonComponent buttonText="sono un buttone che non funzia" bgColor="red"/>
        <br/>
        <ImageComponent url={url} tagAlt={tagAlt}/>
        
      </div>
     
    </>
  )
}

export default App
