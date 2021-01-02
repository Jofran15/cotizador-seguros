import Header from './Components/Header'
import styled from "@emotion/styled";
import Formulario from './Components/Formulario'
import React, { useState } from "react";


const Contenedor=styled.div`
max-width: 600px;
margin:0 auto;
`;
const ContenedorFormulario=styled.div`
background-color:#FFF;
padding:3rem;
`;



function App() {

  const [resumen, guardarResumen] = useState({})

  return (
    <Contenedor>
  
      <Header
      titulo='Cotizador de seguros'
      />
      <ContenedorFormulario>
        
        <Formulario
        guardarResumen={guardarResumen}

        />

      </ContenedorFormulario>
      

      </Contenedor>
  );
}

export default App;
