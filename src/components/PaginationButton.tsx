interface Props {
  onClick: () => void
}

export default function PaginationButton({ onClick }: Props) {
  return (
    <div className="text-center mt-6">
      <button
        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        onClick={onClick}
      >
        See More
      </button>
    </div>
  )
}
