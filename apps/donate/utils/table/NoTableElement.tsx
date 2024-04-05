import { TableCell, TableRow } from '@mui/material';
import { useIntl } from 'react-intl';

interface NoTableElementProps {
  cols?: number;
  message?: string;
}
export function NoTableElement({ cols = 5, message }: NoTableElementProps) {
  const { formatMessage } = useIntl();
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell colSpan={cols} align="center">
        {message ?? formatMessage({ id: 'nothingToDisplay' })}
      </TableCell>
    </TableRow>
  );
}
