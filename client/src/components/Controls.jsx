export default function Controls({ current, total, onPrev, onNext }) {
  return (
    <div className="mt-4 space-x-2">
      <button onClick={onPrev} disabled={current === 0}>
        Prev
      </button>
      <button onClick={onNext} disabled={current >= total - 1}>
        Next
      </button>
    </div>
  )
}
