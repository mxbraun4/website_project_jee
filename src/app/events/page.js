'use client';
import { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Events() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/articles');
        const data = await response.json();
        setNews(data.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const eventData = [
    {
      title: "Winter Conference 2024",
      date: "February 15-18, 2024",
      location: "Brussels, Belgium",
      description: "The Junior Enterprises Europe Winter Conference 2024 took place in Brussels, Belgium. Over 400 Junior Entrepreneurs gathered to share knowledge, build connections, and shape the future of the network.",
      image: "/images/slider2.jpg",
      gradient: "from-blue-500 to-blue-900",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      link: "#"
    },
    {
      title: "Summer Conference 2023",
      date: "August 21-25, 2023",
      location: "Porto, Portugal",
      description: "The Summer Conference brought together Junior Entrepreneurs from across Europe for a week of learning, networking, and celebrating achievements in the beautiful city of Porto.",
      image: "/images/slider1.jpg",
      gradient: "from-orange-500 to-red-700",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      link: "#"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + eventData.length) % eventData.length);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  return (
    <>
      <Header />
      <div className="relative overflow-hidden min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-1 md:px-2">
          {/* Title Box */}
          <div className="mt-12 mb-8">
            <div className="border border-gray-300 rounded-3xl p-8 md:p-12 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-[#515859] mb-4">
                Our Events
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Where Junior Entrepreneurs from across Europe unite, learn, and grow together
              </p>
            </div>
          </div>

          {/* Introduction and Stats Boxes Container */}
          <div className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Introduction Box */}
            <div className="lg:col-span-2 border border-gray-300 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-[#515859] mb-4">
                Transformative Experiences
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Every year, Junior Enterprises come together to host transformative events across Europe. These gatherings bring together participants from various countries, creating unique opportunities for learning, collaboration, and growth.
              </p>
              <p className="text-gray-600 text-lg">
                From conferences to workshops, each event offers a platform for Junior Entrepreneurs to share experiences, develop skills, and build lasting connections within the network.
              </p>
            </div>

            {/* Stats Box */}
            <div className="border border-gray-300 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-[#515859] mb-6 text-center">
                Events in Numbers
              </h3>
              <div className="flex flex-col gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#515859] mb-2">3</div>
                  <div className="text-gray-600 text-lg">Major Events Yearly</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#515859] mb-2">1000+</div>
                  <div className="text-gray-600 text-lg">Annual Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#515859] mb-2">16+</div>
                  <div className="text-gray-600 text-lg">Countries Represented</div>
                </div>
              </div>
            </div>
          </div>

          {/* Events Slider */}
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-3xl">
              {/* Main Slider */}
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {eventData.map((event, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0 relative"
                  >
                    {/* Background Image */}
                    <div className="relative h-[600px]">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Content section with horizontal cut */}
                      <div className="absolute bottom-0 left-0 w-full">
                        <div className={`w-full bg-gradient-to-r ${event.gradient} h-[220px] flex items-center`}>
                          <div className="max-w-4xl mx-auto px-8 w-full">
                            <div className="flex gap-4 text-white/90 mb-1 text-sm">
                              <span>{event.date}</span>
                              <span>•</span>
                              <span>{event.location}</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                              {event.title}
                            </h2>
                            <p className="text-white/90 text-sm md:text-base mb-3 max-w-2xl line-clamp-2">
                              {event.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <a
                                href={event.link}
                                className={`inline-block ${event.buttonColor} text-white px-5 py-1.5 rounded-lg transition-colors text-sm`}
                              >
                                Learn More
                              </a>
                              
                              {/* Navigation Dots - Moved to bottom right */}
                              <div className="flex gap-3">
                                {eventData.map((_, idx) => (
                                  <button 
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                      currentSlide === idx 
                                        ? 'bg-white scale-125' 
                                        : 'bg-white/40 hover:bg-white/60'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/60 transition-colors z-10 ${
                  currentSlide === 0 ? 'opacity-0' : 'opacity-100'
                }`}
                disabled={currentSlide === 0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/60 transition-colors z-10 ${
                  currentSlide === eventData.length - 1 ? 'opacity-0' : 'opacity-100'
                }`}
                disabled={currentSlide === eventData.length - 1}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* News Box */}
          <div className="mb-12">
            <div className="border border-gray-300 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-[#515859] mb-6">Latest News</h2>
              {isLoading ? (
                <div className="text-center py-8">Loading news...</div>
              ) : news.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {news.map((article) => (
                    <div key={article.id} className="border border-gray-200 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-[#515859] mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {article.description}
                      </p>
                      <div className="text-sm text-gray-500">
                        {formatDate(article.createdAt)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">No articles available</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}