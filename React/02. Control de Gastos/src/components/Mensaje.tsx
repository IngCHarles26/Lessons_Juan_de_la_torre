interface Props{
  message: string,
  tipo: string,
}

function Mensaje(props:Props) {
  const {message,tipo} = props;
  return ( 
    <div className={`alerta ${tipo}`}>
      {message}
    </div>
  );
}

export default Mensaje;