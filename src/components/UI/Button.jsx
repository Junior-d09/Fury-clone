'use client'

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-700 transition font-semibold text-white"
    >
      {children}
    </button>
  )
}
