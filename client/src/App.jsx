import { useState } from 'react'
import TabNav from './components/TabNav.jsx'
import SortVisualizer from './components/SortVisualizer.jsx'
import Team from './components/Team.jsx'
import './App.css'

const algorithms = ['Quick', 'Heap']
// TODO -- UPDATE THE ALGOS ONCE THEYRE IMPLEMENTED AGAIN
// 'Bubble', 'Selection', 'Insertion', 'Merge', 

function VisualizerPage() {
  const [algorithm, setAlgorithm] = useState(algorithms[0])
  return (
    <div>
      <TabNav tabs={algorithms} current={algorithm} onChange={setAlgorithm} />
      <SortVisualizer algorithm={algorithm} />
    </div>
  )
}

function App() {
  const [page, setPage] = useState('visualizer')
  return (
    <>
      <header className="mb-4 space-x-2">
        <button onClick={() => setPage('visualizer')}>Visualizer</button>
        <button onClick={() => setPage('team')}>Team</button>
      </header>
      {page === 'team' ? <Team /> : <VisualizerPage />}
    </>
  )
}

export default App
