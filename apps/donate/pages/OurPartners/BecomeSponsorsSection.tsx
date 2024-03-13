import {
  Box,
  Divider,
  IconButton,
  OutlinedInput,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import SendIcon from '../../assets/SendIcon.png';
import sendEmailIcon from '../../assets/send-mail-icon.svg';
import TitleAndSubtitle from '../../components/layout/TitleAndSubtitle/TitleAndSubtitle';
import call from '@iconify-icons/fluent/call-24-regular';
import { Icon, IconifyIcon } from '@iconify/react';
import location from '@iconify-icons/fluent/location-24-regular';
import mail from '@iconify-icons/fluent/mail-24-regular';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function BecomeSponsorsSection() {
  interface input {
    placeholder: string;
  }
  const inputs: input[] = [
    { placeholder: 'Enter your name' },
    { placeholder: 'Enter your email' },
    { placeholder: 'Enter your phone number' },
    { placeholder: 'Enter your motivation' },
  ];

  interface contact {
    icon: IconifyIcon;
    item: string;
  }
  const contacts: contact[] = [
    { icon: call, item: '360 King street' },
    { icon: location, item: 'Fearville Terose, CA 76896t' },
    { icon: mail, item: 'letshelpassociation@gmail.com' },
  ];
  const socialMediaLinks = [
    { icon: <FacebookIcon />, link: 'lien_facebook' },
    { icon: <TwitterIcon />, link: 'lien_twitter' },
    { icon: <InstagramIcon />, link: 'lien_instagram' },
    { icon: <LinkedInIcon />, link: 'lien_linkedin' },
  ];
  return (
    <Box
      sx={{
        marginBottom: '80px',
        // height: '60vh',
      }}
    >
      <TitleAndSubtitle
        title=""
        subtitle="Devenir Sponsor Let’s help Association"
      />
      <Box
        sx={{
          display: 'flex',
          padding: '0px 118px',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '35px',
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            padding: '45px 90px',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: '1 0 0',
            borderRadius: '10px 0px 0px 10px',
            border: '2px solid var(--line)',
            width: '56vw',

          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                marginBottom: '28px',
              }}
            >
              <Typography variant="h3">Send us our motivation</Typography>
              <Image src={sendEmailIcon} alt="send email icon" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                gap: '12px',
              }}
            >
              {inputs.map((input, index) => (
                <OutlinedInput
                  key={index}
                  autoComplete="true"
                  placeholder={input.placeholder}
                  sx={{ width: '100%' }}
                />
              ))}
              {/* <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" style={{ width: '100%' }} /> */}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'stretch',
              position: 'relative',
              marginTop:"35px",
            }}
          >
            <Divider
              variant="middle"
              component="li"
              sx={{ width: '88%', zIndex: 1 }}
            />

            <Box
              sx={{
                display: 'flex',
                padding: '12px',
                alignItems: 'center',
                borderRadius: '50px',
                position: 'relative',
                background: 'var(--primary)',
                cursor:"pointer",
              }}
            >
              <Image src={SendIcon} alt="Send Icon" />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            padding: '45px 90px',
            flexDirection: 'column',
            background: 'var(--primary)',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '0px 10px 10px 0px',
            width: '28vw',
            alignSelf: 'stretch',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography
              variant="h3"
              sx={{ color: '#fff', marginBottom: '30px' }}
            >
              Contact Information
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '24px',
              }}
            >
              {contacts.map(({ icon, item }, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <Icon icon={icon} style={{ color: 'white' }} />
                  <Typography
                    variant="body2"
                    color="offWhite"
                    sx={{ color: '#fff' }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
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
                  <IconButton style={{ color: '#fff' }}>{item.icon}</IconButton>
                </Box>
              </a>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
