import React from 'react';
import styled from 'styled-components';

const StyledSummaryItem = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 200px;
  align-items: center;
`;

export default function SummaryItem({ category, score }) {
  const iconSrc = `/assets/images/icon-${category.toLowerCase()}.svg`;

  return (
    <StyledSummaryItem>
      <img src={iconSrc} />
      <p>{category}</p>
      <p>{score} / 100</p>
    </StyledSummaryItem>
  );
}
