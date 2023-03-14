import React from 'react';
import styled from 'styled-components';

const StyledPanelContainer = styled.div`
  display: flex;
  border-radius: 2rem;
  overflow: clip;
`;
export default function PanelContainer({ children }) {
  return <StyledPanelContainer>{children}</StyledPanelContainer>;
}
