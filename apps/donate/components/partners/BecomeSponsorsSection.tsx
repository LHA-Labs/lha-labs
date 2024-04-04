import { Box, Divider, OutlinedInput, Typography } from '@mui/material';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import SendIcon from '../../assets/SendIcon.png';
import sendEmailIcon from '../../assets/send-mail-icon.svg';
import SectionHeader from '../Landing/SectionHeader';
import LhaContact from './becomePartner/LhaContact';

export default function BecomeSponsorsSection() {
  const { formatMessage } = useIntl();
  interface input {
    placeholder: string;
  }
  const inputs: input[] = [
    { placeholder: 'inputName' },
    { placeholder: 'inputEmail' },
    { placeholder: 'inputPhone' },
    { placeholder: 'inputMotivation' },
  ];

  return (
    <Box
      sx={{
        marginBottom: '80px',
        // height: '60vh',
      }}
    >
      <SectionHeader title=" " subtitle={'becomeSponsorSubtitle'} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
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
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '28px',
              }}
            >
              <Typography variant="h3">
                {formatMessage({ id: 'formTitle' })}
              </Typography>
              <Image src={sendEmailIcon} alt="send email icon" />
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
              {inputs.map((input, index) => (
                <OutlinedInput
                  key={index}
                  autoComplete="true"
                  placeholder={formatMessage({ id: `${input.placeholder}` })}
                />
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'stretch',
              position: 'relative',
              marginTop: '35px',
            }}
          >
            <Divider variant="middle" component="li" sx={{ zIndex: 1 }} />

            <Box
              sx={{
                display: 'flex',
                padding: '12px',
                alignItems: 'center',
                borderRadius: '50px',
                position: 'relative',
                background: 'var(--primary)',
                cursor: 'pointer',
              }}
            >
              <Image src={SendIcon} alt="Send Icon" />
            </Box>
          </Box>
        </Box>
        <LhaContact />
      </Box>
    </Box>
  );
}
