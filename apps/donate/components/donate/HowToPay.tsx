import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import DonationTypeHeader from './DonationTypeHeader';
import LocalPayment from './LocalPayment';
import { useIntl } from 'react-intl';
import { useEffect, useState } from 'react';

export default function HowToPay() {
  const { formatMessage } = useIntl();

  const [fullUrl, setFullUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href);
    }
  }, []);
  const secretary_whatsapp = '+237691402170';
  const tags =
    '#lha #destitute-children #dons-en-nature #sourire-aux-orphelins';
  const becomeMemberMessage = `${formatMessage({
    id: 'becomePartnerMessageHeader',
  })}\n\n${formatMessage({
    id: 'donationBody',
  })}\n\n${formatMessage({
    id: 'becomePartnerMessageFooter',
  })}\n\n${tags}\n${fullUrl}`;

  const newMemberRef = `https://api.whatsapp.com/send/?phone=${secretary_whatsapp}&text=${encodeURIComponent(
    becomeMemberMessage
  )}`;

  return (
    <Box
      sx={{
        display: 'grid',
        rowGap: 2,
        padding: { mobile: '20px 32px', laptop: '24px 118px' },
        backgroundImage: 'url(/assets/how_to_pay_bg.png)',
        backgroundPosition: '0 -280px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box sx={{ display: 'grid', rowGap: 1 }}>
        <DonationTypeHeader
          position={1}
          title={formatMessage({ id: 'financialDonations' })}
        />
        <Box
          sx={{
            display: 'grid',
            gridAutoFlow: { laptop: 'column', mobile: 'row' },
            gap: 2,
            alignItems: 'start',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              justifyItems: 'center',
              gap: 2,
              height: '100%',
              gridTemplateRows: 'auto 1fr',
              alignItems: 'end',
            }}
          >
            <Box
              sx={{
                display: 'grid',
                rowGap: 1,
                justifyItems: 'center',
              }}
            >
              <Image
                src="/assets/paypal.png"
                alt="Dons Financiers"
                height={56}
                width={174.63}
                loading="eager"
              />
              <Typography variant="h4">
                www.paypay.me/ulrichenguemete
              </Typography>
            </Box>
            <Button
              variant="outlined"
              sx={{ justifySelf: { mobile: 'center', laptop: 'stretch' } }}
              size="small"
              color="primary"
              component="a"
              target="_blank"
              href="https://www.paypal.com/paypalme/ulrichenguemete"
            >
              {formatMessage({ id: 'donateNow' })}
            </Button>
          </Box>

          <LocalPayment
            payLink={encodeURIComponent('#150*11*695755959#')}
            receivingName="Possi Christiane"
            receivingNumber="695 755 959"
            image={{ ref: '/assets/om_logo.png', height: 56, width: 180.45 }}
          />

          <LocalPayment
            payLink="654002598"
            receivingName="Possi Christiane"
            receivingNumber="654 002 598"
            image={{ ref: '/assets/momo.png', height: 74, width: 109 }}
          />

          <LocalPayment
            receivingName="Ulriche Nguemete"
            receivingNumber="07 80 77 29 86"
            image={{ ref: '/assets/paylib.png', height: 56, width: 123.91 }}
          />
        </Box>
      </Box>

      <Box sx={{ display: 'grid', rowGap: 1 }}>
        <DonationTypeHeader
          position={2}
          title={formatMessage({ id: 'nonPerishableDonations' })}
        />
        <Box sx={{ display: 'grid', justifyItems: 'center', gap: 1 }}>
          <Typography sx={{ textAlign: 'center', color: 'black' }}>
            {formatMessage({ id: 'nonPerishableGoodDescription' })}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="_blank"
            href={newMemberRef}
          >
            {formatMessage({ id: 'contactUs' })}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
