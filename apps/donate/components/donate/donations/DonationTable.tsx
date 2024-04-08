import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import { useIntl } from 'react-intl';

interface Donation {
  fullname: string;
  donation: number;
  last_donation: Date | number;
  id: number;
}

export function DonationTable() {
  const { formatMessage, formatNumber, formatDate } = useIntl();

  const [isLoadingDonations, setIsLoadingDonations] = useState<boolean>(false);
  const [donations, setDonations] = useState<Donation[]>([
    {
      donation: 5000,
      fullname: 'Tchakoumi Lorrain Kouatchoua',
      last_donation: new Date(),
      id: 1,
    },
    {
      donation: 10000,
      fullname: 'Mache Nguemete Ulriche Gaella',
      last_donation: new Date(),
      id: 2,
    },
  ]);

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: '#',
      width: 120,
      sortable: false,
    },
    {
      field: 'fullname',
      headerName: formatMessage({ id: 'donator' }),
      sortable: true,
      flex: 1,
    },
    {
      field: 'donation',
      headerName: formatMessage({ id: 'donated' }),
      sortable: true,
      flex: 1,
      valueGetter: (_, row: Donation) => formatNumber(row.donation),
    },
    {
      field: 'last_donation',
      headerName: formatMessage({ id: 'lastDonation' }),
      sortable: true,
      flex: 1,
      valueGetter: (_, row: Donation) =>
        formatDate(row.last_donation, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          weekday: 'short',
        }),
    },
  ];

  return (
    <DataGrid
      density="compact"
      hideFooter
      isRowSelectable={() => false}
      loading={isLoadingDonations}
      sx={{
        minHeight: '130px',
      }}
      rows={donations}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            page: 0,
            pageSize: 2,
          },
        },
      }}
      pageSizeOptions={[1, 2]}
    />
  );
}

export default DonationTable;
