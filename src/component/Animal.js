  const Animal=(props)=>{
    //destructuracion un objeto dentro de otro
    const {animal:{nombre,img}}=props;
    return (
        <section className="product">
          <img src={img} alt={nombre} className="tamAnimal"/>
          
      </section>
    );
};
export default Animal;