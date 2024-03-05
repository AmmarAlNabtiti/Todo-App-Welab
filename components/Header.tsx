
import React from 'react';
import Logo from './Logo';
import FilterBtns from './FilterBtns';

interface HeaderProps {
  setFilterType: React.Dispatch<
    React.SetStateAction<'all' | 'completed' | 'incomplete'>
  >;
  filterType: any;
}

const Header: React.FC<HeaderProps> = ({ setFilterType, filterType }) => {
  return (
    <>
      <Logo />
      <FilterBtns filterType={filterType} setFilterType={setFilterType} />
    </>
  );
};

export default Header;
