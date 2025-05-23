import React, { useEffect, useState, useRef } from 'react'
import Metrics from './Metrics.jsx'
import Controls from './Controls.jsx'

export default function SortVisualizer({ algorithm }) {
  const initial = [5, 1, 4, 2, 8]
  const [steps, setSteps] = useState([])
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState('medium')
  const intervalRef = useRef(null)

  // 1) Fetch new steps whenever the selected algorithm changes
  useEffect(() => {
    async function fetchData() {
      console.log('→ sending:', { algorithm, array: initial })
      try {
        const res = await fetch('/sort', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ algorithm, array: initial }),
        })
        const data = await res.json()
        console.log('← received:', data)
        setSteps(data.steps || [])
        setCurrent(0)
        setIsPlaying(false)
      } catch (err) {
        console.error('Fetch error:', err)
      }
    }
    fetchData()

    // Clean up any interval if the algorithm changes
    return () => clearInterval(intervalRef.current)
  }, [algorithm])

  // 2) Play / Pause Effect
  useEffect(() => {
    if (!isPlaying) return
    const delay = speed === 'fast' ? 200 : speed === 'medium' ? 500 : 1000

    intervalRef.current = setInterval(() => {
      setCurrent((c) => {
        if (c >= steps.length - 1) {
          clearInterval(intervalRef.current)
          setIsPlaying(false)
          return c
        }
        return c + 1
      })
    }, delay)

    return () => clearInterval(intervalRef.current)
  }, [isPlaying, speed, steps.length])

  const arr = steps[current]?.state || initial
  const metrics = steps[current]?.metrics

  // Reset handler
  const handleReset = () => {
    setIsPlaying(false)
    setCurrent(0)
  }

  return (
    <div className="flex flex-col items-center w-full">
      {/* Bar Container */}
      <div className="flex items-end justify-center space-x-2 h-64 w-full bg-white p-4 rounded-lg shadow-xl">
        {arr.map((v, i) => (
          <div
            key={i}
            style={{ height: `${v * 10}px` }}
            className="w-6 bg-gradient-to-t from-green-300 to-blue-500 rounded-lg transition-all duration-300"
          />
        ))}
      </div>

      {/* Metrics Display */}
      <Metrics metrics={metrics} />

      {/* Playback & Step Controls */}
      <Controls
        current={current}
        total={steps.length}
        onPrev={() => {
          setIsPlaying(false)
          setCurrent((c) => Math.max(0, c - 1))
        }}
        onNext={() => {
          setIsPlaying(false)
          setCurrent((c) => Math.min(steps.length - 1, c + 1))
        }}
        onPlayPause={() => setIsPlaying((p) => !p)}
        onReset={handleReset}
        isPlaying={isPlaying}
        speed={speed}
        setSpeed={setSpeed}
      />
    </div>
  )
}
