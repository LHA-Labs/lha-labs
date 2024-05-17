import {
  Box,
  Button,
  LinearProgress,
  Tooltip,
  Typography,
} from '@mui/material';
import SectionHeader from 'apps/donate/components/Landing/SectionHeader';
import Image from 'next/image';

export default function JoinUs() {
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
        <Box>
          <Typography variant="h1">Devenir Membre</Typography>
        </Box>
        <Typography>
          Rejoignez-nous et beneficiez de partenariats strategieques pour
          developper votre reseau et maximiser votre impact
        </Typography>
        <Tooltip title="50%" arrow>
          <LinearProgress variant="determinate" value={50} />
        </Tooltip>
        <Typography>70 Membres Actifs</Typography>
        <Button variant="contained" color="inherit">
          Devenir membre
        </Button>
      </Box>
      <Box
        sx={{
          padding: { laptop: '0 118px 56px 118px', mobile: '0' },
          display: 'grid',
          rowGap: 3,
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
            Devenez membre et decouvrez les opportunites de partenariat
            exclusidves qui enrichiront votre quotidien et votre reseau
          </Typography>
          <Box sx={{ display: 'grid', gridAutoFlow: 'column', gap: 3 }}>
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
          <SectionHeader title=" " subtitle="L'importance des dons mensuels" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              textAlign: 'center',
              width: '80%',
              justifySelf: 'center',
              lineHeight: 1.6,
            }}
          >
            Les dons mensuels sont essentiels pour la viabilité financiere a
            long terme d'une association a but non lucratif. En fournissant une
            source de revenus reguliere et previsibe,il permettent a
            l'association de planifier ses activites et de repondre aux besoins
            de maniere efficace et constante. De plus, les dons mensuels
            favorisent la fidelisation des donateurs en renforcant leur
            engagement et leur sentiment d'appartenance a la cause et en creant
            un engagement continu, ce qui contribue a assurer la durabilite et
            l'impact a long terme de l'association dans sa mission humanitaire.
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
              Devenir membre
            </Button>
            <Button variant="contained" color="inherit">
              Inviter un ami
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
