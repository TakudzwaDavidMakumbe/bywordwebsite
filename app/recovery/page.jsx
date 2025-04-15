"use client"
import Image from "next/image"
import Link from "next/link"
import { Phone, Clock, MapPin, CheckCircle, Send } from "lucide-react"
import hero from '../../public/service.png'
import img from '../../public/recover.png'
import test1 from "@/public/test1.jpg"
import { useState } from "react"


export default function RecoveryPage() {
  // Recovery services
  const recoveryServices = [
    {
      title: "24/7 Emergency Recovery",
      description:
        "Our emergency recovery service is available 24 hours a day, 7 days a week, to help you when you need it most.",
      image: img,
      features: [
        "Available 24/7, 365 days a year",
        "Fast response times",
        "Nationwide coverage",
        "Trained and certified recovery specialists",
      ],
    },
    {
      title: "Roadside Assistance",
      description: "Get back on the road quickly with our comprehensive roadside assistance services.",
      image: img,
      features: ["Battery jump-start", "Flat tire change", "Fuel delivery", "Lockout assistance"],
    },
    {
      title: "Vehicle Transport",
      description: "We offer safe and reliable vehicle transport services for all types of vehicles.",
      image: img,
      features: [
        "Flatbed towing",
        "Long-distance transport",
        "Enclosed transport for luxury vehicles",
        "Multi-vehicle transport",
      ],
    },
  ]

  // How it works steps
  const howItWorks = [
    {
      step: "1",
      title: "Call Our Hotline",
      description: "Contact our 24/7 emergency hotline at (555) 123-4567 to request recovery assistance.",
    },
    {
      step: "2",
      title: "Share Your Location",
      description: "Provide our team with your exact location and details about your vehicle situation.",
    },
    {
      step: "3",
      title: "Wait for Arrival",
      description:
        "Our recovery team will be dispatched immediately and arrive at your location as quickly as possible.",
    },
    {
      step: "4",
      title: "Get Back on the Road",
      description:
        "Our specialists will either fix your issue on the spot or transport your vehicle to our service center.",
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
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={hero}
            alt="Vehicle Recovery"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="mb-4">24/7 Vehicle Recovery Services</h1>
            <p className="text-lg md:text-xl mb-8">
              Fast, reliable, and professional vehicle recovery services available around the clock.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="tel:+15551234567" className="btn-primary inline-flex items-center">
                <Phone className="mr-2 h-5 w-5" /> Call Emergency Hotline
              </Link>
              <Link
                href="#services"
                className="bg-white text-gray-900 hover:bg-gray-100 font-medium py-2 px-4 rounded-md transition-colors duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="bg-red-600 text-white py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Phone className="h-6 w-6 mr-2" />
              <span className="font-bold">Emergency Hotline: (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-6 w-6 mr-2" />
              <span>Available 24/7, 365 days a year</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 mr-2" />
              <span>Nationwide Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Recovery Services</h2>
            <p className="text-gray-600 text-lg">
              We offer a comprehensive range of vehicle recovery and roadside assistance services to get you back on the
              road quickly and safely.
            </p>
          </div>

          <div className="grid gap-16">
            {recoveryServices.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-64 md:h-80 w-full bg-blue-900 rounded-lg overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
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
                  <Link href="tel:+15551234567" className="btn-primary inline-flex items-center">
                    <Phone className="mr-2 h-5 w-5" /> Call Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">
              Our vehicle recovery process is simple and efficient, designed to get you back on the road as quickly as
              possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 lg:mr-10">
              <h2 className="mb-4">Need Emergency Recovery?</h2>
              <p className="text-lg opacity-90 max-w-2xl">
                Our team is standing by 24/7 to assist you with any vehicle emergency. Don't wait - call us now!
              </p>
            </div>
            <Link
              href="tel:+15551234567"
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" /> (555) 123-4567
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
