import React from 'react';

import MainSection from '../components/UI/MainSection';
import MainHeroCard from '../components/HeroCards/MainHeroCard';
import DiceHeroCard from '../components/HeroCards/DiceHeroCard';
import CurrencyListHeroCard from '../components/HeroCards/CurrencyListHeroCard';

import LiveTableBets from '../components/Navigation/LiveTableBets/LiveTableBets';

function Home() {
  return (
    <MainSection id="home-lobby" className="home-classes">
      <MainHeroCard />
      <DiceHeroCard />
      <CurrencyListHeroCard />
      <LiveTableBets />
    </MainSection>
  );
}

export default Home;
