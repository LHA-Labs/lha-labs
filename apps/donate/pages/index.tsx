import { Box } from '@mui/material';
import Welcome_view from '../components/welcome';
import About_us from '../components/about_us';

export function Index() {
  // const { formatMessage } = useIntl();
  // const { activeLanguage, languageDispatch } = useLanguage();
  return (
    <Box sx={{ padding: 1.5 }}>
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
    </Box>
  );
}

export default Index;
