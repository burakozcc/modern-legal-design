import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About Us", href: "#about" },
    { name: "Practice Areas", href: "#practice" },
    { name: "Founder", href: "#founder" },
    { name: "Bulletin", href: "#bulletin" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-playfair font-bold text-primary">İnce Legal</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-inter text-gray-700 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-light transition-colors">
              TR
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button className="mt-4 w-full px-4 py-2 bg-primary text-white rounded hover:bg-primary-light transition-colors">
              TR
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;