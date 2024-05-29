import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Instagram, Linkedin, Mail, Whatsapp } from './SocialIcons';

export default function GetInTouch() {
  const { formatMessage } = useIntl();
  const secretary_whatsapp = '+237691402170';

  const [fullUrl, setFullUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, []);

  const tags = '#lha #destitute-children #sourire-aux-orphelins';
  const contactUsMessage = `
  ${formatMessage({ id: 'becomePartnerMessageHeader' })}\n\n${formatMessage({
    id: 'writeContactReason',
  })}\n\n${formatMessage({
    id: 'becomePartnerMessageFooter',
  })}\n\n${tags}\n${fullUrl}`;
  const contactUsRef = `https://api.whatsapp.com/send/?phone=${secretary_whatsapp}&text=${encodeURIComponent(
    contactUsMessage
  )}`;

  const socialMediaLinks: {
    icon: JSX.Element;
    link: string;
    handle: string;
  }[] = [
    {
      icon: (
        <Whatsapp
          socialHandle="Lets Help Association"
          sx={{ fontSize: { mobile: '50px', laptop: '30px' } }}
        />
      ),
      link: contactUsRef,
      handle: '(237) 691 102 170',
    },
    {
      icon: (
        <Mail
          socialHandle="contact@letshelp.ong"
          sx={{ fontSize: { mobile: '50px', laptop: '30px' } }}
        />
      ),
      link: 'mailto:contact@letshelp.ong',
      handle: 'contact@letshelp.ong',
    },
    {
      icon: (
        <Linkedin
          socialHandle="@LHA"
          sx={{ fontSize: { mobile: '50px', laptop: '30px' } }}
        />
      ),
      link: 'https://google.com',
      handle: '@LHA',
    },
    {
      icon: (
        <Instagram
          socialHandle="@LHA"
          sx={{ fontSize: { mobile: '50px', laptop: '30px' } }}
        />
      ),
      link: 'https://google.com',
      handle: '@LHA',
    },
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        rowGap: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: '24px',
          fontWeight: 600,
          lineHeight: '32px',
          letterSpacing: '-0.42px',
          color: '#333',
        }}
      >
        {formatMessage({ id: 'getInTouch' })}
      </Typography>
      <Box sx={{ display: 'grid', rowGap: 0, alignContent: 'start' }}>
        {socialMediaLinks.map(({ icon, link, handle }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            style={{ width: 'fit-content' }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                alignItems: 'center',
                columnGap: 0.5,
              }}
            >
              {icon}
              <Typography variant="body2" sx={{ color: '#333' }}>
                {handle}
              </Typography>
            </Box>
          </a>
        ))}
      </Box>
      <Typography
        sx={{
          display: { laptop: 'block', mobile: 'none' },
          fontSize: '12px',
          fontWeight: 500,
          color: '#333',
        }}
      >
        {"Let's Help Association"}
      </Typography>
    </Box>
  );
}
