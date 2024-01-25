
interface Props{
  presupuesto: number
}

function ControlPres(props:Props) {
  const {presupuesto} = props;
  
  

  return ( 
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica Aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> {presupuesto.toLocaleString('en-US',{style: 'currency',currency: 'USD'})}
        </p>
        <p>
          <span>Disponible: </span> {presupuesto.toLocaleString('en-US',{style: 'currency',currency: 'USD'})}
        </p>
        <p>
          <span>Gastado: </span> {presupuesto.toLocaleString('en-US',{style: 'currency',currency: 'USD'})}
        </p>
      </div>
    </div>
  );
}

export default ControlPres;