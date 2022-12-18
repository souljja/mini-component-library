/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const getStylesBySize = ({ $size }) => {
    switch ($size) {
        case "small": {
            return css`
              height: 8px;
            `;
        }
        case "medium": {
            return css`
              height: 12px;
            `;
        }
        default: {
            return css`
              height: 24px;
              padding: 4px;
              border-radius: 8px;
            `;
        }
    }
};

const Progress = styled.div`
  width: 370px;
  border-radius: 4px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  ${getStylesBySize};
`;

const ValueWrapper = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressValue = styled.div`
  height: 100%;
  background: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

const ProgressBar = ({value, size}) => {
    return (
        <Progress
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
            $size={size}
        >
            <VisuallyHidden>{value}</VisuallyHidden>
            <ValueWrapper>
                <ProgressValue style={{ transform: `translateX(-${100 - value}%)`}}/>
            </ValueWrapper>
        </Progress>
    );
};

export default ProgressBar;
