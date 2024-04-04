import contact from '@iconify-icons/fluent/contact-card-32-regular';
import send from '@iconify-icons/fluent/send-24-regular';
import { Icon } from '@iconify/react';
import {
  Box,
  Divider,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { useIntl } from 'react-intl';

export default function NewPartnerForm() {
  const { formatMessage } = useIntl();
  return (
    <Box
      sx={{
        display: 'grid',
        padding: { laptop: '45px 70px', mobile: '32px 20px' },
        rowGap: 2,
        borderRadius: { laptop: '10px 0px 0px 10px', mobile: '10px 10px 0 0' },
        border: '2px solid var(--line)',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          alignItems: 'center',
          justifyItems: 'end',
        }}
      >
        <Typography variant="h3" padding={0}>
          {formatMessage({ id: 'tellUsAboutYou' })}
        </Typography>
        <Icon icon={contact} color="var(--primary)" fontSize={32} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <TextField
          size="small"
          fullWidth
          label={formatMessage({ id: 'fullname' })}
          placeholder="John Doe"
        />
        <TextField
          size="small"
          fullWidth
          label={formatMessage({ id: 'email' })}
          placeholder="email@domain.com"
        />
        <TextField
          size="small"
          fullWidth
          label={formatMessage({ id: 'phone' })}
          placeholder="+237 682 125 xxx"
        />
        <TextField
          size="small"
          fullWidth
          multiline
          rows={3}
          label={formatMessage({ id: 'motivation' })}
          placeholder="Your work is very interesting and I will like to support you!"
        />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'center',
          columnGap: 1,
        }}
      >
        <Divider />
        <Tooltip title={formatMessage({ id: 'send' })}>
          <IconButton
            sx={{
              background: 'var(--primary)',
              '&:hover': {
                background: 'var(--primary)',
              },
            }}
          >
            <Icon icon={send} color="white" fontSize={24} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
