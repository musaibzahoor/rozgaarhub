export default function Select({ label, children, ...props }) {
  return (
    <label className="block mb-3">
      <span className="block text-sm mb-1">{label}</span>
      <select {...props} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
        {children}
      </select>
    </label>
  )
}
