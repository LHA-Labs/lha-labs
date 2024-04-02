import { getFirstTwoNameInitials } from '@lha-labs/utils';
import { Avatar, Box, Typography } from '@mui/material';
import { useIntl } from 'react-intl';
import { Member, useTeam } from '../../services/team';
import SectionHeader from '../Landing/SectionHeader';
import MemberSocialIcon from './MemberSocialIcon';

export default function OurTeamSection() {
  const { formatMessage } = useIntl();

  const members: Member[] = useTeam();
  const activeMember = members[0];

  return (
    <Box
      sx={{
        display: 'grid',
        justifyItems: 'center',
        rowGap: 4,
      }}
    >
      <SectionHeader title={'ourTeam'} subtitle={'ourTeamSubtitle'} />
      {members.map((_, index) => (
        <Box
          key={index}
          sx={{
            display: 'grid',
            gridAutoFlow: 'column',
            alignItems: 'center',
            gap: '50px',
            width: '55%',
          }}
        >
          <Avatar
            src={activeMember.imageRef}
            alt={activeMember.fullname}
            sx={{
              width: 246,
              height: 246,
              border: '1px solid #A50000',
            }}
          >
            {getFirstTwoNameInitials(activeMember.fullname)}
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
                {activeMember.fullname}
              </Typography>
              <Typography variant="h3" sx={{ color: '#333' }}>
                {formatMessage({ id: `${activeMember.role}` })}
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
                {formatMessage({ id: `${activeMember.message}` })}
              </Typography>
              <Box sx={{ display: 'flex' }}>
                {Object.keys(activeMember.socials).map((key, index) => (
                  <MemberSocialIcon
                    key={index}
                    link={activeMember.socials[key]}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}

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
