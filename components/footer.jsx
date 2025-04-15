import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ByWord</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for quality vehicles, parts, and automotive services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="text-gray-300 hover:text-white transition-colors">
                  Vehicles
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/spares" className="text-gray-300 hover:text-white transition-colors">
                  Spare Parts
                </Link>
              </li>
              <li>
                <Link href="/recovery" className="text-gray-300 hover:text-white transition-colors">
                  Recovery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-white transition-colors">Vehicle Sales</li>
              <li className="text-gray-300 hover:text-white transition-colors">Vehicle Maintenance</li>
              <li className="text-gray-300 hover:text-white transition-colors">Parts Replacement</li>
              <li className="text-gray-300 hover:text-white transition-colors">Vehicle Recovery</li>
              <li className="text-gray-300 hover:text-white transition-colors">Vehicle Inspection</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-300">123 Auto Street, Car City, CC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-300">info@byword.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="container-custom text-center text-gray-400">
          <p>© {new Date().getFullYear()} ByWord. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
