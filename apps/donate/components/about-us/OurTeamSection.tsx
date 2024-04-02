import {
  Avatar,
  Box,
  IconButton,
  ImageListItem,
  Typography,
} from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { useIntl } from 'react-intl';
import LorrainPic from '../../assets/LorrainPic.png';
import { Linkedin, SocialX } from '../layout/Footer/SocialIcons';
import TitleAndSubtitle from '../layout/TitleAndSubtitle/TitleAndSubtitle';
import SectionHeader from '../Landing/SectionHeader';
import { getFirstTwoNameInitials } from '@lha-labs/utils';

export default function OurTeamSection() {
  const { formatMessage } = useIntl();

  const socialMediaLinks = [
    {
      Icon: Linkedin,
      link: 'lien_facebook',
    },
    // { icon: <TwitterIcon />, link: 'lien_twitter' },
    // { icon: <InstagramIcon />, link: 'lien_instagram' },
    // { icon: <LinkedInIcon />, link: 'lien_linkedin' },
  ];

  const tt = {
    socialX: SocialX,
  };

  interface MembersInfo {
    name: string;
    role: string;
    description: string;
    linkFacebook: string;
    linkTwitter: string;
    linkInstagram: string;
    linkLinkedin: string;
    image: {
      src: StaticImageData;
      alt: string;
      width: number;
      height: number;
    };
  }

  const members: MembersInfo[] = [
    {
      name: 'Lorrain Tchakoumi',
      role: 'roleLorrain',
      description: 'descriptionLorrain',
      linkFacebook: 'lien_facebook',
      linkTwitter: 'lien_twitter',
      linkInstagram: 'lien_instagram',
      linkLinkedin: 'lien_linkedin',
      image: {
        src: LorrainPic,
        alt: 'Picture Lorrain',
        width: 246,
        height: 246,
      },
    },
    // {
    //   name: 'Christiane Possi ',
    //   role: 'Tresoriere',
    //   description:
    //     'At Let’s help Association, our mission is to empower lives through compassionate initiatives. By promoting education and fostering sustainable solutions, we envision a brighter, more.',
    //   linkFacebook: 'lien_facebook',
    //   linkTwitter: 'lien_twitter',
    //   linkInstagram: 'lien_instagram',
    //   linkLinkedin: 'lien_linkedin',
    //   image: {
    //     src: '/LorrainPic.png',
    //     alt: 'Picture Chris',
    //     width: 246,
    //     height: 246,
    //   },
    // },
  ];
  const activeMember = members[0];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '35px',
      }}
    >
      <SectionHeader title={'ourTeam'} subtitle={'ourTeamSubtitle'} />
      {members.map((_, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
            width: '55%',
          }}
        >
          <Avatar
            src={activeMember.image.src}
            alt={activeMember.image.alt}
            sx={{
              width: activeMember.image.width,
              height: activeMember.image.height,
              border: '1px solid #A50000',
            }}
          >
            {getFirstTwoNameInitials(activeMember.name)}
          </Avatar>
          <Box
            sx={{
              display: 'grid',
              gap: 3,
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
                {activeMember.name}
              </Typography>
              <Typography variant="h3" sx={{ color: '#333' }}>
                {formatMessage({ id: `${activeMember.role}` })}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: 'var(--body)',
                fontWeight: 600,
                lineHeight: '28px',
              }}
            >
              {formatMessage({ id: `${activeMember.description}` })}
            </Typography>
            <Box sx={{ display: 'flex' }}>
              {socialMediaLinks.map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      gap: '18px',
                    }}
                  >
                    <IconButton size="small">
                      {<Icon socialHandle="@lha" sx={{ fontSize: '50px' }} />}
                    </IconButton>
                  </Box>
                </a>
              ))}
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
