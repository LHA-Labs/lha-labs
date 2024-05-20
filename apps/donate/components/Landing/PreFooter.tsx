import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

export default function PreFooter() {
  const { formatMessage } = useIntl();
  const { push } = useRouter();
  return (
    <Box
      sx={{
        padding: { mobile: '30px 0', tablet: '103px 0' },
        gap: { mobile: '32px', tablet: '24px' },
        background: "url('/assets/landing_cta_bg.png')",
        boxShadow: 'inset 0 0 0 2000px rgba(165, 0, 0, 0.45)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'grid',
        justifyItems: 'center',
        alignContent: 'center',
        height: '428px',
      }}
    >
      <Typography
        sx={{
          padding: { mobile: 0, tablet: '29px 0' },

          color: '#FFF',
          textAlign: 'center',
          fontFamily: 'MV Boli',
          fontSize: { mobile: '36px', tablet: '48px' },
          fontWeight: 400,
          lineHeight: '45.5px',
          width: { mobile: '100%', laptop: '50%' },
        }}
      >
        {formatMessage({ id: 'preFooterMessage' })}
      </Typography>
      <Button
        size="large"
        color="inherit"
        variant="contained"
        disableElevation={false}
        onClick={() => push('/join-us')}
      >
        {formatMessage({ id: 'joinUs' })}
      </Button>
    </Box>
  );
}
