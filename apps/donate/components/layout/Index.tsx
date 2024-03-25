import { Box } from '@mui/material';
import Footer from './Footer/Footer';
import Header from './Header/Header';
// import AboutUs from '../../pages/AboutUs/AboutUs';
// import OurPartners from '../../pages/OurPartners/OurPartners';
import Donate from '../../pages/Donate/Donate';
export default function DonateLayout({ children }: { children: JSX.Element }) {
  /* TODO: this function will receive
    the header, footer and makeof it the layout,
    such that other components just load into it
  */
  return (
    <Box
      sx={{
        minHeight: '100svh',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
      }}
    >
      <Header />
      {/* <AboutUs /> */}
      {/* <OurPartners /> */}
      <Donate />
      {/* {children} */}
      <Footer />
    </Box>
  );
}
