import React from 'react';
import styled from 'styled-components';

const StyledResultsPanel = styled.div`
  background: linear-gradient(180deg, #7755ff 0%, #6943ff 0.01%, #2f2ce9 100%);
  width: 100%;
`;

export default function ResultsPanel() {
  return (
    <StyledResultsPanel>
      <h2>Your Results</h2>
    </StyledResultsPanel>
  );
}
