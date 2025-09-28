export default function Modal({ open, onClose, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded p-6 min-w-[300px]">
        {children}
        <button onClick={onClose} className="mt-4 bg-red-600 text-white px-3 py-1 rounded">
          Close
        </button>
      </div>
    </div>
  )
}
