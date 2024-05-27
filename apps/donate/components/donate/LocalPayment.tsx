import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useIntl } from 'react-intl';

interface LocalPaymentProps {
  receivingNumber: string;
  receivingName: string;
  payLink?: string;
  serviceName: string;
  image: {
    ref: string;
    height: number;
    width: number;
  };
}
export default function LocalPayment({
  payLink,
  receivingName,
  receivingNumber,
  serviceName,
  image: { ref, height, width },
}: LocalPaymentProps) {
  const { formatMessage } = useIntl();
  return (
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
          rowGap: 0.5,
          justifyItems: 'center',
          width: 'fit-content',
        }}
      >
        <Image
          src={ref}
          alt={serviceName}
          height={height}
          width={width}
          loading="eager"
        />
        <Box sx={{ display: 'grid', justifyItems: 'center', paddingTop: 1 }}>
          <Typography variant="h2" sx={{ color: 'black' }}>
            {receivingNumber}
          </Typography>
          <Typography variant="body2">{`${formatMessage({
            id: 'name',
          })}: ${receivingName}`}</Typography>
        </Box>
      </Box>
      {payLink && (
        <Button
          variant="outlined"
          sx={{ justifySelf: { mobile: 'center', laptop: 'stretch' } }}
          size="small"
          color="primary"
          component="a"
          href={`tel:${payLink}`}
        >
          {formatMessage({ id: 'donateNow' })}
        </Button>
      )}
    </Box>
  );
}
