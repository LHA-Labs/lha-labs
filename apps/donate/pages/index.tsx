import { Box } from '@mui/material';
import Welcome_view from '../components/welcome';
import About_us from '../components/about_us';
import OurCampaigns from '../components/campaigns';
import Gallery_view from '../components/gallery/inde';
import OurBienfaiteurs from '../components/bienfaiteurs';

export function Index() {
  // const { formatMessage } = useIntl();
  // const { activeLanguage, languageDispatch } = useLanguage();
  return (
    <Box>
      {/* <Button
        variant="contained"
        color="primary"
        onClick={() =>
          languageDispatch({
            type: activeLanguage === 'en' ? 'USE_FRENCH' : 'USE_ENGLISH',
          })
        }
      >
        Change Language: {activeLanguage}
      </Button>
      <Typography variant="h1"> {formatMessage({ id: 'Hello' })}</Typography> */}
      <Welcome_view />
      <About_us />
      <OurCampaigns />
      <Gallery_view />
      <OurBienfaiteurs />
    </Box>
  );
}

export default Index;
