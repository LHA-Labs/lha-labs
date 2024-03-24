import { Box, Button, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import CampaignImg from './campaignImgs';
import { useIntl } from 'react-intl';

function ActiveCampaigns() {
  const { formatMessage } = useIntl();
  return (
    <Box component="section" sx={{ padding: 1.5 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px 0',
        }}
      >
        <Typography
          sx={{
            color: 'var(--primary)',
            fontWeight: 'var(--medium)',
          }}
        >
          {formatMessage({ id: 'activeCampaigns' })}
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            fontWeight: 'var(--semiBold)',
            fontSize: '20px',
            lineHeight: '24px',
            color: 'var(--titleActive)',
          }}
        >
          {formatMessage({ id: 'activeCampaignsSubtitle' })}
        </Typography>
        <Divider
          sx={{
            border: '1px solid var(--primary)',
            width: '90px',
            marginTop: '10px',
          }}
        />
      </Box>
      <Box>
        <Box padding="12px 0">
          <Typography
            sx={{
              fontWeight: 'var(--semiBold)',
              fontSize: '16px',
              lineHeight: '24px',
              color: 'var(--titleActive)',
            }}
          >
            Opération 1 orphelin = 1 pack scolaire
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <Image
                src="/assets/ic_fluent_calendar_clock_24_regular.png"
                alt="calendar"
                width={16}
                height={16}
              />
              <Typography
                sx={{
                  fontWeight: 'var(--medium)',
                  fontSize: '12px',
                  lineHeight: '16px',
                }}
              >
                8:00, 14 Aout 2022
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
                paddingLeft: '20px',
              }}
            >
              <Image
                src="/assets/ic_fluent_location_24_regular.png"
                alt="location"
                width={16}
                height={16}
              />
              <Typography
                sx={{
                  fontWeight: 'var(--medium)',
                  fontSize: '12px',
                  lineHeight: '16px',
                }}
              >
                Douala, Cameroun
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography
          sx={{
            fontWeight: 'var(--semiBold)',
            fontSize: '14px',
            lineHeight: '24px',
            color: 'var(--body)',
            padding: '0 0 10px',
          }}
        >
          {`Joignez-vous à nous dans cette initiative significative et faites une différence concrète dans la vie d'un enfant.  Joignez-vous à nous dans cette initiative significative.`}{' '}
        </Typography>
        <Button variant="contained" color="primary">
          Participer
        </Button>
        <CampaignImg />
      </Box>
    </Box>
  );
}

export default ActiveCampaigns;
