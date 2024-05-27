import { Box, Typography } from '@mui/material';
import { useIntl } from 'react-intl';
import { Instagram, Linkedin } from './SocialIcons';

export default function GetInTouch() {
  const { formatMessage } = useIntl();

  const socialMediaLinks: {
    icon: JSX.Element;
    link: string;
    handle: string;
  }[] = [
    {
      icon: <Linkedin socialHandle="@LHA" sx={{ fontSize: '50px' }} />,
      link: 'https://google.com',
      handle: '@LHA',
    },
    {
      icon: <Instagram socialHandle="@LHA" sx={{ fontSize: '50px' }} />,
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
