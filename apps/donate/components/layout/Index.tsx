import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

export default function DonateLayout({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        minHeight: '100svh',
        display: 'grid',
        gridTemplateRows: 'auto auto 1fr auto',
      }}
    >
      <Header />
      <Box height='80px' />
      {children}
      <Footer />
    </Box>
  );
}
