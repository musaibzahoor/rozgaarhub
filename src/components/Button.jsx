export default function Button({ children, onClick, type="button", className="" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium bg-primary text-white hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  )
}
