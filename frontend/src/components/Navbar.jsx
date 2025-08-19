export default function Navbar() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">RozgaarHub Admin</h1>
      <div className="flex items-center gap-3">
        <span className="text-gray-600 text-sm">Admin</span>
        <div className="w-8 h-8 rounded-full bg-gray-200 grid place-items-center text-xs">RH</div>
      </div>
    </header>
  )
}
