export default function Input({ label, ...props }) {
  return (
    <label className="block mb-3">
      <span className="block text-sm mb-1">{label}</span>
      <input {...props} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
    </label>
  )
}
