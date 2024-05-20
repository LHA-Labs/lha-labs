import CaretIcon from '@iconify-icons/fluent/chevron-down-24-regular';
import { Icon } from '@iconify/react';
import { Box, Button, Drawer, ImageListItem, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useIntl } from 'react-intl';
import LayoutMenu from '../../../Interface';
import LogoLha from '../../../assets/LogoLha.png';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  items: LayoutMenu[];
  activeItem: number;
  onItemClick: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  open,
  onClose,
  items,
  activeItem,
  onItemClick,
}) => {
  const { formatMessage } = useIntl();
  const { push } = useRouter();

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
            {items.map(({ title }, index) => (
              <Box
                onClick={() => onItemClick(index)}
                key={index}
                sx={{
                  display: 'flex',
                  color: 'var(--Body, #2F3A45)',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '12px',
                  lineHeight: '16px',
                  fontWeight: activeItem === index ? 600 : 500,
                  cursor: 'pointer',
                }}
              >
                {formatMessage({ id: `${title}` })}
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
          <Button
            variant="contained"
            size="medium"
            color="primary"
            sx={{ borderRadius: '50px' }}
            onClick={() => push('/donate')}
          >
            {formatMessage({ id: 'makeADonation' })}
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
