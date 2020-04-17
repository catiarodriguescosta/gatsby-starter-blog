import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 22px;
  list-style: none;
  display: flex;
  justify-content: flex-end;

  &:last-child {
    padding-right: 0;
  }
`

const NavItem = styled.li`
  padding: 10px;
`

export default (props) => (
  <Nav> 
    <NavItem><Link to="/about">ABOUT</Link></NavItem>
    <NavItem><Link to="/recipes">RECIPES</Link></NavItem>
    <NavItem><Link to="/tips">TIPS</Link></NavItem>
    <NavItem><Link to="/slimming-world">SLIMMING WORLD</Link></NavItem>
  </Nav>
)