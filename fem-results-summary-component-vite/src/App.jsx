import PanelContainer from './components/PanelContainer';
import ResultsPanel from './components/ResultsPanel';
import SummaryPanel from './components/SummaryPanel';

function App() {
  return (
    <div>
      <PanelContainer className="App">
        <ResultsPanel />
        <SummaryPanel />
      </PanelContainer>
    </div>
  );
}

export default App;
