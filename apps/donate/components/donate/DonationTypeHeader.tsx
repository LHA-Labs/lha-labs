import { Box, Typography } from '@mui/material';

interface DonationTypeHeaderProps {
  position: number;
  title: string;
}
export default function DonationTypeHeader({
  position,
  title,
}: DonationTypeHeaderProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'center',
        gap: 1,
        justifySelf: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          backgroundColor: 'rgba(165, 0, 0, 0.10)',
          width: 'fit-content',
          padding: '11px 20px',
          borderRadius: '100%',
          color: 'var(--primary)',
        }}
      >
        {position}
      </Typography>
      <Typography
        variant="h2"
        sx={{ color: 'black', fontWeight: 700, textAlign: 'center' }}
      >
        {title}
      </Typography>
    </Box>
  );
}
