import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-playfair mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 flex-shrink-0" size={20} />
                <p className="text-sm">
                  Maidan İş ve Yaşam Merkezi C Blok
                  <br />
                  Kat:9 No:107-108, Mustafa Kemal
                  <br />
                  Mah. 2118. Cad. No: 4
                  <br />
                  Çankaya - Ankara - Türkiye
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <a href="tel:+903125110535" className="text-sm hover:text-secondary transition-colors">
                  +90 312 511 05 35
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <a href="mailto:info@ozcelikabanoz.com" className="text-sm hover:text-secondary transition-colors">
                  info@ozcelikabanoz.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-playfair mb-6">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for legal updates and news.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-secondary"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-secondary hover:bg-secondary-light transition-colors rounded font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xl font-playfair mb-6">Quick Links</h4>
            <div className="space-y-2">
              <a href="#privacy" className="block text-sm hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="block text-sm hover:text-secondary transition-colors">
                Terms of Use
              </a>
              <div className="pt-4">
                <a
                  href="#linkedin"
                  className="inline-block p-2 bg-white/10 rounded hover:bg-white/20 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
          <p>&copy; 2024 Özçelik & Abanoz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;