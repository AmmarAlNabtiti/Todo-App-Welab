import React from 'react';
import Logo from './Logo';
import FilterBtns from './FilterBtns';
import { Suspense } from 'react';

const Header = () => {
  return (
    <>
      <Logo />
      <Suspense fallback={<div>Loading...</div>}>
        <FilterBtns />
      </Suspense>
    </>
  );
};

export default Header;
