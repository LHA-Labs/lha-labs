import { getFirstTwoNameInitials } from '@lha-labs/utils';
import { Avatar, Box, Typography } from '@mui/material';
import { Representative } from './OurSponsorsSection';

export default function RepresentativeCard({
  imageRef,
  name,
  title,
}: Representative) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        alignItems: { laptop: 'start', mobile: 'center' },
        gap: '12px',
      }}
    >
      <Avatar src={imageRef} alt={name} sx={{ height: '75px', width: '75px' }}>
        {getFirstTwoNameInitials(name)}
      </Avatar>
      <Box
        sx={{
          display: 'grid',
          rowGap: 1,
        }}
      >
        <Typography variant="h3" sx={{ color: '#333333', padding: 0 }}>
          {name}
        </Typography>
        <Typography variant="h5" sx={{ color: '#A50000', padding: 0 }}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
