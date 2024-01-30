import React, { useState } from "react";
import styled from '@emotion/styled';
import { Moneda } from "../data/interfaces";


const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size:  24px;
  font-weight: 700;
  margin: 15px 0;
`
const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 12px;
  border-radius: 10px;

`

function useSelectMonedas(label:string,opciones:Moneda[]) {

  const [state, setState] = useState<string>('');

  const SelectMonedas = ()=> {
    return(
      <>

        <Label htmlFor="">{label}</Label>

        <Select name="" id="" value={state} onChange={(e)=>setState(e.target.value)}>
          <option value="">Seleccione</option>
          {opciones.map(({id,name},ix)=>
            <option key={id + 'key' + ix}
                    value={id}>
                      {name}
                    </option>)}

        </Select>
      </>
    )
  }
  return [SelectMonedas, state]
}

export default useSelectMonedas;