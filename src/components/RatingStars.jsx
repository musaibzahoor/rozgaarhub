export default function RatingStars({ value=0 }) {
  const full = Math.round(value)
  return (
    <div className="text-yellow-500 text-sm" aria-label={`Rating ${value} out of 5`}>
      {'★★★★★'.slice(0, full)}<span className="text-gray-300">{'★★★★★'.slice(full)}</span>
      <span className="ml-1 text-xs text-gray-600">{value.toFixed(1)}</span>
    </div>
  )
}
