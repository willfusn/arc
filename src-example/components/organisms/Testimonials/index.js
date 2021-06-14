import React from 'react';
import styled from 'styled-components'
import { palette, font } from 'styled-theme'
import { Heading } from 'components'


const StyledHeading = styled(Heading)`
  text-align: center;
  font-family: ${font('primary')};
  color: ${palette('primary', 2, true)};
  font-weight: 600;
  font-size: 1.0rem;
`

const Testimonials = ({ ...props }) => {
    return(
        <div {...props}>
            <StyledHeading>Testimonials</StyledHeading>
        </div>
    )
}
export default Testimonials
