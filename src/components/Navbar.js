import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const NavbarBrand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavbarMenu = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavbarMenuItem = styled.li`
  margin-left: 1rem;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #ccc;
    }
  }
`;

const Navbar = () => (
    <NavbarContainer>
        <NavbarBrand>CRUDL</NavbarBrand>
        <NavbarMenu>
            <NavbarMenuItem>
                <li><Link to="/">Главная</Link></li>
            </NavbarMenuItem>
            <NavbarMenuItem>
                <li><Link to="/news">Список новостей</Link></li>
            </NavbarMenuItem>
        </NavbarMenu>
    </NavbarContainer>
);

export default Navbar;