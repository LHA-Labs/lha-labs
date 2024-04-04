import { Box, Divider } from '@mui/material';
import { ILetsHelpStat, useStats } from '../../services/stats';
import LhaStatCard from '../Landing/AboutUs/LhaStatCard';

export default function LhaStats() {
  const statistics: ILetsHelpStat[] = useStats();

  return (
    <Box
      sx={{
        padding: { mobile: '0px 32px', laptop: '0px 118px' },
        display: 'grid',
        gridTemplateColumns: {
          laptop: 'repeat(auto-fill, minmax(200px, 1fr))',
          mobile: 'repeat(auto-fill, minmax(92px, 1fr))',
        },
        alignItems: 'start',
        gap: 3,
      }}
    >
      {statistics.map((stat, index) => (
        <Box
          key={index}
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'center',
            minHeight: '80px',
          }}
        >
          <LhaStatCard {...stat} />
          {index !== statistics.length - 1 && (
            <Divider
              sx={{
                backgroundColor: 'var(--primary)',
                display: { laptop: 'block', mobile: 'none' },
              }}
              orientation="vertical"
              variant="middle"
              flexItem
            />
          )}
        </Box>
      ))}
    </Box>
  );
}
