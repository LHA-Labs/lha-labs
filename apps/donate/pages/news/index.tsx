import calendar from '@iconify-icons/fluent/calendar-arrow-counterclockwise-24-regular';
import location from '@iconify-icons/fluent/location-24-regular';
import { Icon } from '@iconify/react';
import { Box, Button, Chip, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import SectionHeader from '../../components/Landing/SectionHeader';

export default function News() {
  const { formatDate, formatMessage } = useIntl();
  //TODO: CALL API HERE TO FETCH THIS VALUE
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const eventDate = new Date('2024-09-31T23:59:59');
  const eventLocation = 'Yaounde, Cameroun';
  const [timeSegments, setTimeSegments] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const hoursToEvent = Math.floor(
        (eventDate.getTime() - Date.now()) / (1000 * 60 * 60)
      );
      const daysToEvent = Math.floor(hoursToEvent / 24);
      const hoursToEventInDay = hoursToEvent % 24;
      const minutesToEvent = Math.floor(
        (eventDate.getTime() - Date.now()) / (1000 * 60)
      );
      const secondsToEvent = Math.floor(
        (eventDate.getTime() - Date.now()) / 1000
      );
      setTimeSegments({
        days: daysToEvent,
        hours: hoursToEventInDay,
        minutes: minutesToEvent % 60,
        seconds: secondsToEvent % 60,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <Box
      sx={{
        backgroundImage: 'url(/assets/become_member_bg.png)',
        backgroundPosition: '100% 0px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        sx={{
          padding: { mobile: '30px 0', tablet: '103px 0' },
          gap: { mobile: '32px', tablet: '24px' },
          background: "url('/assets/news_bg.png')",
          boxShadow: 'inset 0 0 0 2000px rgba(165, 0, 0, 0.45)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'grid',
          justifyItems: 'center',
          alignContent: 'center',
          height: '200px',
        }}
      >
        <Typography variant="h1" sx={{ color: 'white' }}>
          {formatMessage({ id: 'ourNews' })}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: 'white',
            textAlign: 'center',
            width: { laptop: '45%', mobile: '100%' },
          }}
        >
          {formatMessage({ id: 'ourNewsSubtitle' })}{' '}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          justifyItems: 'center',
          rowGap: 2,
          padding: { mobile: '12px 32px', laptop: '48px 118px 56px 118px' },
        }}
      >
        <SectionHeader title="ourNews" subtitle="ourNewsSubtitle2" />
        <Typography
          sx={{
            color: 'var(--primary)',
            textAlign: 'center',
            fontFamily: 'Nosifer',
            fontSize: { laptop: '48px', mobile: '20px' },
          }}
        >
          {formatMessage({ id: 'weAreComingSoon' })}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridAutoFlow: 'column',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          {Object.keys(timeSegments).map((key, index) => (
            <Box
              key={index}
              sx={{
                bgcolor: 'var(--primary)',
                padding: 1,
                borderRadius: 1,
                display: 'grid',
                rowGap: 0.5,
                justifyItems: 'center',
                minWidth: '80px',
              }}
            >
              <Typography variant="h2" sx={{ color: 'white' }}>
                {timeSegments[key as keyof typeof timeSegments]}
              </Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>
                {formatMessage({ id: key })}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: 'grid',
            justifyContent: 'center',
            justifyItems: 'center',
            rowGap: 1,
          }}
        >
          <Typography variant="h1" sx={{ color: 'black' }}>
            {"Descente a l'Orphelinat de Noul"}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <Icon icon={calendar} fontSize={24} color="var(--primary)" />
              <Typography
                sx={{
                  fontWeight: 'var(--medium)',
                  fontSize: '12px',
                  lineHeight: '16px',
                }}
              >
                {formatDate(eventDate, {
                  year: 'numeric',
                  day: 'numeric',
                  month: 'short',
                  hour: 'numeric',
                  minute: 'numeric',
                })}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
                paddingLeft: '20px',
              }}
            >
              <Icon icon={location} fontSize={24} color="var(--primary)" />
              <Typography
                sx={{
                  fontWeight: 'var(--medium)',
                  fontSize: '12px',
                  lineHeight: '16px',
                }}
              >
                {eventLocation}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            textAlign: 'center',
            width: { laptop: '60%', mobile: '100%' },
            justifySelf: 'center',
            lineHeight: 1.6,
          }}
        >
          {`Revivez avec nous notre événement phare de l'année dernière, où nous
          avons uni nos efforts pour offrir des packs scolaires à des orphelins.
          Revivez avec nous notre événement phare de l'année dernière, où nous
          avons uni nos efforts pour offrir des packs scolaires à des orphelins.`}
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
            {formatMessage({ id: 'makeADonation' })}
          </Button>
          <Button variant="contained" color="inherit" sx={{ color: 'black' }}>
            {formatMessage({ id: 'registerForVisit' })}
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gap: 2,
          columnGap: 4,
          alignItems: 'center',
          backgroundColor: 'rgba(165, 0, 0, 0.05)',
          gridTemplateColumns: { mobile: '1fr', laptop: '490px 1fr' },
          padding: { mobile: '12px 32px', laptop: '48px 118px 48px 118px' },
        }}
      >
        <Image
          src="/assets/news_1.png"
          alt="un Orphelin Un pack scolaire"
          width={400}
          height={400}
          loading="eager"
        />
        <Box
          sx={{
            display: 'grid',
            rowGap: 2,
            alignContent: 'start',
            justifyItems: 'start',
          }}
        >
          <Box sx={{ display: 'grid', rowGap: 1, justifyItems: 'start' }}>
            <Typography variant="h1">Un Orphelin Un pack scolaire</Typography>
            <Chip
              variant="filled"
              label="Notre dernier action"
              color="warning"
              icon={<Icon icon={calendar} fontSize={18} color="#FF9200" />}
              sx={{
                '&.MuiChip-root': {
                  backgroundColor: 'rgba(255, 146, 0, 0.15)',
                  color: '#FF9200',
                  fontWeight: 500,
                  fontSize: '14px',
                },
              }}
            />
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              textAlign: 'justify',
              justifySelf: 'center',
              lineHeight: 1.6,
            }}
          >
            {`Revivez avec nous notre événement phare de l'année dernière, où nous
            avons uni nos efforts pour offrir des packs scolaires à des
            orphelins. Ensemble, nous avons écrit des chapitres dd'espoir et
            d'opportunités, donnant aux enfants les outils enssentiels pour
            poursuivre leur éducation avec confiance et dignité.`}
          </Typography>
          <Button variant="contained" color="primary">
            {formatMessage({ id: 'gallery' })}
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gap: 2,
          columnGap: 4,
          alignItems: 'center',
          gridTemplateColumns: { mobile: '1fr', laptop: '1fr 490px' },
          padding: { mobile: '12px 32px', laptop: '48px 118px 48px 118px' },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            rowGap: 2,
            alignContent: 'start',
            justifyItems: 'start',
          }}
        >
          <Box sx={{ display: 'grid', rowGap: 1, justifyItems: 'start' }}>
            <Typography variant="h1">
              {"Descente a l'Orphelinat Emrode"}
            </Typography>
            <Chip
              variant="filled"
              label="Janvier 2023"
              color="warning"
              icon={<Icon icon={calendar} fontSize={18} color="#FF9200" />}
              sx={{
                '&.MuiChip-root': {
                  backgroundColor: 'rgba(255, 146, 0, 0.15)',
                  color: '#FF9200',
                  fontWeight: 500,
                  fontSize: '14px',
                },
              }}
            />
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              textAlign: 'justify',
              justifySelf: 'center',
              lineHeight: 1.6,
            }}
          >
            {`Pour l'organisation de l'événement "1 orphelin, 1 pack scolaire
            2023" , nous avons effectué une visite sur le terrain pour
            comprendre les besoins spécifiques des enfants visés, afin de mieux
            les soutenir pour la rentrée scolaire 2023/2024.`}
          </Typography>
          <Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                textAlign: 'justify',
                justifySelf: 'center',
                lineHeight: 1.6,
              }}
            >
              {`En date du 1er Aout 2023, nous avons effectué une descente dans 3
              orphelinats dans la ville de Douala de 12H00 à 19H30.`}
            </Typography>
            <Box sx={{ display: 'grid', rowGap: 0.5, paddingLeft: 2 }}>
              {[
                'Orphelinat Compassion',
                'Orphelinat notre dame des victoires',
                'Orphelinat oeuvre Malika',
              ].map((orphanage, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    columnGap: 1,
                    alignItems: 'center',
                  }}
                >
                  <Icon icon={location} fontSize={18} color="var(--primary)" />
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    {orphanage}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Button variant="contained" color="primary">
            {formatMessage({ id: 'gallery' })}
          </Button>
        </Box>
        <Image
          src="/assets/news_2.png"
          alt="un Orphelin Un pack scolaire"
          width={400.24}
          height={490}
          loading="eager"
        />
      </Box>

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
          height: '275px',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            width: { laptop: '60%', mobile: '100%' },
            textAlign: 'center',
          }}
        >
          {formatMessage({ id: 'joinLetsHelpMessage' })}
        </Typography>
        <Button variant="contained" color="inherit" sx={{ color: 'black' }}>
          {formatMessage({ id: 'becomeMember' })}
        </Button>
      </Box>
    </Box>
  );
}
