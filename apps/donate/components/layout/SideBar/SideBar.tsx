import CaretIcon from '@iconify-icons/fluent/chevron-down-24-regular';
import { Icon } from '@iconify/react';
import { Box, Drawer, ImageListItem, Typography } from '@mui/material';
import LayoutMenu from 'apps/donate/Interface';
import Image from 'next/image';
import React from 'react';
import { useIntl } from 'react-intl';
import LogoLha from '../../../assets/LogoLha.png';
import ButtonFilled from '../Buttons/ButtonFilled';

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
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ImageListItem sx={{ width: '119px', height: '45px' }}>
              <Image
                src={LogoLha}
                alt="Logo LHA"
                style={{ width: '119px', height: 'auto' }}
              />
            </ImageListItem>
          </Box>
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
        <Box sx={{ gap: '10px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              paddingBottom: '10px',
            }}
          >
            <Typography
              sx={{
                color: 'var(--Body, #2F3A45)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '20px',
              }}
            >
              {formatMessage({ id: 'Eng' })}
            </Typography>
            <Icon icon={CaretIcon} color="#2F3A45" />
          </Box>
          <ButtonFilled
            label={formatMessage({ id: 'Make a donation' })}
            isPrimary={true}
          ></ButtonFilled>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
