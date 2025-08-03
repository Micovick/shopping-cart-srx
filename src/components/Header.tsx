import CartIcon from './CartIcon'
import SearchBar from './SearchBar'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b shadow">
      <Link href="/" className="text-xl font-bold text-blue-600">
        MyStore
      </Link>
      <SearchBar />
      <CartIcon />
    </header>
  )
}
