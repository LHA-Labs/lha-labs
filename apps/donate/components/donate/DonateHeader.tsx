import { Box, Typography } from '@mui/material';

export default function DonateHeader() {
  return (
    <Box
      sx={{
        height: '298px',
        background: "url('/assets/donate_header_bg.png')",
        boxShadow: 'inset 0 0 0 2000px rgba(165, 0, 0, 0.45)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'grid',
        gridTemplateRows: 'auto auto',
        alignItems: 'center',
        justifyItems: 'center',
        alignContent: 'center',
        rowGap: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: 'white',
          padding: 0,
          lineHeight: '55.5px',
          textAlign: 'center',
          fontSize: { mobile: '36px', tablet: '48px' },
          width: { mobile: '100%', laptop: '50%' },
        }}
      >
        {'Operation Sourire aux orphelins Acte 2'}
      </Typography>
      <Typography
        sx={{
          color: 'white',
          fontSize: '20px',
          fontWeight: 600,
          textAlign: 'center',
          lineHeight: '24px',
          letterSpacing: '-0.35px',
        }}
      >
        1 Orphelin 1 Pack Scolaire
      </Typography>
    </Box>
  );
}
