import { Box, IconButton, ImageListItem, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import TitleAndSubtitle from '../../components/layout/TitleAndSubtitle/TitleAndSubtitle';
import React from 'react';
import LorrainPic from '../../assets/LorrainPic.png';
import Image, { StaticImageData } from 'next/image';
import { useIntl } from 'react-intl';

export default function OurTeamSection() {
  const { formatMessage } = useIntl();

  const socialMediaLinks = [
    { icon: <FacebookIcon />, link: 'lien_facebook' },
    { icon: <TwitterIcon />, link: 'lien_twitter' },
    { icon: <InstagramIcon />, link: 'lien_instagram' },
    { icon: <LinkedInIcon />, link: 'lien_linkedin' },
  ];

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
        marginBottom:"80px",
      }}
    >
      <TitleAndSubtitle
        title={formatMessage({ id: 'ourTeamTitle' })}
        subtitle={formatMessage({ id: 'ourTeamSubtitle' })}
      />
      {members.map(
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
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '50px',
              width: '55%',
            }}
          >
            <ImageListItem sx={{ width: '100%', height: 'auto' }}>
              <Image
                src={LorrainPic}
                alt={activeMember.image.alt}
                // style={{ minWidth: '100%', minHeight: '100%' }}
                // width={activeMember.image.width}
                // height={activeMember.image.height}
              />
            </ImageListItem>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '24px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '4px',
                }}
              >
                <Typography
                  sx={{
                    color: 'var(--Primary, #A50000)',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '30px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '36px',
                    letterSpacing: '-0.6px',
                  }}
                >
                  {activeMember.name}
                </Typography>
                <Typography
                  sx={{
                    color: 'var(--title-active, var(--Titre-active, #333))',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '32px',
                  }}
                >
                  {formatMessage({ id: `${activeMember.role}` })}
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: 'var(--body, #666)',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '28px',
                }}
              >
                {formatMessage({ id: `${activeMember.description}` })}
              </Typography>
              <Box sx={{ display: 'flex' }}>
                {socialMediaLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
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
                      <IconButton style={{ color: '#A50000' }}>
                        {item.icon}
                      </IconButton>
                    </Box>
                  </a>
                ))}
              </Box>
            </Box>
          </Box>
        )
      )}

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
