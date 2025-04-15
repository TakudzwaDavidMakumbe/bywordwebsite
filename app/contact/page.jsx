"use client"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import Image from "next/image"
import test1 from "@/public/test1.jpg"
import { useState } from "react";


export default function ContactPage() {

  
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
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Have questions or need assistance? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-red-100 p-4 rounded-full mb-4">
                <Phone className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">Our team is here to help</p>
              <a href="tel:+15551234567" className="text-red-600 font-medium hover:underline">
                (555) 123-4567
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-red-100 p-4 rounded-full mb-4">
                <Mail className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Send us a message anytime</p>
              <a href="mailto:info@byword.com" className="text-red-600 font-medium hover:underline">
                info@byword.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-red-100 p-4 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-600 mb-4">Visit our showroom</p>
              <address className="not-italic text-red-600 font-medium">123 Auto Street, Car City, CC 12345</address>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary flex items-center justify-center">
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </button>
              </form>
            </div>

            {/* Business Hours & Map */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Showroom Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Service Center Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Recovery Services</h4>
                      <p className="text-gray-600">24/7 Emergency Assistance</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  {/* This would be replaced with an actual map component in a real implementation */}
                  <div className="w-full h-full flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-red-600 mr-2" />
                    <span className="text-gray-600">Map would be displayed here</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium">ByWord Headquarters</h4>
                  <address className="not-italic text-gray-600 mt-1">123 Auto Street, Car City, CC 12345</address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Find answers to common questions about our services and policies.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, debit cards, bank transfers, and cash payments. Financing options are
                also available.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Do you offer test drives?</h3>
              <p className="text-gray-600">
                Yes, we encourage test drives before purchasing. You can schedule a test drive online or by contacting
                our sales team.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">What is your return policy?</h3>
              <p className="text-gray-600">
                We offer a 7-day return policy on all vehicle purchases, subject to certain conditions. Please contact
                us for details.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Do you offer vehicle delivery?</h3>
              <p className="text-gray-600">
                Yes, we offer delivery services for purchased vehicles within a 100-mile radius of our location.
                Additional fees may apply.
              </p>
            </div>
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
