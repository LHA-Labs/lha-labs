import { Box } from '@mui/material';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import AboutUs from '../../pages/AboutUs/AboutUs';

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
        rowGap: 1,
      }}
    >
      <Header />
      <AboutUs />
      {/* {children} */}
      <Footer />
    </Box>
  );
}
