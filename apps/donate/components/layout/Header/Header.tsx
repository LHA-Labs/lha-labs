import MenuIcon from '@iconify-icons/fluent/line-horizontal-3-20-regular';
import { Icon } from '@iconify/react';
import {
  Box,
  Button,
  IconButton,
  ImageListItem,
  Toolbar
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import LogoLHA from '../../../assets/LogoLha.png';
import LanguageSwapper from '../LanguageSwapper';
import Sidebar from '../SideBar/SideBar';

export default function Header() {
  const { formatMessage } = useIntl();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems: string[] = ['home', 'aboutUs', 'partners', 'donate'];

  const itemClick = (index: number) => {
    closeSidebar();
  };

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <Sidebar
        open={sidebarOpen}
        onClose={closeSidebar}
        navItems={navItems}
        onItemClick={itemClick}
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'var(--background, #F5F5F5)',
          padding: '12px 94px',
        }}
      >
        <Toolbar
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              laptop: 'auto 1fr auto',
              mobile: 'auto 1fr',
            },
            justifyItems: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ImageListItem sx={{ width: '167px', height: '63px' }}>
              <Image
                src={LogoLHA}
                alt="Logo LHA"
                style={{ width: '167px', height: '63px' }}
              />
            </ImageListItem>
          </Box>
          <Box
            sx={{
              display: { laptop: 'grid', mobile: 'none' },
              alignItems: 'center',
              gridAutoFlow: 'column',
              columnGap: 3,
            }}
          >
            {navItems.map((navItem, index) => (
              <Box
                onClick={() => itemClick(index)}
                key={index}
                sx={{
                  color: 'var(--Body, #2F3A45)',
                  fontSize: '12px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  lineHeight: '16px',
                }}
              >
                {formatMessage({ id: `${navItem}` })}
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: { laptop: 'grid', mobile: 'none' },
              gridAutoFlow: 'column',
              alignItems: 'center',
              columnGap: 1.5,
            }}
          >
           <LanguageSwapper />
            <Button variant="contained" color="primary">
              {formatMessage({ id: 'makeADonation' })}
            </Button>
          </Box>
          <IconButton
            sx={{
              display: { laptop: 'none', mobile: 'block' },
              justifySelf: 'end',
            }}
            onClick={openSidebar}
          >
            <Icon icon={MenuIcon} color="#2F3A45" />
          </IconButton>
        </Toolbar>
      </Box>
    </>
  );
}
