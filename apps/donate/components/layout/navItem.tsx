import { theme } from '@lha-labs/theme';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { INavItem } from './Header/Header';

interface INavItemProps {
  navItem: INavItem;
  handleLink?: () => void;
}

export function NavItem({
  navItem: { route, item },
  handleLink,
}: INavItemProps) {
  const { pathname } = useRouter();
  const { formatMessage } = useIntl();

  const isActiveItem = route === pathname;

  return (
    <Typography
      sx={{
        position: 'relative',
        transition: '0.2s',
        '& a': {
          textDecoration: 'none',
          ...theme.typography.body1,
          color: '#2F3A45',
          fontSize: '12px',
          fontWeight: 500,
        },
        '&::before': {
          transition: '0.2s',
          position: 'absolute',
          left: '0px',
          bottom: '-5px',
          height: '3px',
          content: '""',
          backgroundColor: theme.palette.primary.main,
          width: isActiveItem ? '100%' : 0,
          borderRadius: '5px',
        },
        '&:hover::before': {
          transition: '0.2s',
          width: '100%',
          backgroundColor:
            theme.palette[isActiveItem ? 'primary' : 'secondary'].main,
        },
      }}
    >
      <Link
        href={route}
        onClick={(e) => {
          if (handleLink) {
            e.preventDefault();
            handleLink();
          }
        }}
      >
        {formatMessage({ id: item })}
      </Link>
    </Typography>
  );
}
