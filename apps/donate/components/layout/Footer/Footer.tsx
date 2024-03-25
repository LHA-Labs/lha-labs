import { Box, Button, IconButton, Typography } from '@mui/material';
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
    icon: StaticImageData;
    link: string;
  }

  const socialMediaLinks: socialMedia[] = [
    { icon: facebook, link: 'lien_facebook' },
    { icon: twitter, link: 'lien_twitter' },
    { icon: instagram, link: 'lien_instagram' },
    { icon: linkedin, link: 'lien_linkedin' },
  ];

  const getRandomSize = () => {
    const sizes = ['32px', '48px', '64px', '80px'];
    const randomIndex = Math.floor(Math.random() * sizes.length);
    return sizes[randomIndex];
  };

  return (
    <Box
      sx={{
        // position: 'fixed',
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
            width: '33%',
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
          <Box sx={{ display: 'flex' }}>
            {socialMediaLinks.map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  sx={{
                    borderRadius: '50%',
                    backgroundColor: '#FFF',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    padding: '8px',
                    width: getRandomSize(),
                    height: getRandomSize(),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <IconButton style={{ color: '#A50000' }}>
                    {/* {icon} */}
                  </IconButton>
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
