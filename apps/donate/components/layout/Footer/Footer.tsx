import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import ImgFooter from '../../../assets/ImgFooter.png';
import ButtonFilled from '../Buttons/ButtonFilled';

export default function Footer() {
  const { formatMessage } = useIntl();

  const listOrganisation = [
    'About Us',
    'Partners',
    'Make an anonymous donation',
    'let’shelp@gmail.com',
  ];

  const socialMediaLinks = [
    { icon: <FacebookIcon />, link: 'lien_facebook' },
    { icon: <TwitterIcon />, link: 'lien_twitter' },
    { icon: <InstagramIcon />, link: 'lien_instagram' },
    { icon: <LinkedInIcon />, link: 'lien_linkedin' },
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
            <ButtonFilled
              label={formatMessage({ id: 'Make a donation' })}
              isPrimary={true}
            ></ButtonFilled>
            <ButtonFilled
              label={formatMessage({ id: 'Nous joindre' })}
              isPrimary={false}
            ></ButtonFilled>
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
                  <IconButton style={{ color: '#A50000' }}>
                    {item.icon}
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
            // width:"33%",
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
