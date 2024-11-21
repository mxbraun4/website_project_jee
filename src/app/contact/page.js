'use client';
import { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <Header />
            <div className="relative overflow-hidden bg-white">
                <div className="w-full max-w-7xl mx-auto px-1 md:px-2">
                    <div className="mt-8 mb-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Info Box - Takes up 1 column */}
                            <div className="border border-gray-300 rounded-3xl p-8 md:p-12">
                                <div className="flex flex-col h-full justify-between">
                                    <div>
                                        <h2 className="text-4xl font-bold text-[#515859] mb-4">
                                            GET IN TOUCH
                                        </h2>
                                        <p className="text-gray-600 mb-6">
                                            Have questions about Junior Enterprises Europe? 
                                            Want to become a partner? Fill out the form and we'll get back to you shortly.
                                        </p>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="text-gray-600 mt-8">
                                        <div className="flex flex-col gap-4">
                                            <div>
                                                <h3 className="text-[#515859] font-semibold mb-1">Email</h3>
                                                <p>contact@juniorenterprises.eu</p>
                                            </div>
                                            <div>
                                                <h3 className="text-[#515859] font-semibold mb-1">Address</h3>
                                                <p>Avenue du Frioul, 51</p>
                                                <p>Evere, Brussels</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form Box - Takes up 2 columns */}
                            <div className="border border-gray-300 rounded-3xl p-8 md:p-12 lg:col-span-2">
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name Field */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#515859]"
                                                value={formData.name}
                                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                required
                                            />
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#515859]"
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Subject Field */}
                                    <div className="mt-6">
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#515859]"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                            required
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div className="mt-6">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows="6"
                                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#515859]"
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                            required
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="mt-8">
                                        <button
                                            type="submit"
                                            className="w-full md:w-auto px-8 py-3 bg-[#515859] text-white rounded-lg hover:bg-[#626b6c] transition-colors focus:outline-none focus:ring-2 focus:ring-[#515859] focus:ring-offset-2"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}