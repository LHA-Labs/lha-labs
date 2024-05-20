import { Box, Button, LinearProgress, Typography } from '@mui/material';
import SectionHeader from '../../components/Landing/SectionHeader';
import Image from 'next/image';
import { useIntl } from 'react-intl';

export default function JoinUs() {
  const { formatMessage } = useIntl();

  //TODO: Replace with actual data from api
  const targetMembers = 150;
  const totalActiveMembers = 70;
  const becomeMemberReasons = [
    {
      image: '/assets/joint-hands.png',
      title: 'soutien a la cause',
      description:
        'En devenant membre, vous soutenez directement la et les actions visant a ameliorer la qualite de vie des enfants en besoin',
    },
    {
      image: '/assets/group.png',
      title: 'Reseautages et partenariats',
      width: 150.21,
      description:
        'Vous pouvez elargir votre reseau en collaborant avec nos partenaires officiels et en participant a nos initiatives communautaires. Cela peut ouvrir des portes pour de nouvelles opportunites et collaborations enrichissantes.',
    },
    {
      image: '/assets/flowered-hand.png',
      title: 'Impact positif',
      description:
        "Vous contribuez directement a transformer des vies en soutenant des initiatives educatives pour les orphelins et les personnes vulnerables. Vous pouvez voir concretement l'impact positif de votre engagement",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          padding: { mobile: '30px 0', tablet: '103px 0' },
          gap: { mobile: '32px', tablet: '24px' },
          background: "url('/assets/team.png')",
          boxShadow: 'inset 0 0 0 2000px rgba(165, 0, 0, 0.45)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'grid',
          justifyItems: 'center',
          alignContent: 'center',
          height: '428px',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridAutoFlow: { laptop: 'column', mobile: 'row' },
            columnGap: 2,
            alignItems: 'center',
          }}
        >
          <Typography variant="h1" sx={{ color: 'white' }}>
            {formatMessage({ id: 'becomeMember' })}
          </Typography>
          <Button
            variant="contained"
            color="inherit"
            sx={{
              color: 'var(--primary)',
              bgcolor: 'white',
              '&:hover': {
                bgcolor: 'white',
              },
            }}
          >
            {`${formatMessage({
              id: 'objective',
            })}: ${targetMembers} ${formatMessage({ id: 'members' })}`}
          </Button>
        </Box>
        <Typography
          variant="h3"
          sx={{
            color: 'white',
            textAlign: 'center',
            width: { laptop: '45%', mobile: '100%' },
          }}
        >
          {formatMessage({ id: 'becomeMemberHeadline' })}
        </Typography>
        <Box sx={{ width: '60%', display: 'grid', rowGap: 2 }}>
          <LinearProgress
            variant="determinate"
            value={50}
            color="secondary"
            sx={{
              height: '16px',
              borderRadius: '10px',
              '& .MuiLinearProgress-bar': {
                borderRadius: '10px',
                backgroundColor: '#A0A3BD',
              },
            }}
          />
          <Typography
            variant="h3"
            sx={{ color: 'white', justifySelf: 'center' }}
          >
            {`${totalActiveMembers} ${formatMessage({ id: 'activeMembers' })}`}
          </Typography>
        </Box>
        <Button variant="contained" color="inherit" sx={{ color: 'black' }}>
          {formatMessage({ id: 'becomeMember' })}
        </Button>
      </Box>
      <Box
        sx={{
          padding: { mobile: '12px 32px', laptop: '48px 118px 56px 118px' },
          display: 'grid',
          rowGap: 3,
          backgroundImage: 'url(/assets/become_member_bg.png)',
          backgroundPosition: '101% -380px',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            rowGap: 2,
          }}
        >
          <SectionHeader title=" " subtitle="whyBecomeMember" />
          <Typography
            variant="body2"
            sx={{ fontWeight: 600, textAlign: 'center' }}
          >
            {formatMessage({ id: 'whyBecomeMemberSubtitle' })}
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridAutoFlow: { laptop: 'column', mobile: 'row' },
              gap: 3,
            }}
          >
            {becomeMemberReasons.map((reason, index) => (
              <Box
                key={index}
                sx={{
                  display: 'grid',
                  gap: 1.3,
                  justifyItems: 'center',
                  backgroundColor:
                    index % 2 ? 'var(--primary)' : 'rgba(165, 0, 0, 0.05)',
                  borderRadius: 1.2,
                  padding: '20px',
                  alignContent: 'start',
                }}
              >
                <Image
                  height={98}
                  width={reason.width ?? 98}
                  src={reason.image}
                  alt={reason.title}
                />
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 600,
                    color: index % 2 ? 'white' : 'var(--primary)',
                  }}
                >
                  {reason.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: 'center',
                    color: index % 2 ? 'white' : 'inherit',
                    fontWeight: 600,
                  }}
                >
                  {reason.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gap: 2 }}>
          <SectionHeader title=" " subtitle="monthlyDonationImportance" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              textAlign: { laptop: 'center', mobile: 'center' },
              width: { laptop: '80%', mobile: '100%' },
              justifySelf: 'center',
              lineHeight: 1.6,
            }}
          >
            {formatMessage({ id: 'monthlyDonationImportanceExplanation' })}
          </Typography>
          <Box
            sx={{
              display: 'grid',
              justifyContent: 'center',
              gridAutoFlow: 'column',
              gap: 1,
            }}
          >
            <Button variant="contained" color="primary">
              {formatMessage({ id: 'becomeMember' })}
            </Button>
            <Button variant="contained" color="inherit" sx={{ color: 'black' }}>
              {formatMessage({ id: 'inviteAFriend' })}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
