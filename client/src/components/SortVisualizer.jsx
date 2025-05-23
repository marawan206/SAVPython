import { useEffect, useState } from 'react'

export default function SortVisualizer({ algorithm }) {
  const initial = [5, 1, 4, 2, 8]
  const [steps, setSteps] = useState([])
  const [current, setCurrent] = useState(0)

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
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [algorithm])

  useEffect(() => {
    if (steps.length > 0 && current < steps.length - 1) {
      const id = setTimeout(() => setCurrent((c) => c + 1), 500)
      return () => clearTimeout(id)
    }
  }, [steps, current])

  const arr = steps[current]?.state || initial

  return (
    <div className="flex items-end justify-center space-x-1 h-40">
      {arr.map((v, i) => (
        <div
          key={i}
          style={{ height: `${v * 10}px` }}
          className="w-4 bg-blue-500"
        ></div>
      ))}
    </div>
  )
}
