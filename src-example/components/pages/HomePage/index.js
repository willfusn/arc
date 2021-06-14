// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import {
  PageTemplate, Header, Hero, Footer, FeatureList, Testimonials
} from 'components'

const HomePage = () => {
  return (
    <PageTemplate
      header={<Header />}
      hero={<Hero />}
      footer={<Footer />}
    >
      <FeatureList />
      <Testimonials />
    </PageTemplate>
  )
}

export default HomePage
