import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import ImgFooter from '../../../assets/ImgFooter.png';

export default function Footer() {
  const { formatMessage } = useIntl();

  const listOrganisation: string[] = [
    'aboutUs',
    'partners',
    'makeAnonymousDonation',
  ];

  const socialMediaLinks: { icon: unknown; link: string }[] = [];

  const getRandomSize = () => {
    const sizes = ['32px', '48px', '64px', '80px'];
    const randomIndex = Math.floor(Math.random() * sizes.length);
    return sizes[randomIndex];
  };

  return (
    <Box
      sx={{
        position: 'fixed',
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
            {formatMessage({ id: 'Get involved' })}
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
              id: 'Lets Help Association, devoted to compassion and social impact, is committed to providing meaningful assistance to communities.',
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
            <Button variant="contained" color="primary">
              {formatMessage({ id: 'Make a donation' })}
            </Button>
            <Button variant="contained" color="inherit">
              {formatMessage({ id: 'Nous joindre' })}
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
            {formatMessage({ id: 'Get in touch' })}
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
                  {/* {item.icon} */}
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
            display: 'grid',
            alignContent: 'start',
            rowGap: 2,
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
            <Typography key={index} sx={{ fontWeight: 600 }}>
              {formatMessage({ id: `${title}` })}
            </Typography>
          ))}
          <Typography
            component="a"
            target='_blank'
            href="mailto:letshelp@gmail.com"
            sx={{ fontWeight: 600 }}
          >
            letshelp@gmail.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
