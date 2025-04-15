"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, PenToolIcon as Tool, Truck, Clock, Star, Send } from "lucide-react"
import hero from "../public/hero.png"
import img from "@/public/3.png"
import test from "@/public/test.jpg"
import test1 from "@/public/test1.jpg"
import test2 from "@/public/test2.jpg"
import test3 from "@/public/test3.jpg"
import { useState } from "react"

export default function Home() {
  // Featured vehicles data
  const featuredVehicles = [
    {
      id: 1,
      name: "2023 Tesla Model 3",
      price: "$42,990",
      image: "/placeholder.svg?height=300&width=400",
      category: "Electric",
    },
    {
      id: 2,
      name: "2023 Toyota RAV4 Hybrid",
      price: "$32,350",
      image: "/placeholder.svg?height=300&width=400",
      category: "SUV",
    },
    {
      id: 3,
      name: "2023 Ford F-150 Lightning",
      price: "$55,974",
      image: "/placeholder.svg?height=300&width=400",
      category: "Truck",
    },
  ]

  // Services data
  const services = [
    {
      icon: <Shield className="h-10 w-10 text-red-600" />,
      title: "Quality Assurance",
      description: "All our vehicles undergo rigorous quality checks before listing.",
    },
    {
      icon: <Tool className="h-10 w-10 text-red-600" />,
      title: "Professional Service",
      description: "Expert technicians providing top-notch maintenance and repair services.",
    },
    {
      icon: <Truck className="h-10 w-10 text-red-600" />,
      title: "Fast Delivery",
      description: "Quick and reliable delivery of vehicles and parts nationwide.",
    },
    {
      icon: <Clock className="h-10 w-10 text-red-600" />,
      title: "24/7 Recovery",
      description: "Round-the-clock vehicle recovery services for emergencies.",
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Juka",
      image: test1,
      rating: 5,
      text: "I had an amazing experience buying my new car from ByWord. The staff was knowledgeable and helped me find exactly what I was looking for within my budget.",
      vehicle: "Toyota Hilux TwinCab",
    },
    {
      name: "Michael Timbiya",
      image: test,
      rating: 5,
      text: "The service department is top-notch! They fixed my car quickly and at a reasonable price. I won't take my vehicle anywhere else.",
      vehicle: "Toyota Prado",
    },
    {
      name: "Jennifer Davis",
      image: test2,
      rating: 4,
      text: "Great selection of vehicles and the financing process was smooth and straightforward. I appreciate the no-pressure sales approach.",
      vehicle: "Toyota Hilux SingleCab",
    },
  ]

  // Staff data
  const staff = [
    {
      name: "John Smith",
      position: "Sales Manager",
      image: test1,
      description:
        "With over 15 years in the automotive industry, John leads our sales team with expertise and dedication to customer satisfaction.",
    },
    {
      name: "Emily Rodriguez",
      position: "Service Director",
      image: test,
      description:
        "Emily ensures our service department runs efficiently while maintaining the highest standards of quality and customer care.",
    },
    {
      name: "David Chen",
      position: "Parts Specialist",
      image: test2,
      description:
        "David's extensive knowledge of vehicle parts and accessories helps customers find exactly what they need for their vehicles.",
    },
    {
      name: "Lisa Williams",
      position: "Finance Manager",
      image: test3,
      description:
        "Lisa works with customers to find the best financing options, making the car buying process smooth and stress-free.",
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
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={hero}
            alt="Luxury car"
            layout="fill" // Ensures consistent rendering
            priority // Ensures the image is loaded early
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="mb-4">Find Your Perfect Drive</h1>
            <p className="text-lg md:text-xl mb-8">
              Discover premium vehicles, quality parts, and exceptional service all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/vehicles" className="btn-primary">
                Browse Vehicles
              </Link>
              <Link
                href="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100 font-medium py-2 px-4 rounded-md transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-10">
            <h2>About Us</h2>
            <Link href="/contact" className="flex items-center text-red-600 hover:text-red-700 font-medium">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <div className="h-1 w-20 bg-red-600 mb-6"></div>
                <p className="text-gray-600 mb-4">
                  To be the leading automotive marketplace that transforms the vehicle buying, selling, and service
                  experience through innovation, integrity, and exceptional customer care.
                </p>
                <p className="text-gray-600">
                  We envision a future where finding your perfect vehicle or getting it serviced is a seamless,
                  transparent, and enjoyable experience for everyone.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <div className="h-1 w-20 bg-red-600 mb-6"></div>
                <p className="text-gray-600 mb-4">
                  To provide our customers with the highest quality vehicles, parts, and services while maintaining
                  uncompromising standards of integrity and professionalism.
                </p>
                <p className="text-gray-600">
                  We are committed to creating lasting relationships with our customers by exceeding expectations and
                  delivering exceptional value in everything we do.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <div className="h-1 w-20 bg-red-600 mb-6"></div>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    • <span className="font-medium">Integrity:</span> Honesty and transparency in all our dealings
                  </li>
                  <li>
                    • <span className="font-medium">Excellence:</span> Commitment to the highest standards of quality
                  </li>
                  <li>
                    • <span className="font-medium">Customer Focus:</span> Putting our customers' needs first
                  </li>
                  <li>
                    • <span className="font-medium">Innovation:</span> Continuously improving our products and services
                  </li>
                  <li>
                    • <span className="font-medium">Teamwork:</span> Collaborating to achieve exceptional results
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-95"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${img.src})`, backgroundSize: "cover" }}
        ></div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4 text-white">What Our Customers Say</h2>
            <p className="text-gray-300 text-lg">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience
              with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 relative">
                <div className="absolute top-4 right-4 text-red-500 opacity-30">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 11L7 7H4V17H8V13H6L10 11ZM20 11L17 7H14V17H18V13H16L20 11Z" fill="currentColor" />
                  </svg>
                </div>

                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-red-500">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-gray-300 text-sm mb-1">Purchased: {testimonial.vehicle}</p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? "fill-current" : "text-gray-600"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-100 italic leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              Share Your Experience <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">
              We offer comprehensive automotive solutions to meet all your vehicle needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 lg:mr-10">
              <h2 className="mb-4">Ready to Find Your Dream Car?</h2>
              <p className="text-lg opacity-90 max-w-2xl">
                Browse our extensive collection of premium vehicles or contact our team for personalized assistance.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/vehicles"
                className="bg-white text-red-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Browse Inventory
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Staff Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Staff</h2>
            <p className="text-gray-600 text-lg">
              Meet our dedicated team of professionals committed to providing you with exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
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
