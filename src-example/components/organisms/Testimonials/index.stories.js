import React from 'react'
import { storiesOf } from '@storybook/react'
import { Testimonials } from 'components'

storiesOf('FeatureList', module)
  .add('default', () => (
    <Testimonials />
  ))
