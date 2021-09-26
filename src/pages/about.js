import React from 'react';

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'

const AboutIndex = () => {
  return (
    <Layout>
      <Seo title="About me" />
      <Hero title="About me" />
    </Layout>
  );
}

export default AboutIndex;