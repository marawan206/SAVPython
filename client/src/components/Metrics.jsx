export default function Metrics({ metrics }) {
  if (!metrics) return null
  return (
    <div className="mt-4 text-left">
      <p>Comparisons: {metrics.comparisons}</p>
      <p>Swaps: {metrics.swaps}</p>
    </div>
  )
}
