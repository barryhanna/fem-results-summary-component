import React from 'react';
import styled from 'styled-components';

const StyledPanelContainer = styled.div`
  display: flex;
`;
export default function PanelContainer({ children }) {
  return <StyledPanelContainer>{children}</StyledPanelContainer>;
}
