import Form from 'components/Form/Form';
import Footer from 'components/Footer/Footer';
import { GlobalStyle } from 'constants/GlobalStyle';
import {
  Main,
  Section,
  Title,
  Box,
  Map,
  Img,
  Img2,
  MapBox,
} from './App.styled';
import img1 from '../../img/img1.svg';
import img2 from '../../img/img2.svg';

export const App = () => {
  return (
    <>
      <Main>
        <Section>
          <Box>
            <Img src={img1} alt="smile" />
            <Title>Reach out to us!</Title>
            <Form />
            <Img2 src={img2} alt="smile" />
          </Box>

          <MapBox>
            <Map>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3026.9512957302322!2d-73.869168!3d40.653004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25d0d941543b9%3A0x3c6058f7c99f77f7!2z0JPQtdC50YLRg9GN0Lkg0KHQtdC90YLQtdGA!5e0!3m2!1sru!2sua!4v1676547871150!5m2!1sru!2sua"
                allowfullscreen=""
                loading="lazy"
                width="500px"
                height="700px"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Map>
          </MapBox>
        </Section>
        <GlobalStyle />
      </Main>
      <Footer />
    </>
  );
};
