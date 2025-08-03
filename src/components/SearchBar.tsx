import { useState } from 'react'

interface Props {
  onSearch?: (term: string) => void
}

export default function SearchBar({ onSearch }: Props) {
  const [term, setTerm] = useState('')
  
  const handleSearch = () => {
    onSearch?.(term)
  }
  
  return (
    <div className="flex items-center border rounded px-2 py-1 w-64">
      <input
        type="text"
        placeholder="Search..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="flex-1 outline-none"
      />
      <button
        onClick={handleSearch}
        className="ml-2 text-sm text-blue-600 hover:underline"
      >
        Search
      </button>
    </div>
  )
}
