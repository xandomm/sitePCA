import React,{Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import logocentral from './logocentral.png';
import AOS from 'aos';
import Medias from "./AOS";

class Main extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }
  render(){
  return (
    <div className="jumbotron" >
      <Jumbotron id="carne">
        <img src={logocentral}/>
        <div className="xerloq">
        <h1 className="display-3">Somos a referência. </h1>
        <p className="lead">Trabalhe com os melhores do noroeste mineiro.</p>
        
        <p>Saiba mais sobre nossa empresa.</p>
        <p className="lead">
          <Button style={{backgroundColor:"#BDECB6", border:"#BDECB6", color:"black"}}>Saiba mais</Button>
        </p></div>
      </Jumbotron>
      <div className="carse2" data-aos="fade-down-right"><h1 style={{color:"#80cee1"}}>Faça um orçamento totalmente gratuito</h1></div>
      <div className="carse3" data-aos="zoom-in-up"><Medias/></div>
      
    </div>
  );
};}

export default Main;