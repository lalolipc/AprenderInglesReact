import {useState} from 'react';
import './App.css';

function App() {

  const [sonando, setSonando] = useState('')

  const notas = [
    {
      nombre: 'RED',
      link: require('./notes/red.mp3'),
      sostenido: true,
      colorfondo:"red"
    },
    {
      nombre: 'YELLOW',
      link: require('./notes/yellow.mp3'),
      sostenido: true,
      colorfondo:"yellow"
    },
    {
      nombre: 'BLUE',
      link: require('./notes/blue.mp3'),
      colorfondo:"blue"
    },
    {
      nombre: 'BLACK',
      link: require('./notes/black.mp3'),
      sostenido: true,
      colorfondo:"black"
    },
    {
      nombre: 'WHITE',
      link: require('./notes/white.mp3'),
      sostenido: true,
      colorfondo:"white"
    },
    {
      nombre: 'BROWN',
      link: require('./notes/brown.mp3'),
      sostenido: true,
      colorfondo:"brown"
    },
    {
      nombre: 'GREEN',
      link: require('./notes/green.mp3'),
      colorfondo:"green"
    },
    {
      nombre: 'PURPLE',
      link: require('./notes/purple.mp3'),
      sostenido: true,
      colorfondo:"purple"
    },
  ]

  const handleClick = (nota) => {
    setSonando(nota.nombre)
    const sonido = new Audio(nota.link.default)
    sonido.play()
  }

  setTimeout(()=>{
    setSonando('')
  },1500)

  return (
    <div>
      <div className="titulo">
        <h1>Colores en ingles 😀</h1>
       

{ sonando && <h3> {sonando}</h3>}
      </div>
      <div className="container">
        {notas.map(nota => (
          <div
            key={Math.random() * 1000}
            className={`nota ${sonando === nota.nombre && 'sonando'}`}
            id={nota.colorfondo}
            onClick={() => handleClick(nota)}
          >
            
          </div>
        ))}

        
      </div>
    </div>
  );
}

export default App;
