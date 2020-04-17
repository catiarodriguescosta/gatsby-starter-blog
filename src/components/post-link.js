import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Card = styled.article`
  display: grid;
  background: white;
  box-shadow: 0 0 10px #d5d5d5;
  overflow: hidden;
  line-height: 1.5;
  transition: 0.25s;
  &:hover{
    box-shadow: 0 0 30px #d5d5d5;
  }
  &:hover .post-link {
    color: $primary-color;
  }
  > a img {
    display: block;
  }
  > div {
    padding: 24px;
  }
  > h5:first-child {
    margin: 0 0 0.5rem 0;
  }
  .post-title {
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
  }
  .post-meta {
    text-align: center;
    font-weight: 300;
    margin-bottom: 0;
  }
  .post-link {
    color: #333;
    text-decoration: none;
  }
}
`

const PostLink = ({ post }) => (
  <Card>
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <div class="o-flex-media  o-flex-media--1by1">
          <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} class="o-flex-media__item  o-img  o-img--cover lazyloaded"/>
        </div>
      )}
    </Link>
    <div>
      <h5 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h5>
      <p class="post-meta">{post.frontmatter.date}</p>
    </div>
  </Card>
)
export default PostLink