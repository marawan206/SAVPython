export default function Controls({
  current,
  total,
  onPrev,
  onNext,
  onPlayPause,
  onReset,
  isPlaying,
  speed,
  setSpeed,
}) {
  return (
    <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
      <button
        onClick={onPrev}
        disabled={current === 0}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-400 to-blue-500 text-white disabled:opacity-50"
      >
        Prev
      </button>
      <button
        onClick={onPlayPause}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-400 to-teal-500 text-white"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <button
        onClick={onNext}
        disabled={current >= total - 1}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white disabled:opacity-50"
      >
        Next
      </button>
      <button
        onClick={onReset}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-400 to-pink-500 text-white"
      >
        Reset
      </button>
      <select
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border border-gray-300 shadow-inner"
        >
          <option value="slow">🐢 Slow</option>
          <option value="medium">🚶 Medium</option>
          <option value="fast">⚡ Fast</option>
      </select>
    </div>
  )
}
