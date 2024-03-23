import CaretIcon from '@iconify-icons/fluent/chevron-down-24-regular';
import { Icon } from '@iconify/react';
import { Box, Button, Drawer, ImageListItem, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useIntl } from 'react-intl';
import LogoLha from '../../../assets/LogoLha.png';
import LanguageSwapper from '../LanguageSwapper';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  navItems: string[];
  onItemClick: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  open,
  onClose,
  navItems,
  onItemClick,
}) => {
  const { formatMessage } = useIntl();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 258,
          padding: '41px 40px',
          height: '100%',
          display: 'grid',
          alignContent: 'space-between',
          justifyItems: 'start',
        }}
      >
        {/* <IconButton sx={{ alignSelf: 'flex-end' }} onClick={onClose}>
        <Icon icon={Dismiss}/>
        </IconButton> */}
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
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '40px',
            }}
          >
            {navItems.map((navItem, index) => (
              <Box
                onClick={() => onItemClick(index)}
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
