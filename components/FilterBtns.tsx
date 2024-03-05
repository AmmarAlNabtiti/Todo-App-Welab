import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface FilterBtnsProps {
  setFilterType: React.Dispatch<
    React.SetStateAction<'all' | 'completed' | 'incomplete'>
  >;
  filterType: 'all' | 'completed' | 'incomplete';
}

// FilterBtns component for displaying filter buttons
const FilterBtns: React.FC<FilterBtnsProps> = ({
  setFilterType,
  filterType,
}) => {
  return (
    <ToggleButtonGroup
      exclusive
      value={filterType}
      onChange={(e, newValue) => setFilterType(newValue)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        direction: 'ltr', // Set text direction to left-to-right
        marginTop: '30px',
        fontSize: '18px',
      }}
    >
      <ToggleButton value='incomplete' aria-label='right aligned'>
        غير المنجز
      </ToggleButton>
      <ToggleButton value='completed' aria-label='centered'>
        المنجز
      </ToggleButton>
      <ToggleButton value='all' aria-label='left aligned'>
        الكل
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default FilterBtns;
