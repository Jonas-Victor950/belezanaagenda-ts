import React from "react";

import fotoprofissional from "../../assets/fotoprofissional.png";
import Relogio from "../../assets/relogio.png";
import { ProfissionalStyle } from "./Styles";

function Profissional({ nome, profissao }: any) {
  return (
    <ProfissionalStyle>
      <div>
        <img alt="Imagem do Profissional" src={fotoprofissional} />
        <div>
          <span>{nome}</span>
          <p>{profissao}</p>
        </div>
        <img alt="Relogio" src={Relogio} />
      </div>
    </ProfissionalStyle>
  );
}

export default Profissional;
