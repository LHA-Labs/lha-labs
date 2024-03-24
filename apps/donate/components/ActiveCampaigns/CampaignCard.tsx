import location from '@iconify-icons/fluent/location-24-regular';
import calendar from '@iconify/icons-fluent/calendar-arrow-counterclockwise-24-regular';
import { Icon } from '@iconify/react';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import CampaignImg from './campaignImgs';

export interface Campaign {
  title: string;
  place: string;
  date: Date;
  link: string;
  images: string[];
  description: string;
}

interface CampaignCardProps {
  campaign: Campaign;
}
export default function CampaignCard({
  campaign: { title, date, link, place, description },
}: CampaignCardProps) {
  const { formatMessage, formatDate } = useIntl();
  const { push } = useRouter();
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { laptop: '4.5fr 5.5fr', mobile: 'none' },
        alignContent: 'start',
        alignItems: 'start',
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => push(link)}
          sx={{ justifySelf: { laptop: 'start', mobile: 'stretch' } }}
        >
          {formatMessage({ id: 'participate' })}
        </Button>
      </Box>
      <CampaignImg />
    </Box>
  );
}
