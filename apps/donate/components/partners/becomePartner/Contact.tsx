import { Icon, IconifyIcon } from '@iconify/react';
import { Box, Typography } from '@mui/material';
import React from 'react';

interface ContactProps {
  icon: IconifyIcon;
  item: string;
}
export default function Contact({ icon, item }: ContactProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'center',
        columnGap: 1,
      }}
    >
      <Icon icon={icon} fontSize={24} style={{ color: 'white' }} />
      <Typography variant="body2" sx={{ color: 'white' }}>
        {item}
      </Typography>
    </Box>
  );
}
