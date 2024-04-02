export interface Member {
  fullname: string;
  role: string;
  message: string;
  imageRef: string;
  socials: Record<string, string>;
}

export function useTeam() {
  const members: Member[] = [
    {
      fullname: 'Tchakoumi Lorrain',
      role: 'Technial team lead',
      imageRef: '/assets/LorrainPic.png',
      message: `At Let's help association, our mission is to empower lives through compassionate initiatives. By promoting education and fostering sustainable solutions, we envision a brighter, and more lucrative life for all our disadvantaged orphans`,
      socials: {
        socialX: 'https://x.com',
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
    },
  ];
  return members;
}
