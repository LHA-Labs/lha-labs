import { Box, Typography } from '@mui/material';
import Image from 'next/image';

function InfoBienfaiteur({
  name,
  image,
  profession,
}: {
  name: string;
  image: string;
  profession: string;
}) {
  return (
    <Box
      sx={{
        bgcolor: 'var(--background)',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '52px',
        padding: '10px 20px',
        gap: 2,
      }}
    >
      <Image
        src={image}
        alt=""
        width={50}
        height={50}
        style={{ borderRadius: '50%', objectFit: 'cover' }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h4" color="var(--titleActive)">
          {name}
        </Typography>
        <Typography variant="body1">{profession}</Typography>
      </Box>
    </Box>
  );
}

export default InfoBienfaiteur;
