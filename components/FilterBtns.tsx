'use client';
import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useSearchParams } from 'next/navigation';

// FilterBtns component for displaying filter buttons
const FilterBtns = () => {
  const [filterType, setFilterType] = useState('all');
  const searchParams = useSearchParams();

  function updateFilters(filter: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('filter', filter);
    window.history.pushState(null, '', `?${params.toString()}`);
  }
  return (
    <ToggleButtonGroup
      exclusive
      value={filterType}
      onChange={(e, newValue) => setFilterType(newValue)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        direction: 'ltr',
        marginTop: '30px',
        fontSize: '18px',
      }}
    >
      <ToggleButton
        onClick={() => updateFilters('uncomplete')}
        value='incomplete'
      >
        غير المنجز
      </ToggleButton>

      <ToggleButton
        onClick={() => updateFilters('completed')}
        value='completed'
      >
        المنجز
      </ToggleButton>

      <ToggleButton onClick={() => updateFilters('all')} value='all'>
        الكل
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default FilterBtns;
