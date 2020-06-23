import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Headers = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="headers">
      
      <Navbar style={{backgroundColor:"#BDECB6"}} light expand="md">
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/">Página inicial</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contato">Contato</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Quem somos nós</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText><h5>PCA Ambiental</h5></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Headers;