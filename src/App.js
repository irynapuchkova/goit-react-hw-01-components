import Profile from './components/Profile_comp/Profile';
import Statistics from './components/Statistics_section/Statistics';
import user from './components/Profile_comp/user.json';
import statData from './components/Statistics_section/statistical-data.json';

import Section from './components/Statistics_section/Section';



export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes} />
      <Section>
        <Statistics stats={statData} />
      </Section>
      {/* <Section /> */}
      
    </div>
  );
}