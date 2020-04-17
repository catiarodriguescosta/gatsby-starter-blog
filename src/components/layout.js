import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
//import 'prismjs/themes/prism-okaidia.css';
import styled from "styled-components";
import '../styles/global.scss';


const Header = styled.header`
  position: fixed;
  top: 30px;
  right: 40px;
  left: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`
const HeaderSiteTitle  = styled.h1`
  font-family: "pacifico";
  font-size: 30px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`


export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <Header>
        <HeaderSiteTitle>
          <Link to="/">a few syns a day</Link>
        </HeaderSiteTitle>
        <Navigation />
      </Header>
      {/* <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header> */}
      {children}
      <footer className="site-footer">
        <p>&copy; 2020 Cátia Costa, Built with React <span role="img" aria-label="love">❤️</span></p>
      </footer>
    </div>
  )
}