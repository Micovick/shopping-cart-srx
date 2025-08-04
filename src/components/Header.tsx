import CartIcon from './CartIcon'
import SearchBar from './SearchBar'
import Link from 'next/link'

interface Props {
  onSearch?: (term: string) => void
}

export default function Header({ onSearch }: Props) {
  return (
    <header className="flex justify-between items-center p-4 bg-black shadow-sm">
      <Link href="/" className="text-xl font-bold text-white">
        MyStore
      </Link>
      <SearchBar onSearch={onSearch}/>
      <CartIcon />
    </header>
  )
}
