import { Eye } from 'lucide-react'

interface Props {
  onClick: () => void
}

export default function PaginationButton({ onClick }: Props) {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={onClick}
        className="px-6 py-2 border border-black rounded-full flex items-center gap-2 hover:bg-gray-100 transition"
      >
        <Eye className="w-4 h-4" />
        <span className="uppercase text-sm font-medium tracking-wide">
          View More
        </span>
      </button>
    </div>
  )
}
