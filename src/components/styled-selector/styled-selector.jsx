// import { useState } from 'react';
import Select from 'react-select';
import printedFontList from '../../printed-font-list';

export const groupedOptions = [
    {
    label: 'Native Fonts',
    options: [
        {label: 'serif'},
        {label: 'sans-serif'},
        {label: 'cursive'},
        
    ],
    },
    {
        label: 'Standard Fonts',
        options: printedFontList,
    },
];

const fontStyles = {
    control: (styles) => ({ ...styles, fontSize: '1.5rem', backgroundColor: 'white' }),
    option: (styles, { data }) => {
      return {
        ...styles,
        fontSize: '1.5rem',
        fontFamily: `${data.label}, sans-serif`,
        backgroundColor: 'white' 
      };
    }
  };

export default function StyledSelector() {    
    return (
        <>
            <Select
                options={groupedOptions}
                styles={fontStyles}
                placeholder={'Saisissez votre police...'}
            />
        </>
    );
}