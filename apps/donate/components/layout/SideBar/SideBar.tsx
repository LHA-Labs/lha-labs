import { Box, Button, Drawer } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useIntl } from 'react-intl';
import LogoLha from '../../../assets/LogoLha.png';
import LanguageSwapper from '../LanguageSwapper';
import { NavItem } from '../navItem';
import { INavItem } from '../Header/Header';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  navItems: INavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose, navItems }) => {
  const { formatMessage } = useIntl();
  const { push } = useRouter();

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
            onClick={() => push('/')}
            src={LogoLha}
            alt="Logo LHA"
            style={{ width: '119px', height: 'auto', cursor: 'pointer' }}
          />
          <Box
            sx={{
              display: 'grid',
              justifyItems: 'start',
              rowGap: 5,
            }}
          >
            {navItems.map((navItem, index) => (
              <NavItem
                key={index}
                navItem={navItem}
                handleLink={() => {
                  push(navItem.route);
                  onClose();
                }}
              />
            ))}
          </Box>
        </Box>
        <Box sx={{ display: 'grid', rowGap: 1, justifyItems: 'center' }}>
          <LanguageSwapper />
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: '20px' }}
          >
            {formatMessage({ id: 'makeADonation' })}
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
