import React from 'react';
import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';

const Example = (props) => {
  return (
    <Form id="formulario">
      <FormGroup>
        <Label for="exampleEmail"><h3>Entre em contato conosco</h3></Label>
        
      </FormGroup>
      <FormGroup>
        <Label for="name">Nome</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Ex:José victor"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="jose@email.com"
        />
      </FormGroup>
    
      <FormGroup>
        <Label for="exampleNumber">Número</Label>
        <Input
          type="number"
          name="number"
          id="exampleNumber"
          placeholder="(38)123456789"
        />
      </FormGroup>
      
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button type="submit" style={{backgroundColor:"#BDECB6", border:"#BDECB6", color:"black"}}>Enviar</Button>
    </Form>
  );
}

export default Example;