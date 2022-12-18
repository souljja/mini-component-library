import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const iconSizes = {
    small: 16,
    large: 24,
}

const Label = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  color: currentColor;
  font-weight: 700;
  width: 100%;
  border: none;
  border-bottom-color: ${COLORS.black};
  border-bottom-style: solid;
  outline-offset: 2px;

  ${({$size}) => $size === "small" ? css`
    border-bottom-width: 1px;
    font-size: 0.875rem;
    line-height: 1rem;
    padding: 5px 0 4px ${iconSizes[$size] * 1.5}px;
  ` : css`
    border-bottom-width: 2px;
    font-size: 1.25rem;
    line-height: 1.875rem;
    padding: 8px 0 7px ${iconSizes[$size] * 1.5}px;
  `};
  
  &::placeholder {
    font-weight: 400;
  }
`;
const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => (
    <Label style={{width}}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <IconWrapper>
            <Icon id={icon} size={iconSizes[size]}/>
        </IconWrapper>
        <Input placeholder={placeholder} $size={size}/>
    </Label>
);
export default IconInput;
