"use client"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Star, Play, Send } from "lucide-react"
import car from '../../public/car.png'
import car1 from '../../public/car1.png'
import car6 from '../../public/car6.png'
import car3 from '../../public/car3.png'
import car4 from '../../public/car4.png'
import car5 from '../../public/car5.png'
import test1 from "@/public/test1.jpg"
import { useState } from "react"

export default function VehiclesPage() {
  // Sample vehicles data
  const vehicles = [
    {
      id: 1,
      name: "2023 Toyota Hilux Twin Cab",
      price: "$42,990",
      image: car,
      category: "Truck",
      year: 2023,
      mileage: "0 miles",
      transmission: "Manual",
    },
    {
      id: 2,
      name: "2023 Toyota Hilux Twin Cab",
      price: "$32,350",
      image: car1,
      category: "Truck",
      year: 2023,
      mileage: "0 miles",
      transmission: "Manual", 
    },
    {
      id: 3,
      name: "2023 Toyota Hilux Twin Cab",
      price: "$55,974",
      image: car3,
      category: "Truck",
      year: 2023,
      mileage: "0 miles",
      transmission: "Manual",
    },
    {
      id: 4,
      name: "2022 Toyota Hilux Single Cab",
      price: "$25,650",
      image: car6,
      category: "Truck",
      year: 2022,
      mileage: "0 miles",
      transmission: "Automatic",
    },
    {
      id: 5,
      name: "2022 Toyota Hilux Single Cab",
      price: "$43,700",
      image: car4,
      category: "Truck",
      year: 2022,
      mileage: "0 miles",
      transmission: "Automatic",
    },
    {
      id: 6,
      name: "2022 Toyota Hilux Single Cab",
      price: "$38,400",
      image: car5,
      category: "Truck",
      year: 2022,
      mileage: "0 miles",
      transmission: "Manual",
    },
  ]

  // Delivery videos data
  const deliveryVideos = [
    {
      id: 1,
      title: "2023 Toyota Hilux Twin Cab Delivery",
      thumbnail: "/placeholder.svg?height=300&width=500",
      customer: "Robert Johnson",
      location: "Harare, Zimbabwe",
    },
    {
      id: 2,
      title: "2023 Toyota Hilux Single Cab Delivery",
      thumbnail: "/placeholder.svg?height=300&width=500",
      customer: "Elizabeth Moyo",
      location: "Bulawayo, Zimbabwe",
    },
    {
      id: 3,
      title: "2022 Toyota Land Cruiser Delivery",
      thumbnail: "/placeholder.svg?height=300&width=500",
      customer: "Michael Ndlovu",
      location: "Victoria Falls, Zimbabwe",
    },
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
          <h1 className="mb-4">Our Vehicles</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Browse our extensive collection of premium vehicles. Find your perfect match.
          </p>
        </div>
      </section>

      {/* Vehicles Listing */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600 ">Showing {vehicles.length} vehicles</p>
            {/* <div className="relative">
              <select className="block w-40 p-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent">
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative bg-blue-900 h-48">
                  <Image src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {vehicle.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">{vehicle.name}</h3>
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">(24 reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{vehicle.year}</span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{vehicle.mileage}</span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{vehicle.transmission}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    {/* <span className="text-xl font-bold text-gray-900">{vehicle.price}</span> */}
                    <Link href={`/vehicles/${vehicle.id}`} className="btn-primary text-sm">
                      View Details
                    </Link>
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

      {/* Deliveries Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Recent Deliveries</h2>
            <p className="text-gray-300 text-lg">
              Watch videos of our happy customers receiving their dream vehicles. We deliver nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryVideos.map((video) => (
              <div key={video.id} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="relative h-56 group cursor-pointer">
                  <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-red-600 rounded-full p-3">
                      <Play className="h-8 w-8 text-white" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                  <p className="text-gray-300 text-sm mb-1">Customer: {video.customer}</p>
                  <p className="text-gray-400 text-sm">Location: {video.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="#"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              View More Deliveries
            </Link>
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
