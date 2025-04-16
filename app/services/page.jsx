"use client"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight, Send } from "lucide-react"
import img from "../../public/car6.png"
import img1 from "../../public/service.png"
import img2 from "../../public/service1.png"
import img3 from "../../public/service2.png"
import { useState } from "react"
import test1 from "@/public/test1.jpg"

export default function ServicesPage() {
  // Services data
  const services = [
    {
      id: 1,
      title: "Vehicle Sales",
      description:
        "Find your perfect vehicle from our extensive collection of new and pre-owned cars, trucks, and SUVs.",
      image: img,
      features: [
        "Extensive inventory of new and pre-owned vehicles",
        "Competitive pricing and financing options",
        "Trade-in options available",
        "Virtual showroom and test drive scheduling",
      ],
    },
    {
      id: 2,
      title: "Vehicle Maintenance",
      description: "Keep your vehicle in optimal condition with our comprehensive maintenance services.",
      image: img2,
      features: [
        "Regular maintenance and tune-ups",
        "Oil changes and fluid checks",
        "Brake service and repair",
        "Tire rotation and replacement",
      ],
    },
    {
      id: 3,
      title: "Diagnostic Services",
      description: "Our advanced diagnostic tools help identify issues quickly and accurately.",
      image: img3,
      features: [
        "Comprehensive vehicle inspection",
        "Computer diagnostics",
        "Electrical system testing",
        "Performance analysis",
      ],
    },
    {
      id: 4,
      title: "Body Repairs",
      description: "Restore your vehicle's appearance with our professional body repair services.",
      image: img1,
      features: ["Collision repair", "Dent removal", "Paint matching and refinishing", "Windshield replacement"],
    },
  ]

  // Sample vehicles data for the quote form
  const vehicles = [
    { id: 1, name: "2023 Tesla Model 3", price: "$42,990" },
    { id: 2, name: "2023 Toyota RAV4 Hybrid", price: "$32,350" },
    { id: 3, name: "2023 Ford F-150 Lightning", price: "$55,974" },
    { id: 4, name: "2022 Honda Civic", price: "$25,650" },
    { id: 5, name: "2021 BMW 3 Series", price: "$43,700" },
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
          <h1 className="mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            We offer a comprehensive range of automotive services to meet all your vehicle needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative w-full h-[200px] md:h-[320px] bg-blue-900 rounded-lg overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-primary inline-flex items-center">
                    Inquire Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Need a Custom Service?</h2>
            <p className="text-lg opacity-90 mb-8">
              We understand that every vehicle and customer has unique needs. Contact us to discuss your specific
              requirements and how we can help.
            </p>
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-block"
            >
              Contact Our Team
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
