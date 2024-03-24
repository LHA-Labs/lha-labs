import { LHALabsThemeProvider } from '@lha-labs/theme';
import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../public/styles/global.scss';
import '../public/styles/notifGlobalStyles.css';
import '../public/styles/reset.css';
import '../public/styles/root.scss';
import DonateLayout from '../components/layout/Index';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <LHALabsThemeProvider defaultLang="en">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Head>
          <title>{"Let's Help Association - LHA"}</title>
        </Head>
        <Box component="main" className="app">
          <DonateLayout>
            <Component {...pageProps} />
          </DonateLayout>
        </Box>
      </LocalizationProvider>
    </LHALabsThemeProvider>
  );
}

export default CustomApp;
