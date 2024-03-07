import CaretIcon from '@iconify-icons/fluent/chevron-down-24-regular';
import MenuIcon from '@iconify-icons/fluent/line-horizontal-3-20-regular';
import { Icon } from '@iconify/react';
import {
  Box,
  IconButton,
  ImageListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import LayoutMenu from '../../../Interface';
import LogoLHA from '../../../assets/LogoLha.png';
import ButtonFilled from '../Buttons/ButtonFilled';
import Sidebar from '../SideBar/SideBar';

export default function Header() {
  const { formatMessage } = useIntl();

  const [activeItem, setActiveItem] = useState(0);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const items: LayoutMenu[] = [
    {
      title: 'Home',
      active: true,
    },
    {
      title: 'About Us',
      active: false,
    },
    {
      title: 'Partners',
      active: false,
    },
    {
      title: 'Donate',
      active: false,
    },
  ];

  const itemClick = (index: number) => {
    setActiveItem(index);
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
        items={items}
        activeItem={activeItem}
        onItemClick={itemClick}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'var(--background, #F5F5F5)',
          padding: '24px 94px',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: '0px',
            paddingLeft: '0px',
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
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            {items.map(({ title, active }, index) => (
              <Box
                onClick={() => itemClick(index)}
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: 'var(--Body, #2F3A45)',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '12px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  cursor: 'pointer',
                  lineHeight: '16px',
                  paddingBottom: '8px',
                  borderBottom: activeItem === index ? '2px solid red' : 'none',
                }}
              >
                {formatMessage({ id: `${title}` })}
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4px',
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
          {/* side BAr */}
          <IconButton
            sx={{ display: { desktop: 'none', mobile: 'block' }}}
            onClick={openSidebar}
          >
            <Icon icon={MenuIcon} color="#2F3A45" />
          </IconButton>
        </Toolbar>
      </Box>
    </>
  );
}
