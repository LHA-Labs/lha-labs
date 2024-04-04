import call from '@iconify-icons/fluent/call-24-regular';
import location from '@iconify-icons/fluent/location-24-regular';
import mail from '@iconify-icons/fluent/mail-24-regular';
import { Box, IconButton, Typography } from '@mui/material';
import { useIntl } from 'react-intl';
import { Instagram, Linkedin } from '../../layout/Footer/SocialIcons';
import Contact from './Contact';

export default function LhaContact() {
  const { formatMessage } = useIntl();

  const contacts = [
    { icon: call, item: '+237 693 256 789' },
    { icon: location, item: '8080 Rue Charles de Gaulle' },
    { icon: mail, item: 'contact@lh.ngo' },
  ];
  const socialMediaLinks = [
    {
      icon: <Instagram socialHandle="@lha" iconColor="white" />,
      link: 'https://google.com',
    },
    {
      icon: <Linkedin socialHandle="@lha" iconColor="white" />,
      link: 'https://google.com',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'var(--primary)',
        padding: { laptop: '45px 70px', mobile: '32px 20px' },
        borderRadius: { laptop: '0 10px 10px 0', mobile: '0 0 10px 10px' },
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
        display: 'grid',
        alignItems: 'start',
        rowGap: 4,
        gridTemplateRows: 'auto 1fr auto',
      }}
    >
      <Typography variant="h3" sx={{ color: 'white', padding: 0 }}>
        {formatMessage({ id: 'contactInformation' })}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          rowGap: 2,
        }}
      >
        {contacts.map((info, index) => (
          <Contact {...info} key={index} />
        ))}
      </Box>
      <Box
        sx={{
          display: 'grid',
          justifyContent: 'center',
          gridAutoFlow: 'column',
          columnGap: 0.5,
          alignItems: 'center',
        }}
      >
        {socialMediaLinks.map(({ icon, link }, index) => (
          <IconButton
            component="a"
            href={link}
            target="_blank"
            key={index}
            style={{ color: '#fff' }}
          >
            {icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}
