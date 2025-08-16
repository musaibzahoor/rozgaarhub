import { useData } from '../store/DataContext.jsx'

export default function Toast() {
  const { toast } = useData()
  if (!toast) return null
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-md shadow-lg z-50">
      {toast.msg}
    </div>
  )
}
