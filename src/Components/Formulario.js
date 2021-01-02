import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  diferenciaYear,
  diferenciaPrecio,
  diferenciaOrigen,
  obtenerPlan,
} from "../helper";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  --webkit-appearance: none;
`;
const InputRadio = styled.input`
  margin: 0 1rem;
`;
const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color.3s;
  margin-top: 2rem;
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;
const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;

const Formulario = ({guardarResumen}) => {
  //state para validacion del formulario
  const [error, guardarError] = useState(false);

  const [datos, guardarDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  //extraer valores del state
  const { marca, year, plan } = datos;
  //obtener informacion del formulario
  const ObtenerInformacion = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
    guardarError(false);
  };

  //Handle submit
  const cotizar = (e) => {
    e.preventDefault();
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
  };

  //costo base
  const costoBase = 2000;

  //obtener diferencia de años
  const diferenciaAño = diferenciaYear(year);

  // por cada año restar el 3%

  const diferenciaCosto = diferenciaPrecio(costoBase, diferenciaAño);
  console.log(diferenciaCosto);

  //por origen(americano-15% asiatico-5% europeo30%)
  const diferenciaLugar = diferenciaOrigen(marca);
  console.log(diferenciaLugar);

  const incrementoPlan = obtenerPlan(plan);
  let resultado = parseFloat(
    diferenciaLugar * diferenciaCosto * incrementoPlan  ).toFixed(2);
  console.log(resultado);
  

  
 
  return (
    <div>
      <form onSubmit={cotizar}>
        {error ? <Error>Todos los campos son obligatorios</Error> : null}
        <Campo>
          <Label>Marca</Label>
          <Select name="marca" value={marca} onChange={ObtenerInformacion}>
            <option value="">-Seleccione-</option>
            <option value="americano">Americano</option>
            <option value="europeo">Europeo</option>
            <option value="asiatico">Asiatico</option>
          </Select>
        </Campo>

        <Campo>
          <Label>Año</Label>
          <Select name="year" value={year} onChange={ObtenerInformacion}>
            <option value="">-- Seleccione --</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
          </Select>
        </Campo>

        <Campo>
          <Label>Plan</Label>
          <InputRadio
            type="radio"
            name="plan"
            value="basico"
            checked={plan === "basico"}
            onChange={ObtenerInformacion}
          />{" "}
          básico
          <InputRadio
            type="radio"
            name="plan"
            value="completo"
            checked={plan === "completo"}
            onChange={ObtenerInformacion}
          />{" "}
          completo
        </Campo>

        <Boton type="submit">Cotizar</Boton>
      </form>
    </div>
  );
};

export default Formulario;
