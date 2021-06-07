import {useState} from 'react';
import './App.scss';
import Nav from './component/Nav';
import Animal from './component/Animal';
import animalinfo from './animalinfo';

function App() {

  const [sonando, setSonando] = useState('')
  
 

      const notas = [
    {
      nombre: 'RED',
      link: 'https://www.wordreference.com/audio/en/uk/general/en070562.mp3',
      sostenido: true,
      colorfondo:"red"
    },{
      
        nombre: 'ORANGE',
        link: 'https://www.wordreference.com/audio/en/us/us/en060094.mp3',
        sostenido: true,
        colorfondo:"orange"
      
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
    <div><Nav />

    <div >
   
      
     

      <main className="container">
      <div className="titulo">
            <div class="content">
  <div class="content__container">
   
  <p class="content__container__text">
      Colores
    </p>
    
    <ul class="content__container__list">
      <li class="content__container__list__item">English</li>
      <li class="content__container__list__item">Ingles</li>
    </ul>
  </div>
</div>


</div>  

      <div className="micolor"><h3>Presiona un botón  </h3>
</div>
      <div className="colorseleccionado">{ sonando && <h3> {sonando}</h3>}</div>   
     
      
        {notas.map(nota => (
          <div
            key={Math.random() * 1000}
            className={`nota ${sonando === nota.nombre && 'sonando'}`}
            id={nota.colorfondo}
            onClick={() => handleClick(nota)}
          >
          
          </div>
          
        ))}
        
        <div className="tituloAnimal">
            <div class="contentAnimal">
  <div class="contentAnimal__container">
   
  <p class="contentAnimal__container__text">
      Animales
    </p>
    
    <ul class="contentAnimal__container__list">
      <li class="contentAnimal__container__list__item">Español</li>
      <li class="contentAnimal__container__list__item">Ingles</li>
      <li class="contentAnimal__container__list__item">Ruso</li>
      <li class="contentAnimal__container__list__item">Chino</li>
    </ul>
  </div>
</div>


</div>  
<div className="micolor"><h3>Animales en 4 idiomas</h3></div>



      {animalinfo.map(animal =>(

<div
/*onClick={() => handleClick(animal)}*/

>
<div >
        <Animal 
        key={Math.random() * 1000}
        animal={animal}
/>
</div>

<div>

{animal.pronunciation.map(nota => (
  <div
    key={Math.random() * 1000}
    className={`btn ${sonando === nota.nombre }`}
    id={nota.colorfondo}
    onClick={() => handleClick(nota)}
  >
    <div className="textoBoton">{nota.texto}</div>
    <div className="idiomaBoton">idioma:</div>
    <div className="idiomaBoton">{nota.languague}</div>
  </div>
  
))}
</div>
</div>
    )
    )}
        
      </main>
    </div>
    </div>
  );
}

export default App;
