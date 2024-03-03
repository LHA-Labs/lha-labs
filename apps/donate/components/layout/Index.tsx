import { Box } from '@mui/material';
import Footer from './Footer/Footer';
import Header from './Header/Header';

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
      {children}
      <Footer />
    </Box>
  );
}