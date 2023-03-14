import React from 'react';

export default function SummaryItem({ category, score }) {
  const iconSrc = `/assets/images/icon-${category.toLowerCase()}.svg`;

  return (
    <div className="summary__item">
      <img src={iconSrc} />
      <p>{category}</p>
      <p>{score} / 100</p>
    </div>
  );
}
