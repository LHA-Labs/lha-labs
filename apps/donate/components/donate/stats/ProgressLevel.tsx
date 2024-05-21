import { Box, LinearProgress, Typography } from '@mui/material';

interface ProgressLevelProps {
  progress: number;
}
export default function ProgressLevel({ progress }: ProgressLevelProps) {
  return (
    <Box
      sx={{
        display: 'grid',
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: 'var(--primary)', justifySelf: 'end', fontWeight: 600 }}
      >
        {`${progress.toFixed(2)}%`}
      </Typography>
      <LinearProgress
        variant="determinate"
        color="primary"
        value={progress}
        sx={{ borderRadius: '20px', height: '10px' }}
      />
    </Box>
  );
}
