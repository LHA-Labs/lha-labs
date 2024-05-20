import calendar from '@iconify-icons/fluent/calendar-arrow-counterclockwise-24-regular';
import location from '@iconify-icons/fluent/location-24-regular';
import { Icon } from '@iconify/react';
import { Box, Button, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

export interface Campaign {
  title: string;
  place: string;
  date: Date;
  link: string;
  images: string[];
  description: string;
}

export default function CampaignCard({
  title,
  date,
  place,
  description,
  images,
}: Campaign) {
  const { formatMessage, formatDate } = useIntl();
  const { push } = useRouter();
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { laptop: '4.5fr 5.5fr', mobile: 'none' },
        alignContent: 'start',
        alignItems: 'center',
        columnGap: 7,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          rowGap: 2,
        }}
      >
        <Box
          sx={{
            justifySelf: { mobile: 'center', laptop: 'start' },
            display: 'grid',
            rowGap: 0.5,
          }}
        >
          <Typography
            sx={{
              fontWeight: 'var(--semiBold)',
              fontSize: '16px',
              lineHeight: '24px',
              color: 'var(--titleActive)',
              textAlign: 'center',
            }}
          >
            {title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <Icon icon={calendar} fontSize={24} color="var(--primary)" />
              <Typography
                sx={{
                  fontWeight: 'var(--medium)',
                  fontSize: '12px',
                  lineHeight: '16px',
                }}
              >
                {formatDate(date, {
                  year: 'numeric',
                  day: 'numeric',
                  month: 'short',
                  hour: 'numeric',
                  minute: 'numeric',
                })}
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
              <Icon icon={location} fontSize={24} color="var(--primary)" />
              <Typography
                sx={{
                  fontWeight: 'var(--medium)',
                  fontSize: '12px',
                  lineHeight: '16px',
                }}
              >
                {place}
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
          {description}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridAutoFlow: 'column',
            alignItems: 'center',
            gap: 1,
            justifySelf: { laptop: 'start', mobile: 'stretch' },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => push('/donate')}
          >
            {formatMessage({ id: 'makeADonation' })}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => push('/join-us')}
          >
            {formatMessage({ id: 'participate' })}
          </Button>
        </Box>
      </Box>
      <Box component={Paper} elevation={1} sx={{ justifySelf: 'center' }}>
        <Image
          src={images[0]}
          alt="1 Orphelin = 1 Pack Scolare Acte 2"
          loading="eager"
          height={400}
          width={400}
        />
        {/* <CampaignImg /> */}
      </Box>
    </Box>
  );
}
