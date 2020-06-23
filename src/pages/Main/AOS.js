import React from 'react';
import { Media } from 'reactstrap';
import imagemmamae from "./imagemmamae.jpg";
const Medias = () => {
  return (
    <Media id="medias">
      <Media left href="#">
        <img src={imagemmamae}/>
      </Media>
      <Media body>
        <Media heading>
          Alexandrina Machado
        </Media>
        &nbsp;&nbsp;&nbsp;Geóloga responsável pela empresa, formada desde de 1985 pela Universidade Federal do Mato Grosso tem sua carreira consolidada na área de hidrogeologia
      </Media>
    </Media>
  );
};

export default Medias;