export interface ILetsHelpStat {
  label: string;
  value: number;
  unit?: string;
}

export function useStats() {
  const letsHelpStatistics: ILetsHelpStat[] = [
    { label: 'donors', value: 100 },
    { label: 'sponsors', value: 15 },
    { label: 'orphans', value: 500 },
    { label: 'partners', value: 16 },
    { label: 'receivedDonations', value: 2000000 },
  ];

  return letsHelpStatistics;
}
