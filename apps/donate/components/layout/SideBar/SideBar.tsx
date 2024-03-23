import { Box, Button, Drawer } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useIntl } from 'react-intl';
import LogoLha from '../../../assets/LogoLha.png';
import LanguageSwapper from '../LanguageSwapper';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  navItems: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose, navItems }) => {
  const { formatMessage } = useIntl();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          padding: '41px 40px',
          height: '100%',
          display: 'grid',
          gridTemplateRows: '1fr auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '45px',
          }}
        >
          <Image
            src={LogoLha}
            alt="Logo LHA"
            style={{ width: '119px', height: 'auto' }}
          />
          <Box
            sx={{
              display: 'grid',
              justifyItems: 'start',
              rowGap: 5,
            }}
          >
            {navItems.map((navItem, index) => (
              <Box
                onClick={onClose}
                key={index}
                sx={{
                  color: '#2F3A45',
                  fontSize: '12px',
                  lineHeight: '16px',
                  cursor: 'pointer',
                }}
              >
                {formatMessage({ id: `${navItem}` })}
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: 'grid', rowGap: 1, justifyItems: 'center' }}>
          <LanguageSwapper />
          <Button variant="contained" color="primary">
            {formatMessage({ id: 'makeADonation' })}
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
