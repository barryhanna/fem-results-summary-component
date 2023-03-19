import React from 'react';
import SummaryItem from './SummaryItem';

export default function SummaryPanel() {
  return (
    <div className="summary__panel flow">
      <h2>Summary</h2>
      <div className="summary__item-list">
        <SummaryItem category="Reaction" score={80}></SummaryItem>
        <SummaryItem category="Memory" score={92}></SummaryItem>
        <SummaryItem category="Verbal" score={61}></SummaryItem>
        <SummaryItem category="Visual" score={72}></SummaryItem>
      </div>
      <button>Continue</button>
    </div>
  );
}
