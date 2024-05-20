import { useIntl } from 'react-intl';

export interface Member {
  fullname: string;
  role: string;
  messageEn: string;
  messageFr: string;
  imageRef: string;
  socials: Record<string, string>;
}

export function useTeam() {
  const { formatMessage } = useIntl();
  const members: Member[] = [
    {
      fullname: 'Kouatchoua Tchakoumi Lorrain',
      role: formatMessage({ id: 'technicalTeamLead' }),
      imageRef: '/assets/LorrainPic.png',
      messageEn:
        "There's no greater good than empowering others to unleash their full potential. At Let's Help Association (LHA), we embody this principle, extending a special focus to the underprivileged. This ethos resonates deeply with my personal values, and I'm honored to be part of such a noble cause.",
      messageFr:
        "Rien n'est plus grand que permettre aux autres de libérer leur plein potentiel. À LHA, nous incarnons ce principe, en accordant une attention particulière aux plus défavorisés. Cet ethos résonne profondément avec mes valeurs personnelles, et je suis honoré de faire partie d'une cause si noble.",
      socials: {
        socialX: 'https://x.com/ltchakoumi',
        // instagram: 'https://instagram.com',
        // facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com/in/ltchakoumi',
      },
    },
  ];
  return members;
}
