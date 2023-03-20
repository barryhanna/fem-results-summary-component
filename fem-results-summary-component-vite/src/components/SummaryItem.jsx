import React from 'react';

export default function SummaryItem({ category, score }) {
  const iconSrc = `/assets/images/icon-${category.toLowerCase()}.svg`;

  return (
    <div className={`summary__item summary__item-${category.toLowerCase()}`}>
      <div className="summary__item__icon">
        <img src={iconSrc} alt={category} />
        <p className="">{category}</p>
      </div>
      <p className="summary__item__score">
        <span>{score}</span> / 100
      </p>
    </div>
  );
}
