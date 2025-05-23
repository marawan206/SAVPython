export default function Metrics({ metrics }) {
  if (!metrics) return null
  return (
    <div className="mt-6 text-center text-lg font-medium text-gray-700 space-y-1">
      <p>
        🔄 <span className="font-semibold">Comparisons:</span> {metrics.comparisons}
      </p>
      <p>
        🔁 <span className="font-semibold">Swaps:</span> {metrics.swaps}
      </p>
    </div>
  )
}
