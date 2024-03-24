import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Donor } from './Donors';

function DonorCard({ name, image }: Donor) {
  return (
    <Box
      sx={{
        bgcolor: 'var(--background)',
        height: '80px',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        columnGap: 2,
        alignItems: 'center',
        borderRadius: '52px',
        padding: '10px 20px',
      }}
    >
      <Image
        src={image}
        alt={`Donor ${name}`}
        width={50}
        height={50}
        style={{ borderRadius: '50%', objectFit: 'cover' }}
      />
      <Typography variant="h4" color="var(--titleActive)" sx={{ padding: 0 }}>
        {name}
      </Typography>
    </Box>
  );
}

export default DonorCard;
