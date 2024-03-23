import { Box, Typography } from '@mui/material';
import { useIntl } from 'react-intl';

export default function GetInTouch() {
  const { formatMessage } = useIntl();

  const socialMediaLinks: { icon: unknown; link: string }[] = [];

  const getRandomSize = () => {
    const sizes = ['32px', '48px', '64px', '80px'];
    const randomIndex = Math.floor(Math.random() * sizes.length);
    return sizes[randomIndex];
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
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
