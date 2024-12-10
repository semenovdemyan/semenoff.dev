import { RadioSlider } from '../../Components/RadioSlider/RadioSlider';
import { Cube } from '../../Components/Cube/Cube';
import React from 'react';

export const Start: React.FC<{ lang?: 'ru' | 'en' }> = () => {
  return (
    <>
      <RadioSlider />
      <Cube />
    </>
  );
};
