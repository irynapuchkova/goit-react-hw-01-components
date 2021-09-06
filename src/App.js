import Container from './components/Container/Container';
import Section from './components/Section /Section';

import Profile from './components/Profile_comp/Profile';
import user from './components/Profile_comp/user.json';

import Statistics from './components/Statistics_section/Statistics';
import statData from './components/Statistics_section/statistical-data.json';

import FriendList from './components/FriendsList_comp/FriendList';
import friends from './components/FriendsList_comp/friends.json';

import TransactionHistory from './components/Transactions/TransactionHistory';
import transactions from './components/Transactions/transactions.json';

export default function App() {
  return (
    <Container>
      <Section>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section>
        <Statistics stats={statData} />
      </Section>

      <Section>
        <FriendList friends={friends} />
      </Section>

      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </Container>
  );
}
