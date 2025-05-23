import { useEffect, useState, useRef } from 'react'
import Metrics from './Metrics.jsx'
import Controls from './Controls.jsx'

export default function SortVisualizer({ algorithm }) {
  const initial = [5, 1, 4, 2, 8]
  const [steps, setSteps] = useState([])
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState('medium')
  const intervalRef = useRef(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:5000/sort', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ algorithm, array: initial })
        })
        const data = await res.json()
        setSteps(data.steps || [])
        setCurrent(0)
        setIsPlaying(false)
        clearInterval(intervalRef.current)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [algorithm])

  useEffect(() => {
    if (isPlaying) {
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
    } else {
      clearInterval(intervalRef.current)
    }

    return () => clearInterval(intervalRef.current)
  }, [isPlaying, speed, steps.length])

  const arr = steps[current]?.state || initial
  const metrics = steps[current]?.metrics

  return (
    <>
      <div className="flex items-end justify-center space-x-1 h-48 mt-4">
        {arr.map((v, i) => (
          <div
            key={i}
            style={{ height: `${v * 10}px` }}
            className="w-5 bg-blue-500 rounded transition-all duration-300"
          ></div>
        ))}
      </div>
      <Metrics metrics={metrics} />
      <Controls
        current={current}
        total={steps.length}
        onPrev={() => setCurrent((c) => Math.max(0, c - 1))}
        onNext={() => setCurrent((c) => Math.min(steps.length - 1, c + 1))}
        onPlayPause={() => setIsPlaying((p) => !p)}
        onReset={() => setCurrent(0)}
        isPlaying={isPlaying}
        speed={speed}
        setSpeed={setSpeed}
      />
    </>
  )
}
