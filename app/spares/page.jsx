"use client"
import Image from "next/image"
import { Search, ChevronDown, ShoppingCart, Send } from "lucide-react"
import img from '../../public/brakes.png'
import img1 from '../../public/oil.png'
import img2 from '../../public/plugs.png'
import img3 from '../../public/spare.png'
import img4 from '../../public/spare1.png'
import img5 from '../../public/spare2.png'
import img6 from '../../public/spare3.png'
import img7 from '../../public/spare4.png'
import img8 from '../../public/spare5.png'
import test1 from "@/public/test1.jpg"
import { useState } from "react"

export default function SparesPage() {
  // Sample spare parts data
  const spareParts = [
    {
      id: 1,
      name: "Premium Brake Pads",
      price: "$89.99",
      image: img,
      category: "Brakes",
      compatibility: ["All Models"],
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Engine Oil Filter",
      price: "$12.99",
      image: img1,
      category: "Filters",
      compatibility: ["All Models"],
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 3,
      name: "Spark Plug Set",
      price: "$45.99",
      image: img2,
      category: "Ignition",
      compatibility: ["All Models"],
      rating: 4.9,
      reviews: 76,
    },
    {
      id: 4,
      name: "Air Filter",
      price: "$24.99",
      image: img3,
      category: "Filters",
      compatibility: ["All Models"],
      rating: 4.7,
      reviews: 112,
    },
    {
      id: 5,
      name: "Wiper Blade Set",
      price: "$32.99",
      image: img5,
      category: "Exterior",
      compatibility: ["All Models"],
      rating: 4.5,
      reviews: 68,
    },
    {
      id: 6,
      name: "Battery",
      price: "$129.99",
      image: img6,
      category: "Electrical",
      compatibility: ["Toyota", "Honda", "Nissan"],
      rating: 4.8,
      reviews: 95,
    },
    {
      id: 7,
      name: "Headlight Bulbs",
      price: "$19.99",
      image: img7,
      category: "Lighting",
      compatibility: ["All Models"],
      rating: 4.6,
      reviews: 57,
    },
    {
      id: 8,
      name: "Radiator",
      price: "$189.99",
      image: img8,
      category: "Cooling",
      compatibility: ["All Models"],
      rating: 4.7,
      reviews: 42,
    },
  ]

  // Categories for dropdown filter
  const categories = [
    "All Categories",
    "Brakes",
    "Filters",
    "Ignition",
    "Exterior",
    "Electrical",
    "Lighting",
    "Cooling",
    "Suspension",
    "Transmission",
  ]
  // Add state to store form data
        const [formData, setFormData] = useState({
          name: '',
          interest: '',
          message: ''
        });
      
        // Handle form input changes
        const handleChange = (e) => {
          setFormData({
            ...formData,
            [e.target.id]: e.target.value
          });
        };
      
        // Create WhatsApp URL with form data
        const createWhatsAppUrl = () => {
          const text = `Hi, I'm ${formData.name}.\n\nI'm interested in: ${formData.interest}\n\nAdditional Information: ${formData.message}`;
          return `https://wa.me/263773914992?text=${encodeURIComponent(text)}`;
        };
    

  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-100 py-12">
        <div className="container-custom">
          <h1 className="mb-4">Spare Parts</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Browse our extensive collection of high-quality spare parts for all vehicle makes and models.
          </p>
        </div>
      </section>

      {/* Search Bar and Quick Filters */}
      {/* <section className="py-8 border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-xl">
              <input
                type="text"
                placeholder="Search for parts..."
                className="w-full p-4 pl-12 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <div className="relative w-full md:w-auto">
                <select className="p-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent">
                  <option value="">All Categories</option>
                  {categories.slice(1).map((category) => (
                    <option key={category} value={category.toLowerCase()}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>

              <div className="relative w-full md:w-auto">
                <select className="p-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent">
                  <option value="">All Makes</option>
                  <option value="toyota">Toyota</option>
                  <option value="honda">Honda</option>
                  <option value="ford">Ford</option>
                  <option value="bmw">BMW</option>
                  <option value="mercedes">Mercedes</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>

              <div className="relative w-full md:w-auto">
                <select className="p-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent">
                  <option value="popularity">Sort By: Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Parts Listing */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {spareParts.map((part) => (
              <div
                key={part.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative bg-blue-900 h-48 p-4 flex items-center justify-center">
                  <Image
                    src={part.image || "/placeholder.svg"}
                    alt={part.name}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {part.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">{part.name}</h3>
                  <div className="flex items-center mb-3">
                    <div className="text-yellow-400 font-medium">★ {part.rating}</div>
                    <span className="text-gray-500 text-sm ml-2">({part.reviews} reviews)</span>
                  </div>
                  <div className="mb-3">
                    <p className="text-sm text-gray-600">Compatible with: {part.compatibility.join(", ")}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-gray-900">{part.price}</span>
                    <button className="flex items-center bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-2 rounded-md bg-red-600 text-white">1</button>
              <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">2</button>
              <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">3</button>
              <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Get a Quote Section */}
      <section className="section-padding bg-gray-100">
                    <div className="container-custom">
                      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="md:flex">
                          <div className="md:w-1/2 relative h-64 md:h-auto">
                            <Image src={test1} alt="Get a quote" fill className="object-cover" />
                          </div>
                          <div className="p-8 md:w-1/2">
                            <h2 className="text-2xl font-bold mb-6">Get a Quote</h2>
                            <p className="text-gray-600 mb-6">
                              Interested in our vehicles or services? Fill out the form below to get a personalized quote sent
                              directly to your WhatsApp.
                            </p>
            
                            <form className="space-y-4">
                              <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                  placeholder="Your name"
                                />
                              </div>
            
                              <div>
                                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                                  I'm Interested In
                                </label>
                                <select
                                  id="interest"
                                  value={formData.interest}
                                  onChange={handleChange}
                                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                >
                                  <option value="">Select an option</option>
                                  <option value="Purchasing a Vehicle">Purchasing a Vehicle</option>
                                  <option value="Vehicle Service">Vehicle Service</option>
                                  <option value="Spare Parts">Spare Parts</option>
                                  <option value="Recovery Services">Recovery Services</option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
            
                              <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                  Additional Information
                                </label>
                                <textarea
                                  id="message"
                                  value={formData.message}
                                  onChange={handleChange}
                                  rows="3"
                                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                  placeholder="Please provide details about your inquiry..."
                                ></textarea>
                              </div>
            
                              <a
                                href={createWhatsAppUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full btn-primary flex items-center justify-center"
                              >
                                <Send className="mr-2 h-5 w-5" /> Get Quote via WhatsApp
                              </a>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
    </>
  )
}
