import { getFirstTwoNameInitials } from '@lha-labs/utils';
import { Avatar, Box, Typography } from '@mui/material';
import { Member } from '../../services/team';
import MemberSocialIcon from './MemberSocialIcon';

export default function ActiveMember({
  fullname,
  imageRef,
  message,
  role,
  socials,
}: Member) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridAutoFlow: 'column',
        alignItems: 'center',
        gap: '50px',
        width: '55%',
      }}
    >
      <Avatar
        src={imageRef}
        alt={fullname}
        sx={{
          width: 246,
          height: 246,
          border: '1px solid #A50000',
        }}
      >
        {getFirstTwoNameInitials(fullname)}
      </Avatar>
      <Box
        sx={{
          display: 'grid',
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gap: 0.5,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: 'var(--primary)',
              paddingBottom: 0,
            }}
          >
            {fullname}
          </Typography>
          <Typography variant="h3" sx={{ color: '#333' }}>
            {role}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: 'var(--body)',
              fontWeight: 500,
              lineHeight: '28px',
              textAlign: 'justify',
            }}
          >
            {message}
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridAutoFlow: 'column',
              justifyContent: 'start',
              columnGap: 0.5,
            }}
          >
            {Object.keys(socials).map((key, index) => (
              <MemberSocialIcon key={index} link={socials[key]} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
