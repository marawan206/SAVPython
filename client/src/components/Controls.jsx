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
      {/** Prev **/}
      <button
        onClick={onPrev}
        disabled={current === 0}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-400 to-blue-500 text-white disabled:opacity-50 shadow"
      >
        Prev
      </button>

      {/** Play / Pause **/}
      <button
        onClick={onPlayPause}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-400 to-teal-500 text-white shadow"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      {/** Next **/}
      <button
        onClick={onNext}
        disabled={current >= total - 1}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white disabled:opacity-50 shadow"
      >
        Next
      </button>

      {/** Reset **/}
      <button
        onClick={onReset}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-400 to-pink-500 text-white shadow"
      >
        Reset
      </button>

      {/** Speed Selector **/}
      <select
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
        className="px-4 py-2 rounded-lg bg-white border border-gray-300 shadow-inner"
      >
        <option value="slow">🐢 Slow</option>
        <option value="medium">🚶 Medium</option>
        <option value="fast">⚡ Fast</option>
      </select>
    </div>
  );
}
