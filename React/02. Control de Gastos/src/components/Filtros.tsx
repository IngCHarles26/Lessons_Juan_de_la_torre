
interface Props{
  filtros: string,
  setFiltros: React.Dispatch<React.SetStateAction<string>>,
}

function Filtros(props:Props) {
  const {filtros, setFiltros} = props;

  return ( 
    <div className="filtros sombra contenedor">
      <form action="">
        <div className="campo">
          <label>Filtrar Gastos</label>
          <select value={filtros}
                  onChange={e=>setFiltros(e.target.value)} >
            <option value="">Todos los Gastos</option>
            <option value="Ahorro">Ahorro</option>
            <option value="Comida">Comida</option>
            <option value="Casa">Casa</option>
            <option value="Gastos">Gastos Varios</option>
            <option value="Ocio">Ocio</option>
            <option value="Salud">Salud</option>
            <option value="Suscripciones">Suscripciones</option>
          </select>
        </div>
      </form>

    </div>
  );
}

export default Filtros;