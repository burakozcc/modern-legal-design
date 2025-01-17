import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const { toast } = useToast();
  const navigate = useNavigate();

  const navItems = [
    { name: "About Us", href: "/about" },
    { name: "Practice Areas", href: "/practice" },
    { name: "Team", href: "/team" },
    { name: "Bulletin", href: "/bulletin" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLanguageToggle = () => {
    setLanguage(prev => prev === "EN" ? "TR" : "EN");
    toast({
      title: "Language Changed",
      description: `Website language changed to ${language === "EN" ? "Turkish" : "English"}`,
    });
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center">
            <span className="text-2xl font-playfair font-bold text-primary">Özçelik & Abanoz</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-inter text-gray-700 hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={handleLanguageToggle}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-light transition-colors"
            >
              {language}
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
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left py-2 text-gray-700 hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={handleLanguageToggle}
              className="mt-4 w-full px-4 py-2 bg-primary text-white rounded hover:bg-primary-light transition-colors"
            >
              {language}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;