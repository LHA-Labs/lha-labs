import { Box, Divider, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { useIntl } from 'react-intl';
import LorrainPic from '../../assets/LorrainPic.png';
import logoGlom from '../../assets/logoGlom.png';
import SectionHeader from '../Landing/SectionHeader';

export default function OurSponsorsSection() {
  const { formatMessage } = useIntl();
  interface sponsorsInfo {
    picture: {
      src: StaticImageData;
      alt: string;
    };
    name: string;
    role: string;
    description: string;
    logo: {
      src: StaticImageData;
      alt: string;
    };
  }
  const sponsors: sponsorsInfo[] = [
    {
      picture: {
        src: LorrainPic,
        alt: 'Image de Lorrain',
      },
      name: 'Lorrain Tchakoumi',
      role: 'CEO GLOM',
      description: 'glomDescription',
      logo: {
        src: logoGlom,
        alt: 'Logo Glom',
      },
    },
    {
      picture: {
        src: LorrainPic,
        alt: 'Image de Lorrain',
      },
      name: 'Lorrain Tchakoumi',
      role: 'CEO GLOM',
      description: 'glomDescription',
      logo: {
        src: logoGlom,
        alt: 'Logo Glom',
      },
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
      }}
    >
      <SectionHeader
        title={'ourSponsorsTitle'}
        subtitle={'ourSponsorsSubtitle'}
      />
      <Box>
        {sponsors.map(({ picture, name, role, description, logo }, index) => (
          <Box
            key={index}
            sx={{
              display: 'inline-flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0px 118px',
              width: '100%',
              marginBottom: '24px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  // height: '200px',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flex: '1 0 0',
                  gap: '12px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <Image
                    src={picture.src}
                    alt={picture.alt}
                    style={{ width: '75px', height: '75px' }}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      height: '60px',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Typography
                      variant="h3"
                      color="offWhite"
                      sx={{ color: '#333333' }}
                    >
                      {formatMessage({ id: `${name}` })}
                    </Typography>
                    <Typography
                      variant="h5"
                      color="primary"
                      sx={{ color: '#A50000' }}
                    >
                      {formatMessage({ id: `${role}` })}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ color: '#666666' }}>
                  {formatMessage({ id: `${description}` })}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  width: '190px',
                  height: '190px',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '104px',
                  border: '1px solid var(--primary)',
                }}
              >
                <Image src={logo.src} alt={logo.alt} />
              </Box>
            </Box>
            {index !== sponsors.length - 1 && (
              <Divider variant="middle" component="li" sx={{ width: '70vw' }} />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
