import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import HeroImg from '../images/hero.jpg'


const Hero = styled.div`
    background: url(${HeroImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: columns;
    justify-content: center;
    align-items: center;
`
const HeroContent = styled.div`
    display: flex;
    flex-direction : column;
    align-items: center;
    justify-content: center;
`
const HeroHeadline  = styled.h2`
  font-family: "abril Fatface";
  font-size: 60px;
  color: white;

`
const HeroLogo = styled.div`
    font-family: "pacifico";
    font-size: 30px;
    color: white;
`



export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (

      <Hero>
        <HeroContent>
            <HeroLogo>
                a few syns a day...
            </HeroLogo>
            <HeroHeadline>
                keeps your old habits away!
            </HeroHeadline>
        </HeroContent>
      </Hero>
    )}
  />
)