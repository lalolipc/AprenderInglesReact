  const Animal=(props)=>{
    //destructuracion un objeto dentro de otro
    const {animal:{nombre,img}}=props;
    return (
        <section className="product">
          <img src={img} alt={nombre} />
          
      </section>
    );
};
export default Animal;