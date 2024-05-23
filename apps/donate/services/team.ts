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
      fullname: 'Ulriche Nguemete',
      role: formatMessage({ id: 'foundingPresident' }),
      imageRef: '',
      socials: {
        linkedin: 'https://linkedin.com/in/ulriche-nguemete',
      },
      messageFr: `Cette phrase qui dit : « Il y'a plus de bonheur à donner qu'à recevoir », j'ai commencé à la vivre depuis le jour où j'ai mis sur pied Let's Help Association. Je me suis rendu compte que ce ne sont pas juste des parole, ce sont des paroles vivantes. 

      J'ai toujours eu accès à l'éducation grâce aux merveilleux parents que Dieu m'a donné. Aujourd'hui je ne cesse de voir les bienfaits de mon parcours éducatif dans ma vie, je me suis juste posé la question de comment font ceux qui n'ont pas eu la grâce d'avoir des parents qui sont prêt à tout pour leur avenir ?

      Et c'est LHA qui est né !`,
      messageEn: `This saying, "There's more happiness in giving than in receiving", has been with me since the day I set up the Let's Help Association. I've come to realize that these aren't just words, they're living words. 

      I've always had access to education thanks to the wonderful parents God gave me. Today I can't stop seeing the benefits of my educational path in my life, I just asked myself how do those who haven't had the grace of having parents who are ready to do anything for their future?

      And LHA was born!`,
    },
    {
      fullname: 'Christiane Kiyang Possi',
      role: formatMessage({ id: 'treasurer' }),
      imageRef: '',
      socials: {
        linkedin: 'https://linkedin.com/in/christiane-kiyang-possi-33679322a',
      },
      messageFr:
        "Qui donne à un orphelin prête à Dieu, le bien fait ne se perd jamais  dans cette optique d'amour et de partage avec son prochain, penser à celui qui est dans le besoin devient non seulement un devoir pour notre conscience mais un plaisir pour notre âme. Donner sans attendre, recevoir comme récompense le sourire et la reconnaissance de ceux qui étaient en peine. C'est ça le vrai bonheur.",
      messageEn:
        "Whoever gives to an orphan lends to God, the good done is never lost in this optic of love and sharing with one's neighbor, thinking of those in need becomes not only a duty for our conscience but a pleasure for our soul. To give without waiting, to receive as a reward the smile and gratitude of those in need. That's true happiness.",
    },
    {
      fullname: 'Fatima Lélé',
      role: formatMessage({ id: 'secretary' }),
      imageRef: '',
      socials: {
        facebook: 'https://facebook.com/fati.towo',
      },
      messageFr: `
      Quoi de plus merveilleux que de dessiner un sourire sur un visage attristé les bonnes pensées font de nous des personnes heureuses c'est dans cet élan que je suis non seulement fière motivée et dévouée de faire partie de LHA car son but n'est rien d'autre que d'apporter du sourire à tout ces enfants défavorisés et dont la vie n'a pas toujours été rose pour eux et ceci avec un amour immense.

Il y'a pas de bonheur comme aimer et être aimé.

Qui touchera le coeur d'un Homme si l'âme d'un enfant ne la touche pas ?
« Ce que tu fais me touche ce que je fais te touche»

Si le Seigneur m'a fait grâce de me donner ce que d'autres n'ont pas c'est avec joie que je partagerai cela Parcequ'il y'a plus de joie à donner qu'à recevoir 
et le Partage est le fruit de l'esprit❤🤍❤
      `,
      messageEn: `
      What could be more wonderful than to draw a smile on a sad face? Good thoughts make us happy people. It's in this spirit that I'm not only proud, motivated and dedicated to be part of LHA, because its aim is nothing other than to bring a smile to all those underprivileged children whose lives haven't always been rosy, and to do so with immense love.
     
     There's no happiness like loving and being loved.
     
     Who can touch the heart of a man if the soul of a child does not touch it?
     "What you do touches me, what I do touches you".
     
     If the Lord has given me the grace to give what others don't have, it's with joy that I'll share it Because there's more joy in giving than in receiving 
     and Sharing is the fruit of the spirit❤🤍❤
           `,
    },
    {
      fullname: 'Ivan Bosso',
      role: formatMessage({ id: 'organisationManager' }),
      imageRef: '',
      socials: {
        linkedin: 'https://linkedin.com/in/ivan-jerome-b-09b21a1a1',
      },
      messageFr:
        "Le partage et l'entraide font partie de mes valeurs. Nous vivons dans un monde où beaucoup de personnes sont dans le besoin, et je suis convaincu que ceux d'entre nous qui ont été bénis par Dieu ont la responsabilité de tendre la main à ceux qui sont moins fortunés. Participer à cette association me permet non seulement de contribuer à un changement positif dans la vie des autres, mais aussi de vivre une expérience enrichissante. Il y a une joie immense à donner, une satisfaction profonde qui dépasse celle de recevoir. Voir les sourires, les espoirs renaître et les vies s'améliorer grâce à nos actions est une source d'inspiration constante pour moi. Ensemble, nous pouvons transformer des vies.",
      messageEn:
        "Sharing and helping others are part of my values. We live in a world where many people are in need, and I'm convinced that those of us who have been blessed by God have a responsibility to reach out to those less fortunate. Participating in this association allows me not only to contribute to a positive change in the lives of others, but also to have an enriching experience. There's an immense joy in giving, a deep satisfaction that exceeds that of receiving. Seeing smiles, hopes reborn and lives improved through our actions is a constant source of inspiration for me. Together, we can transform lives.",
    },
    {
      fullname: 'Jessica Noumey',
      role: formatMessage({ id: 'organisationAssistant' }),
      imageRef: '',
      socials: {
        linkedin: 'https://linkedin.com/in/jessica-kenza-2254a8248',
        facebook: 'https://facebook.com/nguena.jessica',
        instagram: 'https://instagram.com/nguenajessica',
      },
      messageFr: `Je suis honorée de faire partie de LHA non seulement parceque j'aime toute initiative ayant trait à apporter un soutien à autrui mais également parceaue la vision de LHA m'a transpercé!
      Juste l'idée de vouloir apporter son soutien à ceux dans le besoin est déjà une motivation assez grande et par dessus tout voir le sourire sur le visage de ses enfants apporte une joie immense que j'aimerai ressentir à chaque fois que j'en ai l'occasion!
      Tout le monde mérite d'une manière ou d'une autre d'être heureux et c'est notre manière à nous de leur arracher un sourire`,
      messageEn: `I'm honored to be part of LHA not only because I love any initiative that has to do with helping others, but also because the vision of LHA has pierced me!
        Just the idea of wanting to support those in need is motivation enough, and above all seeing the smiles on your children's faces brings an immense joy that I'd like to feel every time I get the chance!
        Everyone deserves to be happy in one way or another, and this is our way of bringing a smile to their faces`,
    },
    {
      fullname: 'Cyntiche Djoukouo',
      role: formatMessage({ id: 'technicalAssistant' }),
      imageRef: '',
      socials: {
        linkedin: 'https://linkedin.com/in/cyntiche-nguemete-2032b8234',
        instagram: 'https://www.instagram.com/cyntich_claira',
      },
      messageFr:
        "Je suis très honorée de faire partie de Let's Help Association. Mon engagement auprès des orphelins découle de ma profonde conviction que chaque enfant mérite amour et soutien. Je suis inspiré chaque jour par les sourires des enfants que nous aidons.",
      messageEn:
        "I am deeply honored to be part of Let's Help Association. My commitment to orphans stems from my deep belief that every child deserves love and support. I am inspired every day by the smiles of the children we help.",
    },
    {
      fullname: 'Kouatchoua Tchakoumi Lorrain',
      role: formatMessage({ id: 'technicalTeamLead' }),
      imageRef: '/assets/LorrainPic.png',
      messageEn:
        "There's nothing as exciting as empowering others to unleash their full potential. At Let's Help Association (LHA), we embody this principle, extending a special focus to the underprivileged. This ethos resonates deeply with my personal values, and I'm honored to be part of such a noble cause.",
      messageFr:
        "Rien n'est plus passionant que permettre aux autres de libérer leur plein potentiel. À LHA, nous incarnons ce principe, en accordant une attention particulière aux plus défavorisés. Cet ethos résonne profondément avec mes valeurs personnelles, et je suis honoré de faire partie d'une cause si noble.",
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
