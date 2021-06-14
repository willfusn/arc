import React from 'react';
import styled from 'styled-components'
import { palette, font } from 'styled-theme'
import { Blockquote, Heading } from 'components'
import Fade from 'react-reveal/Fade';
import makeCarousel from 'react-reveal/makeCarousel';

const StyledHeading = styled(Heading)`
  text-align: center;
  font-family: ${font('primary')};
  color: ${palette('primary', 2, true)};
  font-weight: 600;
  font-size: 1.0rem;
`
const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  > * {
    width: calc(33% - 3rem);
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
`
const StyledFeature = styled(Blockquote)`
  margin: 1rem;
  @media screen and (max-width: 640px) {
    margin: 0;
  }
`

const Container = styled.div`
  position: relative;
  overflow: hidden;
  left: 10%;
  width: 100%;
  height: 150px;
`;

const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

const Testimonials = ({ ...props }) => {
    return(
        <div {...props}>
            <StyledHeading>Testimonials</StyledHeading>
            <Carousel defaultWait={3000} >
                <Fade right>
                <Grid >
                    <StyledFeature cite="Bob">
                        This is so complicated
                    </StyledFeature>
                    <StyledFeature cite="Larry">
                        I really don’t recommend this
                    </StyledFeature>
                    <StyledFeature cite="Curly">
                        What were they thinking?
                    </StyledFeature>
                </Grid>
                </Fade>
                <Fade right>
                <Grid>
                    <StyledFeature cite="Thor">
                        Is that the best you can do
                    </StyledFeature>
                    <StyledFeature cite="Bruce">
                        Hulk smash!! 
                    </StyledFeature>
                    <StyledFeature cite="Yondu">
                        I’m Mary Poppins, y’all! 
                    </StyledFeature>
                </Grid>
                </Fade>
            </Carousel>
        </div>
    )
}
export default Testimonials
