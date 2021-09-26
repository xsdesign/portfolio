import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <div className={styles.articleList}>
        {posts.map((post) => {
          return (
            <section key={post.slug}>
              <Link to={`/blog/${post.slug}`} className={styles.imageLink}>
                <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
              </Link>
              <div className={styles.text}>
                <div className={styles.subtitle}>{post.subtitle}</div>
                <Link to={`/blog/${post.slug}`} className={styles.titleLink}>
                  <div className={styles.title}>{post.title}</div>
                </Link>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.description.childMarkdownRemark.html,
                  }}
                />
                <Link to={`/blog/${post.slug}`} className={styles.viewLink}>
                  <div className={styles.view}>
                    <span>View case study</span>
                    <span className={styles.stylableButton}>
                      <svg data-bbox="20 90.291 159.997 20.709" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" data-type="shape">
                        <g>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M165.881 90.685l13.898 18.563a1.096 1.096 0 01-.877 1.752H21s-1 0-1-1 1-1 1-1l155.298-.005a.39.39 0 00.312-.625L164.091 92c-.484-.831.241-1.484.241-1.484s.92-.605 1.549.169z"></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </section>
          )
        })}
      </div>
    </Container>
  )
}

export default ArticlePreview
