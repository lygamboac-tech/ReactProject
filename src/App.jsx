import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import myPhoto from './assets/images.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <p className="label">PORTFOLIO</p>
           <img src={myPhoto} alt="mi foto" />
          <h1>My portfolio</h1>
          <p>Aprendiendo React, un componente a la vez.</p>
          <div>
            <span className="badge">React</span>
            <span className="badge">JavaScript</span>
            <span className="badge">CSS</span>
          </div>
        </div>
        
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        />
        
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
