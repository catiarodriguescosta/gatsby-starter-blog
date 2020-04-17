/* import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'

const HeroHeader = styled.div`
  
`
const HeroHeadline  = styled.h2`
  font-family: $font-primary;
`
const HeroIntro = styled.div`

`
const HeroIntroText = styled.p`
  font-family: $secondary-font;
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

      <HeroHeader>
        <HeroHeadline>{data.site.siteMetadata.home.title}</HeroHeadline>
        <HeroIntro>
          <HeroIntroText>
            {data.site.siteMetadata.home.description}
          </HeroIntroText>
        </HeroIntro>
        <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
      </HeroHeader>

      // <div className="hero-header">
      //   <div className="headline">{data.site.siteMetadata.home.title}</div>
      //   <div className="primary-content">
      //     <p>{data.site.siteMetadata.home.description}</p>
      //   </div>
      //   <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
      // </div>
    )}
  />
) */