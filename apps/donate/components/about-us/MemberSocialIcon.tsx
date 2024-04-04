import { IconButton, Typography } from '@mui/material';
import {
  Facebook,
  Instagram,
  Linkedin,
  SocialX,
} from '../layout/Footer/SocialIcons';

export default function MemberSocialIcon({ link }: { link: string }) {
  if (
    !(
      link.includes('instagram') ||
      link.includes('x.com') ||
      link.includes('linkedin') ||
      link.includes('facebook')
    )
  )
    return null;
  return (
    <Typography component="a" href={link} target="_blank">
      <IconButton size="small">
        {link.includes('instagram') && (
          <Instagram socialHandle={link} sx={{ fontSize: '30px' }} />
        )}
        {link.includes('x.com') && (
          <SocialX socialHandle={link} sx={{ fontSize: '30px' }} />
        )}
        {link.includes('linkedin') && (
          <Linkedin socialHandle={link} sx={{ fontSize: '30px' }} />
        )}
        {link.includes('facebook') && (
          <Facebook socialHandle={link} sx={{ fontSize: '30px' }} />
        )}
      </IconButton>
    </Typography>
  );
}
