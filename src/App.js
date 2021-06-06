import {useState} from 'react';
import './App.css';

function App() {

  const [sonando, setSonando] = useState('')

  const notas = [
    {
      nombre: 'RED',
      link: 'https://www.wordreference.com/audio/en/uk/general/en070562.mp3',
      sostenido: true,
      colorfondo:"red"
    },
    {
      nombre: 'YELLOW',
      link: 'https://www.wordreference.com/audio/en/uk/general/en099842.mp3',
      sostenido: true,
      colorfondo:"yellow"
    },
    {
      nombre: 'BLUE',
      link: 'https://www.wordreference.com/audio/en/uk/general/en009029.mp3',
      colorfondo:"blue"
    },
    {
      nombre: 'BLACK',
      link: 'https://www.wordreference.com/audio/en/uk/general/en008416.mp3',
      sostenido: true,
      colorfondo:"black"
    },
    {
      nombre: 'WHITE',
      link: 'https://www.wordreference.com/audio/en/uk/general/en097977.mp3',
      sostenido: true,
      colorfondo:"white"
    },
    {
      nombre: 'BROWN',
      link: 'https://www.wordreference.com/audio/en/us/us/en011136.mp3',
      sostenido: true,
      colorfondo:"brown"
    },
    {
      nombre: 'GREEN',
      link: 'https://www.wordreference.com/audio/en/us/us/en040085.mp3',
      colorfondo:"green"
    },
    {
      nombre: 'PURPLE',
      link: 'https://www.wordreference.com/audio/en/us/us/en068363.mp3',
      sostenido: true,
      colorfondo:"purple"
    },
  ]

  const handleClick = (nota) => {
    setSonando(nota.nombre)
    const sonido = new Audio(nota.link)
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
