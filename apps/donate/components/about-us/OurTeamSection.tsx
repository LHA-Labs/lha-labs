import { Box, Divider } from '@mui/material';
import Scrollbars from 'rc-scrollbars';
import { useState } from 'react';
import { Member, useTeam } from '../../services/team';
import SectionHeader from '../Landing/SectionHeader';
import ActiveMember from './ActiveMember';
import TeamMember from './TeamMember';

export default function OurTeamSection() {
  const members: Member[] = useTeam();
  const [activeMemberIndex, setActiveMemberIndex] = useState<number>(0);
  const activeMember = members[activeMemberIndex];

  return (
    <Box
      sx={{
        display: 'grid',
        rowGap: 3,
        paddingBottom: 5,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          justifyItems: 'center',
          rowGap: 4,
          padding: { mobile: '0 32px', laptop: '0 118px' },
        }}
      >
        <SectionHeader title={'ourTeam'} subtitle={'ourTeamSubtitle'} />
        {members.length > 0 && <ActiveMember {...activeMember} />}
      </Box>
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Divider
          orientation="horizontal"
          sx={{
            position: 'absolute',
            border: '1px solid var(--primary)',
            width: '100%',
            top: '50%',
            transform: 'translate(0, -50%)',
            filter: 'drop-shadow(0px 0px 15.5px #F00)',
          }}
        />
        <Scrollbars autoHide universal style={{ height: '110px' }}>
          <Box
            sx={{
              display: 'grid',
              gridAutoFlow: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              columnGap: '18px',
              padding: { mobile: '0 20px', laptop: '0 100px' },
              marginLeft: '400px',
              marginRight: '400px',
            }}
          >
            {members.map((member, index) => (
              <TeamMember
                {...member}
                onSelect={() => setActiveMemberIndex(index)}
                isActive={index === activeMemberIndex}
                key={index}
              />
            ))}
          </Box>
        </Scrollbars>
      </Box>
    </Box>
  );
}
