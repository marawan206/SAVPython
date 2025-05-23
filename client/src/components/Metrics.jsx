export default function Metrics({ metrics }) {
  if (!metrics) return null;
  return (
    <div className="mt-6 text-center text-lg font-medium text-gray-800 space-y-2">
      <p>🔍 Comparisons: <span className="font-semibold">{metrics.comparisons}</span></p>
      <p>🔄 Swaps:       <span className="font-semibold">{metrics.swaps}</span></p>
    </div>
  );
}
