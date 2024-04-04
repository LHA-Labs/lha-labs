import checkCircle from '@iconify-icons/fluent/checkmark-circle-24-filled';
import { Icon } from '@iconify/react';
import { Box, Typography } from '@mui/material';
import { Tenet } from '../../../pages/AboutUs/OurMissionVisionSection';
import { useIntl } from 'react-intl';
interface TenetCardProps extends Tenet {
  index: number;
}
export default function TenetCard({
  icon,
  title,
  description,
  colored = false,
  index,
}: TenetCardProps) {
  const { formatMessage } = useIntl();
  return (
    <Box
      sx={{
        backgroundColor: {
          laptop: colored ? 'var(--primary)' : '#F5F5F5',
          mobile: index % 2 ? 'var(--primary)' : '#F5F5F5',
        },
        padding: '28px 46px',
        display: 'grid',
        rowGap: 3,
        alignContent: 'start',
      }}
    >
      <Box sx={{ display: 'grid', rowGap: 1 }}>
        {icon}
        <Typography
          variant="h3"
          sx={{
            color: {
              laptop: colored ? '#E0E0E0' : 'var(--primary)',
              mobile: index % 2 ? '#E0E0E0' : 'var(--primary)',
            },
          }}
        >
          {formatMessage({ id: title })}
        </Typography>
      </Box>
      {Array.isArray(description) ? (
        <Box sx={{ display: 'grid', rowGap: 2 }}>
          {description.map((_, mapIndex) => (
            <Box
              key={mapIndex}
              sx={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                alignItems: 'start',
                columnGap: 2,
              }}
            >
              <Box sx={{ display: { mobile: 'none', laptop: 'block' } }}>
                <Icon icon={checkCircle} fontSize={32} color="white" />
              </Box>
              <Box sx={{ display: { mobile: 'block', laptop: 'none' } }}>
                <Icon
                  icon={checkCircle}
                  fontSize={32}
                  color={index % 2 ? 'white' : 'var(--primary)'}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: {
                    laptop: colored ? '#E0E0E0' : '#666',
                    mobile: index % 2 ? '#E0E0E0' : '#666',
                  },
                }}
              >
                {_}
              </Typography>
            </Box>
          ))}
        </Box>
      ) : (
        <Typography
          variant="body2"
          sx={{
            color: {
              laptop: colored ? '#E0E0E0' : '#666',
              mobile: index % 2 ? '#E0E0E0' : '#666',
            },
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}
