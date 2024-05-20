export interface ILetsHelpStat {
  label: string;
  value: number;
  unit?: string;
}

export function useStats() {
  const letsHelpStatistics: ILetsHelpStat[] = [
    { label: 'donors', value: 100 },
    { label: 'sponsors', value: 5 },
    { label: 'orphans', value: 300 },
    { label: 'partners', value: 2 },
    { label: 'receivedDonations', value: 1000000 },
  ];

  return letsHelpStatistics;
}
