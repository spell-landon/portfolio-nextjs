import { Navigation } from '../components/Navigation';
import { WelcomeWrapper } from '../components/WelcomeWrapper';
import { Welcome } from '../components/Welcome';
import { Projects } from '../components/Projects';

export default function Home() {
  return (
    <div className='bg-darkGray h-screen w-screen flex justify-center items-start lg:items-center p-4'>
      <WelcomeWrapper>
        <header className='w-full'>
          <Navigation />
        </header>

        <main className='flex gap-8 justify-between flex-col lg:flex-row'>
          <Welcome />
          <Projects />
        </main>
      </WelcomeWrapper>
    </div>
  );
}
