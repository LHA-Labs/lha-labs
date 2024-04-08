import { getFirstTwoNameInitials } from '@lha-labs/utils';
import { Avatar, Box, Typography } from '@mui/material';
import { Member } from '../../services/team';

interface TeamMember extends Member {
  onSelect: () => void;
  isActive: boolean;
}
export default function TeamMember({
  fullname,
  imageRef,
  isActive,
  onSelect,
}: TeamMember) {
  return (
    <Box
      onClick={onSelect}
      sx={{
        cursor: 'pointer',
        borderRadius: '100%',
        boxShadow: isActive ? '0px 0px 6px 0px #CE0000' : 'none',
        '&:hover': {
          boxShadow: '0px 0px 6px 0px #CE0000',
          transition: '0.3s',
        },
        position: 'relative',
        '&:hover p': {
          display: 'grid',
          transition: '0.3s',
        },
      }}
    >
      <Typography
        variant="body2"
        sx={{
          display: isActive ? 'grid' : 'none',
          position: 'absolute',
          zIndex: 2,
          backgroundColor: 'black',
          opacity: '0.62',
          height: '100%',
          borderRadius: '100%',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          fontWeight: 700,
        }}
      >
        {fullname}
      </Typography>
      <Avatar
        src={imageRef}
        alt={fullname}
        sx={{
          height: '100px',
          width: '100px',
          border: '1px solid var(--primary)',
        }}
      >
        {getFirstTwoNameInitials(fullname)}
      </Avatar>
    </Box>
  );
}
