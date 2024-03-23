import { supportedLanguages, useLanguage } from '@lha-labs/theme';
import {
  Box,
  Button,
  ImageListItem,
  MenuItem,
  TextField,
  Toolbar
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import LogoLHA from '../../../assets/LogoLha.png';

export default function Header() {
  const { formatMessage } = useIntl();
  const { activeLanguage, languageDispatch } = useLanguage();

  const [activeItem, setActiveItem] = useState(0);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems: string[] = ['home', 'aboutUs', 'partners', 'donate'];

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
          gridTemplateColumns: 'auto 1fr auto',
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
        {/* side BAr
        <IconButton
          // sx={{ display: { laptop: 'none', mobile: 'block' } }}
          onClick={openSidebar}
        >
          <Icon icon={MenuIcon} color="#2F3A45" />
        </IconButton> */}

        {/* <Sidebar
          open={sidebarOpen}
          onClose={closeSidebar}
          items={items}
          activeItem={activeItem}
          onItemClick={itemClick}
        /> */}
        <Box
          sx={{
            display: 'grid',
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
            display: 'grid',
            gridAutoFlow: 'column',
            alignItems: 'center',
            columnGap: 1.5,
          }}
        >
          <TextField
            size="small"
            select
            defaultValue={activeLanguage}
            onChange={() =>
              languageDispatch({
                type: activeLanguage === 'en' ? 'USE_FRENCH' : 'USE_ENGLISH',
              })
            }
            sx={{
              '&.MuiFormControl-root': {
                background: 'transparent',
              },
              '& .MuiInputBase-root': {
                background: 'transparent',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none !important',
              },
              '& .MuiSelect-select': {
                color: '#2F3A45',
                fontSize: 12,
                fontWeight: 600,
              },
            }}
          >
            {supportedLanguages.map((language, index) => (
              <MenuItem key={index} value={language}>
                {formatMessage({ id: language })}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" color="primary">
            {formatMessage({ id: 'makeADonation' })}
          </Button>
        </Box>
      </Toolbar>
    </Box>
  );
}
