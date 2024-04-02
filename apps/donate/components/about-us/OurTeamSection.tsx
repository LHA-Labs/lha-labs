import { Box } from '@mui/material';
import { Member, useTeam } from '../../services/team';
import SectionHeader from '../Landing/SectionHeader';
import ActiveMember from './ActiveMember';

export default function OurTeamSection() {
  const members: Member[] = useTeam();
  const activeMember = members[0];

  return (
    <Box
      sx={{
        display: 'grid',
        justifyItems: 'center',
        rowGap: 4,
        padding: { mobile: '0 32px', laptop: '0 118px' },
      }}
    >
      <SectionHeader title={'ourTeam'} subtitle={'ourTeamSubtitle'} />
      <ActiveMember {...activeMember} />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '18px',
        }}
      >
        {/* {members.map(
          (
            {
              name,
              role,
              description,
              linkFacebook,
              linkTwitter,
              linkInstagram,
              linkLinkedin,
              image,
            },
            index
          ) => (
            <Box
              key={index}
              sx={{
                width: '111px',
                height: 'auto',
                borderRadius: '100%',
                border: '1px solid var(--Primary, #A50000)',
                boxShadow: '0px 0px 6px 0px #CE0000',
              }}
            >
              <ImageListItem sx={{ width: '246px', height: 'auto' }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  style={{ minWidth: '100%', minHeight: '100%' }}
                  width={image.width}
                  height={image.height}
                />
              </ImageListItem>
            </Box>
          )
        )} */}
      </Box>
    </Box>
  );
}
