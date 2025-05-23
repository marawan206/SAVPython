import React, { useState } from 'react'
import TabNav from './components/TabNav.jsx'
import SortVisualizer from './components/SortVisualizer.jsx'
import Team from './components/Team.jsx'

const algorithms = ['quick', 'heap']

export default function App() {
  // Which “page” are we on?
  const [page, setPage] = useState('visualizer')
  // Which algorithm is selected?
  const [algorithm, setAlgorithm] = useState(algorithms[0])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center p-6">
      {/* Top Navigation */}
      <header className="flex space-x-4 mb-8">
        <button
          onClick={() => setPage('visualizer')}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            page === 'visualizer'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Visualizer
        </button>
        <button
          onClick={() => setPage('team')}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            page === 'team'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Team
        </button>
      </header>

      {/* Main Content Area */}
      {page === 'visualizer' ? (
        <div className="w-full max-w-3xl flex flex-col items-center space-y-6">
          {/* Algorithm Tabs */}
          <TabNav
            tabs={algorithms}
            current={algorithm}
            onChange={setAlgorithm}
          />

          {/* Visualizer (key forces remount/reset on algorithm change) */}
          <SortVisualizer key={algorithm} algorithm={algorithm} />
        </div>
      ) : (
        <Team />
      )}
    </div>
  )
}
