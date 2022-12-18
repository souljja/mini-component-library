import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';

const SelectContent = styled.div`
  height: 100%;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 24px;
  grid-column-gap: 24px;
  padding: 12px 16px;
  border-radius: 8px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
`;

const NativeSelect = styled.select`
  position: absolute;
  appearance: none;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const SelectWrapper = styled.div`
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  width: max-content;
  
  ${NativeSelect}:focus + ${SelectContent} {
    outline: 2px solid #4374CB;
  }

  ${NativeSelect}:hover + ${SelectContent} {
    color: ${COLORS.black};
  }
  
`;

const Select = ({label, value, onChange, children}) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <SelectWrapper>
            <NativeSelect value={value} onChange={onChange}>
                {children}
            </NativeSelect>
            <SelectContent>
                <span aria-hidden>{displayedValue}</span>
                <Icon id="chevron-down" strokeWidth={1} size={24}/>
            </SelectContent>
        </SelectWrapper>
    );
};

export default Select;
