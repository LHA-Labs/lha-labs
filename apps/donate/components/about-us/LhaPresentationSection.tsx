import { Box } from '@mui/system';
import { Divider, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import imgOfTeam1 from '../../assets/imgOfTeam1.png';
import imgOfTeam2 from '../../assets/imgOfTeam2.png';
import { useIntl } from 'react-intl';
import { ILetsHelpStat, useStats } from '../../services/stats';
import { shortenNumber } from '@lha-labs/utils';

export default function LhaPresentationSection() {
  const { formatMessage } = useIntl();

  const statistic: ILetsHelpStat[] = useStats();

  return (
    <Box
      sx={{
        display: 'grid',
        gap: '30px',
        marginTop: '50px',
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          padding: '0px 207px',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          {formatMessage({ id: 'lhaPresentationTitle' })}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          {formatMessage({ id: 'lhaPresentationSubtitle1' })}
          <Typography variant="body1" color="primary">
            {formatMessage({ id: 'lhaPresentationSubtitle2' })}
          </Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gridTemplateRows: '1fr 2fr 1fr',
          height: '100%',
          width: '100%',
          padding: '0px 118px',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Box sx={{ height: '100%', width: '100%' }}>
          <Image src={imgOfTeam1} alt="Image 1" />
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateRows: '1fr 1fr',
            justifyContent: 'space-between',
            gap: '2px',
            height: '100%',
            width: '100%',
          }}
        >
          <Image src={imgOfTeam2} alt="Image 2" />
          <Image src={imgOfTeam2} alt="Image 3" />
        </Box>

        <Box sx={{ height: '100%', width: '100%' }}>
          <Image src={imgOfTeam1} alt="Image 4" />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          padding: '0px 118px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {statistic.map(({ value, label }, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              width: '170px',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: 'auto',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}
            >
              <Typography variant="h1" sx={{ color: 'titleActive' }}>
                {`+${shortenNumber(value)}`}
              </Typography>
              <Box
                sx={{
                  borderRadius: '4px',
                  display: 'flex',
                  padding: '0px 3px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(220, 0, 0, 0.20)',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: 'titleActive',
                  }}
                >
                  {formatMessage({ id: `${label}` })}
                </Typography>
              </Box>
            </Box>
            {index !== statistic.length - 1 && (
              <Divider orientation="vertical" variant="middle" flexItem />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
