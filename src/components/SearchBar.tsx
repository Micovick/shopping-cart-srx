import { useState } from 'react'
import { Search } from 'lucide-react'

interface Props {
  onSearch?: (term: string) => void
}

export default function SearchBar({ onSearch }: Props) {
  const [term, setTerm] = useState('')
  
  const handleSearch = () => {
    onSearch?.(term)
  }
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch()
  }
  
  return (
    <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-96 bg-white shadow-sm">
      <input
        type="text"
        placeholder="Search products ..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 outline-none bg-transparent text-gray-800 placeholder-gray-400"
      />
      <button onClick={handleSearch}>
        <Search className="text-gray-500 w-4 h-4 ml-2 hover:text-gray-700" />
      </button>
    </div>
  )
}
