import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#262626] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <h3 className="text-[#A51C37] font-bold mb-4">Junior Enterprises Europe</h3>
            <p className="text-gray-300 text-sm">
              JEE is the umbrella organisation that represents, integrates and supports 
              the European Network of Junior Enterprises.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white text-sm">
                Home
              </Link>
              <Link href="/initiatives" className="block text-gray-300 hover:text-white text-sm">
                Initiatives
              </Link>
              <Link href="/events" className="block text-gray-300 hover:text-white text-sm">
                Events
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <a 
              href="mailto:contact@juniorenterprises.eu" 
              className="text-gray-300 hover:text-white text-sm"
            >
              contact@juniorenterprises.eu
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Junior Enterprises Europe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}