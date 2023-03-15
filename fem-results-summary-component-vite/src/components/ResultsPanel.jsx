import React from 'react';

export default function ResultsPanel() {
  return (
    <div className="results__panel">
      <h2 className="results__panel-header centre">Your Results</h2>
      <p className="results__score centre">
        76<span>of 100</span>
      </p>
      <p className="result__summary centre">Great</p>
      <p className="results__description centre">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
