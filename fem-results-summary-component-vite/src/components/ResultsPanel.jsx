import React from 'react';

export default function ResultsPanel() {
  return (
    <div className="results__panel">
      <h2 className="results__panel-header centre">Your Results</h2>
      <p className="results__score centre">
        76<span>of 100</span>
      </p>
      <p>Great</p>
      <p className="results__description">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
