import React from 'react';

export default function SummaryItem({ category, score }) {
  const iconSrc = `/assets/images/icon-${category.toLowerCase()}.svg`;

  return (
    <div className={`summary__item summary__item-${category.toLowerCase()}`}>
      <img src={iconSrc} />
      <p className="">{category}</p>
      <p>{score} / 100</p>
    </div>
  );
}
