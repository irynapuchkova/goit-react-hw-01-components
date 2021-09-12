import Container from './components/Container/Container';
import Section from './components/Section /Section';

import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import statData from './components/Statistics/statistical-data.json';

import FriendList from './components/FriendsList/FriendList';
import friends from './components/FriendsList/friends.json';

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
        <Statistics title="Upload stats" stats={statData} />
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
