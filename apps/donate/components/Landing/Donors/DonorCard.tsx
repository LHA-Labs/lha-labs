import { getFirstTwoNameInitials } from '@lha-labs/utils';
import { Avatar, Box, Tooltip, Typography } from '@mui/material';
import { Donor } from './Donors';

function DonorCard({ name, image }: Donor) {
  return (
    <Tooltip arrow title={name} placement="top-start">
      <Box
        sx={{
          bgcolor: 'var(--background)',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          columnGap: 2,
          alignItems: 'center',
          borderRadius: '52px',
          padding: '10px',
          cursor: 'context-menu',
        }}
      >
        <Avatar
          src={image}
          alt={`Donor ${name}`}
          sx={{ height: '50px', width: '50px' }}
        >
          {getFirstTwoNameInitials(name)}
        </Avatar>
        <Typography
          variant="h4"
          color="var(--titleActive)"
          sx={{
            padding: 0,
            overflow: 'hidden',
            textWrap: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {name}
        </Typography>
      </Box>
    </Tooltip>
  );
}

export default DonorCard;
