import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      &copy;2021 by Xin Su
    </div>
  </Container>
)

export default Footer
