'use client';
import { useState, useEffect, useRef } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const useCountUp = (end, duration = 1500) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const startValue = 0;
    
    const step = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (end - startValue) + startValue));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return [count, elementRef];
};

export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [count326, ref326] = useCountUp(326);
  const [count34000, ref34000] = useCountUp(34000);
  const [count5000, ref5000] = useCountUp(5000);
  const [count32, ref32] = useCountUp(32);
  
  const sliderData = [
    {
      title: "Junior\nEnterprise",
      description: "A way to empower higher-education students to have practical experience and enhance their employability. We believe in a business education approach.",
      image: "/images/slider1.jpg"
    },
    {
      title: "JEE Winter Conference 2024",
      description: "The Junior Enterprises Europe Winter Conference 2024 took place in Brussels, Belgium.",
      image: "/images/slider2.jpg"
    },
    {
      title: "The\nNetwork",
      description: "In Europe, we are 16 countries offering students the opportunity to develop entrepreneurial skills and foster social and economic growth.",
      image: "/images/slider3.png"
    }
  ];

  const testimonialData = [
    {
      quote: "I particularly welcome Junior Enterprises Europe's efforts in taking entrepreneurship education further in Europe and offering as many students as possible a real-life experience of what it means to be entrepreneurial in today's world.",
      name: "Ursula Von der Leyen",
      title: "President of the European commission"
    },
    {
      quote: "We need the build bridges between the academic world of education and training on one side and the practical world of enterprises on the other side. JEE is doing an excellent job in this respect...",
      name: "Arnaldo Abruzzini",
      title: "Eurochanbres, CEO"
    },
    {
      quote: "We view partnerships such as the one with JEE as a vital first step in addressing these [entrepreneurial] challenges.",
      name: "Regina Murray",
      title: "Microsoft, Senior director EMEA"
    },
    {
      quote: "Europe's future is in the hands of its young people. (...) Europe's Junior Enterprises are leading the way.",
      name: "Jean-Claude Juncker",
      title: "European Commission, Former President"
    },
    {
      quote: "I am pleased to share with you my appreciation of the important work that Junior Enterprises Europe does. (...) Quality education and training, skills development and entrepreneurship support are of key importance for students and for young entrepreneurs...",
      name: "Jutta Urpilainen",
      title: "European Commission, Commissioner for International Partnerships"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonialData.length);
    }, 5000); // Changes slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header />
      <div className="relative overflow-hidden min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-1 md:px-2">
          {/* Hero section */}
          <div className="relative w-full">
            <div className="relative">
              <img
                src="/images/bg_img.jpg"
                alt="About Us"
                className="w-full h-auto rounded-3xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8 md:px-16 lg:px-24">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                European Confederation of Junior Enterprises
              </h1>
              <p className="mt-4 text-base md:text-lg lg:text-xl text-center max-w-4xl">
                Junior Enterprises Europe is the umbrella organisation that represents, integrates and supports the European Network of Junior Enterprises.
              </p>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-12 bg-[#515859] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Animated diagonal lines */}
            <div className="absolute inset-0">
              {/* Individual lines with different animations */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45 animate-diagonal-1"></div>
              <div className="absolute bottom-0 left-[-10%] w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45 animate-diagonal-2"></div>
              <div className="absolute bottom-0 left-[-20%] w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45 animate-diagonal-3"></div>
              <div className="absolute bottom-0 left-[-30%] w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45 animate-diagonal-4"></div>
              <div className="absolute bottom-0 left-[-40%] w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45 animate-diagonal-5"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative">
              {/* Stat 1 */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <span ref={ref326} className="text-4xl md:text-5xl font-bold text-white relative">
                    {count326}
                  </span>
                </div>
                <span className="mt-2 text-sm md:text-base text-white">JUNIOR ENTERPRISES</span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <span ref={ref34000} className="text-4xl md:text-5xl font-bold text-white relative">
                    {count34000}+
                  </span>
                </div>
                <span className="mt-2 text-sm md:text-base text-white">JUNIOR ENTREPRENEURS</span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <span ref={ref5000} className="text-4xl md:text-5xl font-bold text-white relative">
                    {count5000}
                  </span>
                </div>
                <span className="mt-2 text-sm md:text-base text-white">PROJECTS/YEAR</span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <span ref={ref32} className="text-4xl md:text-5xl font-bold text-white relative">
                    {count32}
                  </span>
                </div>
                <span className="mt-2 text-sm md:text-base text-white">YEARS</span>
              </div>
            </div>
          </div>

          {/* Single Box with Text Items */}
          <div className="mt-12">
            <div className="border border-gray-300 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Text Item 1 */}
                <div className="p-6 rounded-xl transition-all duration-300 hover:transform hover:translate-y-[-4px] hover:shadow-lg cursor-pointer">
                  <h2 className="text-xl font-bold text-[#515859]">Together We Grow</h2>
                  <p className="mt-2 text-sm text-gray-600">Despite our diversity, we work together, with a common purpose, to make a relevant impact.</p>
                </div>

                {/* Text Item 2 */}
                <div className="p-6 rounded-xl transition-all duration-300 hover:transform hover:translate-y-[-4px] hover:shadow-lg cursor-pointer">
                  <h2 className="text-xl font-bold text-[#515859]">Entrepreneurial Mindset</h2>
                  <p className="mt-2 text-sm text-gray-600">We are not afraid of innovation and new ideas — we rather embrace them, making things happen.</p>
                </div>

                {/* Text Item 3 */}
                <div className="p-6 rounded-xl transition-all duration-300 hover:transform hover:translate-y-[-4px] hover:shadow-lg cursor-pointer">
                  <h2 className="text-xl font-bold text-[#515859]">Meaningful Results</h2>
                  <p className="mt-2 text-sm text-gray-600">We work professionally with clear goals in mind for purposes we identify ourselves with.</p>
                </div>

                {/* Text Item 4 */}
                <div className="p-6 rounded-xl transition-all duration-300 hover:transform hover:translate-y-[-4px] hover:shadow-lg cursor-pointer">
                  <h2 className="text-xl font-bold text-[#515859]">Driven Attitude</h2>
                  <p className="mt-2 text-sm text-gray-600">Our goals are ambitious, but our determination and passion are even bigger. We prefer actions to words and goals to dreams.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Section */}
          <div className="mt-12">
            <div className="border border-gray-300 rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="relative">
                {/* Main Slider */}
                <div className="flex items-center">
                  {/* Current Slide */}
                  <div 
                    className="w-full flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {sliderData.map((slide, index) => (
                      <div 
                        key={index} 
                        className="w-full flex-shrink-0 flex gap-8"
                      >
                        <div className="w-1/2">
                          <img 
                            src={slide.image}
                            alt={slide.title} 
                            className={`w-full h-[400px] object-cover rounded-xl transition-all duration-500 ${
                              currentSlide === index ? '' : 'blur-sm opacity-70'
                            }`}
                          />
                        </div>
                        <div className={`w-1/2 flex flex-col justify-center pr-40 transition-all duration-500 ${
                          currentSlide === index ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <h2 className="text-4xl font-bold text-[#515859] mb-2 whitespace-pre-line">
                            {slide.title}
                          </h2>
                          <p className="text-gray-600 mt-4">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-8 gap-2">
                  {sliderData.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentSlide === index ? 'bg-[#515859]' : 'bg-gray-300'
                      }`}
                    ></button>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Testimonials Slider Section */}
          <div className="mt-12 mb-12">
            <div className="bg-[#515859] rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="relative">
                {/* Main Slider */}
                <div className="flex items-center">
                  <div 
                    className="w-full flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                  >
                    {testimonialData.map((testimonial, index) => (
                      <div 
                        key={index} 
                        className="w-full flex-shrink-0 px-4"
                      >
                        <div className={`max-w-3xl mx-auto transition-all duration-500 ${
                          currentTestimonial === index ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <p className="text-xl text-white italic text-center mb-8">
                            "{testimonial.quote}"
                          </p>
                          <div className="text-center">
                            <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                            <div className="text-gray-200 text-sm">{testimonial.title}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive dot indicators */}
                <div className="flex justify-center mt-8 gap-3">
                  {testimonialData.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 ${
                        currentTestimonial === index 
                          ? 'scale-150 bg-white' 
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
      <Footer />
    </>
  );
}