import { Box, Button, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { useIntl } from 'react-intl';
import ImgFooter from '../../../assets/ImgFooter.png';
import facebook from '../../../assets/facebook.svg';
import instagram from '../../../assets/instagram.svg';
import linkedin from '../../../assets/linkedin.svg';
import twitter from '../../../assets/twitter.svg';

export default function Footer() {
  const { formatMessage } = useIntl();

  const listOrganisation = [
    'aboutUs',
    'partners',
    'makeAnonyme',
    'let’shelp@gmail.com',
  ];

  interface socialMedia {
    src: StaticImageData;
    alt: string;
    link: string;
  }

  const socialMediaLinks: socialMedia[] = [
    { src: facebook, alt: 'facebook', link: 'lien_facebook' },
    { src: twitter, alt: 'twitter', link: 'lien_twitter' },
    { src: instagram, alt: 'instagram', link: 'lien_instagram' },
    { src: linkedin, alt: 'linkedin', link: 'lien_linkedin' },
  ];

  // const getRandomSize = () => {
  //   const sizes = ['32px', '48px', '64px', '80px'];
  //   const randomIndex = Math.floor(Math.random() * sizes.length);
  //   return sizes[randomIndex];
  // };

  return (
    <Box
      sx={{
        bottom: 0,
        width: '100%',
        alignItems: 'center',
      }}
    >
      <Image
        src={ImgFooter}
        alt="Img Footer"
        style={{ width: '100%', height: 'auto' }}
      ></Image>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '56px 118px',
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            alignContent: 'space-between',
            width: '33%',
            gap: '24px',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '32px',
              letterSpacing: '-0.42px',
            }}
          >
            {formatMessage({ id: 'getInvolved' })}
          </Typography>
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
            {formatMessage({
              id: 'textFooter',
            })}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              gap: '16px',
            }}
          >
            <Button
              variant="contained"
              size="large"
              color="primary"
              sx={{ borderRadius: '50px' }}
            >
              {formatMessage({ id: 'makeADonation' })}
            </Button>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              sx={{ borderRadius: '50px' }}
            >
              {formatMessage({ id: 'joinUs' })}
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: '20%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '32px',
              letterSpacing: '-0.42px',
            }}
          >
            {formatMessage({ id: 'getInTouch' })}
          </Typography>
          <Box sx={{ display: 'flex',justifyContent: 'space-between', width:"100%"}}>
            {socialMediaLinks.map(({ src, alt, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: index === 0 ? '20px' : '10px',
                  marginBottom:
                    index === socialMediaLinks.length - 1 ? '20px' : '10px',
                }}
              >
                <Box
                  sx={{
                    borderRadius: '50%',
                    backgroundColor: '#FFF',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    padding: '14px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    style={{ color: 'var(--primary)' }}
                  />
                </Box>
              </a>
            ))}
          </Box>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '16px',
            }}
          >
            Let’s Help Association
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '32px',
              letterSpacing: '-0.42px',
            }}
          >
            {formatMessage({ id: 'Organisation' })}
          </Typography>
          {listOrganisation.map((title, index) => (
            <Typography
              key={index}
              sx={{
                color: 'var(--body, #666)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '28px',
              }}
            >
              {formatMessage({ id: `${title}` })}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
