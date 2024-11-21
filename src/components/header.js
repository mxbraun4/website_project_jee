import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <img
                  className="h-14 w-auto"
                  src="/images/logo.png"
                  alt="Logo"
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                href="/" 
                className={`text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium ${
                  pathname === '/' ? 'border-b-2 border-red-300' : ''
                }`}
              >
                Home
              </Link>
              <Link 
                href="/initiatives" 
                className={`text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium ${
                  pathname === '/initiatives' ? 'border-b-2 border-red-300' : ''
                }`}
              >
                Initiatives
              </Link>
              <Link 
                href="/events" 
                className={`text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium ${
                  pathname === '/events' ? 'border-b-2 border-red-300' : ''
                }`}
              >
                Events
              </Link>
              <Link 
                href="/contact" 
                className={`text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium ${
                  pathname === '/contact' ? 'border-b-2 border-red-300' : ''
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
      {/* Added spacing div after header */}
      <div className="h-24"></div>
    </>
  );
}