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
