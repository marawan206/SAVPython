import React from 'react'

export default function TabNav({ tabs, current, onChange }) {
  return (
    <div className="flex border-b mb-4 space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 ${current === tab ? 'border-b-2 border-blue-500 font-bold' : 'text-gray-500'}`}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
