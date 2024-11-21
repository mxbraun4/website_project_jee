'use client';

import Header from '../../components/header';
import Footer from '../../components/footer';
import { useState, useEffect } from 'react';

const countryData = {
  austria: {
    name: "Austria",
    confederation: "JE Austria",
    description: "Junior Enterprises Austria is the Austrian Confederation of Junior Enterprises, supporting, integrating and representing them at the National and International level.",
    yearFounded: "1991",
    numJE: "9",
    socials: {
      website: "#",
      instagram: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  belgium: {
    name: "Belgium",
    confederation: "JE Belgium",
    description: "Junior Enterprises Belgium is the Belgium Confederation of Junior Enterprises. Founded in 1992, it supports, integrates and represents at the national and international levels the Belgium Network.",
    yearFounded: "2004",
    numJE: "16",
    socials: {
      website: "#",
      instagram: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  france: {
    name: "France",
    confederation: "JE France",
    description: "Junior-Enterprises are pedagogical consulting associations under the French law of 1901 whose social purpose is to increase students' skills through the achievement of services to professionals. The structures are established within higher education institutions and are vectors of commitment and employability for thousands of young people. They offer quality services to companies and allow students to develop their knowledge by putting their training into practice in order to fulfil the needs of clients. The first Junior Enterprise to be created in the world was established in Paris in 1967.",
    yearFounded: "1969",
    numJE: "140",
    socials: {
      website: "#",
      instagram: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  germany: {
    name: "Germany",
    hasMultipleJEs: true,
    defaultConfederation: 'bdsu',
    confederations: {
      bdsu: {
        name: "BDSU",
        description: "BDSU is one of the German Confederations of Junior Enterprises. Founded in 1992, it supports, integrates and represents at the national and international levels the German Network.",
        yearFounded: "1992",
        numJE: "36",
        socials: {
          website: "#",
          instagram: "#",
          linkedin: "#"
        }
      },
      jc: {
        name: "JC Network",
        description: "JC Network is one of the German Confederations of Junior Enterprises. Founded in 1992, it supports, integrates and represents at the national and international levels the German Network.",
        yearFounded: "2002",
        numJE: "41",
        socials: {
          website: "#",
          instagram: "#",
          linkedin: "#",
          facebook: "#"
        }
      }
    }
  },
  italy: {
    name: "Italy",
    confederation: "JE Italy",
    description: "Junior Enterprises Italy is the Italian Confederation of Junior Enterprise, founded in 1992. We take care of supporting Italian companies in their work so that the \"Junior Enterprise\" brand continues to be a synonym of quality. Our mission is to guarantee the continuous growth of the Juniors in our network and encourage the birth of new ones. Representing the Movement in Italy and abroad, our confederation proposes itself as a point of contact between the JEs to encourage the integrity of the national network and the exchange of best practices.",
    yearFounded: "1992",
    numJE: "31",
    socials: {
      website: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  netherlands: {
    name: "Netherlands",
    confederation: "Junior Enterprises Netherlands",
    description: "Junior Enterprises Netherlands is the Dutch Confederation of Junior Enterprises. Founded in 1992, it supports, integrates and represents at the national and international levels the Dutch Network.",
    yearFounded: "1992",
    numJE: "12",
    socials: {
      website: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  portugal: {
    name: "Portugal",
    confederation: "JE Portugal",
    description: "Founded in 2012, JE Portugal comes to unify, represent and potentiate the Network of Portuguese Junior Enterprises that appeared in 1990 in Portugal. The Portuguese Junior Movement has more than 1000 Junior Entrepreneurs, students from 16 different educational institutions, spread over the 23 Junior Enterprises.",
    yearFounded: "2012",
    numJE: "23",
    socials: {
      website: "#",
      instagram: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  spain: {
    name: "Spain",
    confederation: "JE Spain",
    description: "Junior Enterprises Spain is the Spanish Confederation of Junior Enterprises. Founded in 1992, it supports, integrates and represents at the national and international levels the Spanish Network.",
    yearFounded: "1992",
    numJE: "5",
    socials: {
      website: "#",
      instagram: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  switzerland: {
    name: "Switzerland",
    confederation: "JE Switzerland",
    description: "Junior Enterprises Switzerland is the Swiss Confederation of Junior Enterprises. Founded in 1992, it supports, integrates and represents at the national and international levels the Swiss Network.",
    yearFounded: "1992",
    numJE: "11",
    socials: {
      website: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  poland: {
    name: "Poland",
    hasMultipleJEs: true,
    defaultConfederation: 'pbda',
    confederations: {
      pbda: {
        name: "PBDA",
        description: "As a Junior Enterprise, we offer professional business consulting services. As part of Junior Enterprise Europe, we have not only academic knowledge but also experience in supporting the development of entrepreneurship. We are a team of charismatic and creative people for whom continuous development is paramount purpose. Undertaking cooperation, we will provide an individual approach to each task. We have been operating for over 14 years. We have completed projects for, among other companies in the industry gastronomic, IT, production, and economic sectors. Thanks to the combination of our knowledge, experience and the status of the student organization, implemented by us projects are characterized by high quality, low price and short deadline performance. It is this element that allows us to stand out on the Polish market.",
        yearFounded: "2008",
        numJE: "1",
        socials: {
          website: "#",
          instagram: "#",
          linkedin: "#"
        }
      },
      conquest: {
        name: "Conquest Consulting",
        description: "ConQuest Consulting is a Junior Enterprise founded in 1998 and based in Warsaw, Poland. We provide business consulting services such as market analysis, competitive analysis and entry strategies for target markets. Our mission is learning by doing, which we accomplish by taking on ambitious projects.",
        yearFounded: "1998",
        numJE: "1",
        socials: {
          website: "#",
          linkedin: "#",
          facebook: "#"
        }
      }
    }
  },
  united_kingdom: {
    name: "United Kingdom",
    hasMultipleJEs: true,
    defaultConfederation: 'westminster',
    confederations: {
      westminster: {
        name: "Westminster Business Consultants",
        description: "Founded in 1995, Westminster Business Consultants (WBC) is a Junior Enterprise associated with the University of Westminster. WBC is entirely run by the students and recent graduates of the university. WBC offers services in five key areas: Market Research, Digital Advisory, Marketing Consultancy, Performance Improvement, and Event Management. Our consulting services are tailored to our client's needs whilst also adhering to the highest standards. Our consultants at WBC are well informed and up to date with the latest techniques in their fields. Our consultants have fresh ideas and are motivated and disciplined, enabling us to offer high-quality services whilst keeping costs effective. WBC places emphasis on the development of a dual working and learning environment that challenges students and inspires them to work with increasing confidence. The team consists of students not only from diverse cultural backgrounds, but also from a broad spectrum of academic disciplines such as Business Administration, Marketing, Finance, HR, and IT.",
        yearFounded: "1995",
        numJE: "1",
        socials: {
          website: "#",
          instagram: "#",
          linkedin: "#",
          facebook: "#"
        }
      },
      kings: {
        name: "King's Junior Consulting",
        description: "King's Junior Consulting (KJC) was founded in October 2020, by its 5 founding members. We achieved our first project in February 2021 and since then, we have grown from 11 members to 34 members. On March 2022, we became officially a Junior Enterprise. KJC works like a consultancy company and is managed by the students of King's College London.",
        yearFounded: "2020",
        numJE: "1",
        socials: {
          website: "#",
          instagram: "#",
          linkedin: "#"
        }
      },
      imperial: {
        name: "Imperial Junior Solutions",
        description: "Founded in 2018, Imperial Junior Solutions (IJS) is a Junior Enterprise associated with the Imperial College London. IJS works like a technical consultancy company and is entirely run by the students and recent graduates of the college. IJS offers services in data analysis, website and application development, and engineering design.",
        yearFounded: "2018",
        numJE: "1",
        socials: {
          website: "#",
          instagram: "#"
        }
      },
      saba: {
        name: "SABA Junior Consulting",
        description: "SABA Junior Consulting is a non-profit organisation that allows handpicked students from the London School of Economics and Political Science (LSE) to offer high-quality services tailored to organisations' needs at competitive prices. Our previous experiences include but are not limited to consulting, article writing, market research, professional outreach, and translation. We promote entrepreneurship, empower our students, and contribute to forming tomorrow's leaders by connecting high-skilled students with companies for short-term projects. Launching the company three years ago with only four students, we have now developed an extensive network of LSE students, embodying academic excellence and professional experience from a myriad of backgrounds.",
        yearFounded: "2020",
        numJE: "1",
        socials: {
          website: "#",
          instagram: "#",
          linkedin: "#",
          facebook: "#"
        }
      }
    }
  },
  romania: {
    name: "Romania",
    confederation: "Business Organization for Students",
    description: "Business Organization for Students is a Junior Enterprise linking both business and academic environments. We offer the possibility of specializing in one of the following areas: Marketing, Sales, Human Resources and Research and Development. Moreover, by being part of the Junior Enterprise Europe network, BOS offers international experiences.",
    yearFounded: "2001",
    numJE: "1",
    socials: {
      website: "#",
      instagram: "#",
      facebook: "#",
      linkedin: "#",
      twitter: "#",
      tiktok: "#"
    }
  },
  norway: {
    name: "Norway",
    confederation: "StudConsult",
    description: "StudConsult is a Norwegian Junior Enterprise operating out of BI Norwegian Business School´s Oslo campus. Three Norwegian student unions founded the company in 1988, and for a while StudConsult had divisions at several other Norwegian universities and business schools. From 2006 and onwards, the Oslo division is the company's only division. We are a non-profit, majority owned by a foundation, and all the profits get re-invested into the company. We offer a broad range of services, including market and competitor analysis, strategic analysis and data analysis. Our tight connection to BI´s professors enables us to offer high quality services, at a competitive price point.",
    yearFounded: "1988",
    numJE: "1",
    socials: {
      website: "#",
      instagram: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  denmark: {
    name: "Denmark",
    confederation: "Junior Enterprise Sønderborg",
    description: "JESO is a Junior Enterprise linking the business world and academia. Our services are Marketing, Research and Sustainability. Thanks to our international campus we have a lot of different nationalities in our enterprise. Our members come from mainly business and engineering students.",
    yearFounded: "2020",
    numJE: "1",
    socials: {
      website: "#",
      instagram: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  croatia: {
    name: "Croatia",
    confederation: "Next Junior Enterprise",
    description: "",  // No description provided
    yearFounded: "",  // No year provided
    numJE: "1",
    socials: {}  // No socials provided
  },
  ireland: {
    name: "Ireland",
    confederation: "CCD",
    description: "",  // No description provided
    yearFounded: "",  // No year provided
    numJE: "1",
    socials: {}  // No socials provided
  }
};

export default function Initiatives() {
    const [selectedCountry, setSelectedCountry] = useState('austria');
    const currentCountry = countryData[selectedCountry];
    const [selectedConfederation, setSelectedConfederation] = useState(() => {
        if (currentCountry.hasMultipleJEs) {
            return currentCountry.defaultConfederation;
        }
        return null;
    });

    useEffect(() => {
        if (currentCountry.hasMultipleJEs) {
            setSelectedConfederation(currentCountry.defaultConfederation);
        } else {
            setSelectedConfederation(null);
        }
    }, [currentCountry]);

    return (
        <>
            <Header />
            <div className="relative overflow-hidden min-h-screen">
                <div className="w-full max-w-7xl mx-auto px-1 md:px-2">
                    {/* Top Box Section */}
                    <div className="mt-12">
                        <div className="border border-gray-300 rounded-3xl p-8 md:p-12">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                {/* Text Content */}
                                <div className="w-full md:w-1/2">
                                    <h2 className="text-4xl font-bold text-[#515859] mb-4">
                                        WE ARE
                                    </h2>
                                    <h3 className="text-2xl font-bold text-[#515859] mb-6">
                                        16 countries, 326 Junior Enterprises
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        The Junior Enterprises are organised in Confederations. 
                                        A JE without a confederation is a Consultative Member. 
                                        23 people represent the decision body of Junior Enterprises Europe.
                                    </p>
                                    <button className="bg-[#515859] text-white px-6 py-3 rounded-lg hover:bg-[#626b6c] transition-colors">
                                        Create a Junior Enterprise
                                    </button>
                                </div>

                                {/* Image */}
                                <div className="w-full md:w-1/2">
                                    <img 
                                        src="/images/slider3.png" 
                                        alt="Junior Enterprises Network" 
                                        className="w-full h-[400px] object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Country selector section */}
                    <div className="mt-8">
                        <div className="flex gap-8 w-full">
                            {/* Left sidebar with countries */}
                            <div className="w-64 border border-gray-300 rounded-3xl p-4">
                                <div className="flex flex-col gap-1">
                                    {Object.keys(countryData).map((countryKey) => (
                                        <a 
                                            key={countryKey}
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setSelectedCountry(countryKey);
                                            }}
                                            className={`px-4 py-2 rounded-lg text-[#515859] hover:bg-gray-50 
                                                transition-all duration-200 ease-in-out
                                                ${selectedCountry === countryKey 
                                                    ? 'bg-[#A51C37] text-white shadow-md' 
                                                    : 'hover:shadow-md hover:-translate-y-0.5'
                                                }`}
                                        >
                                            {countryData[countryKey].name}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Right content area */}
                            <div className="flex-1 border border-gray-300 rounded-3xl p-8 md:p-12">
                                {currentCountry.hasMultipleJEs ? (
                                    <div>
                                        {/* Country Name */}
                                        <h2 className="text-2xl font-bold text-[#515859] mb-4">{currentCountry.name}</h2>
                                        
                                        {/* Sub-organization tabs */}
                                        <div className="flex gap-2 mb-8 border-b border-gray-200">
                                            {Object.entries(currentCountry.confederations).map(([key, confederation]) => (
                                                <button
                                                    key={key}
                                                    onClick={() => setSelectedConfederation(key)}
                                                    className={`px-4 py-2 text-[#515859] hover:bg-gray-50 rounded-t-lg transition-all ${
                                                        selectedConfederation === key 
                                                            ? 'border-b-2 border-[#A51C37] font-medium'
                                                            : 'hover:border-b-2 hover:border-gray-300'
                                                    }`}
                                                >
                                                    {confederation.name}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Selected confederation content */}
                                        {currentCountry.confederations[selectedConfederation] && (
                                            <div>
                                                <h3 className="text-xl text-[#515859] mb-4">
                                                    {currentCountry.confederations[selectedConfederation].name}
                                                </h3>
                                                <p className="text-[#515859] mb-6">
                                                    {currentCountry.confederations[selectedConfederation].description}
                                                </p>
                                                
                                                <div className="mb-6 text-[#515859]">
                                                    <p className="mb-2">
                                                        <strong>Year of foundation:</strong> {currentCountry.confederations[selectedConfederation].yearFounded}
                                                    </p>
                                                    <p>
                                                        <strong>Number of Junior Enterprises:</strong> {currentCountry.confederations[selectedConfederation].numJE}
                                                    </p>
                                                </div>

                                                <div className="flex gap-4">
                                                    {Object.entries(currentCountry.confederations[selectedConfederation].socials).map(([platform, link]) => (
                                                        link && (
                                                            <a
                                                                key={platform}
                                                                href={link}
                                                                className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all text-[#515859]"
                                                            >
                                                                {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                                            </a>
                                                        )
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    // Display single confederation (existing layout)
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#515859] mb-2">{currentCountry.name}</h2>
                                        <h3 className="text-xl text-[#515859] mb-4">{currentCountry.confederation}</h3>
                                        <p className="text-[#515859] mb-6">{currentCountry.description}</p>
                                        
                                        <div className="mb-6 text-[#515859]">
                                            <p className="mb-2"><strong>Year of foundation:</strong> {currentCountry.yearFounded}</p>
                                            <p><strong>Number of Junior Enterprises:</strong> {currentCountry.numJE}</p>
                                        </div>

                                        <div className="flex gap-4">
                                            {currentCountry.socials.website && (
                                                <a href={currentCountry.socials.website} className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all text-[#515859]">Website</a>
                                            )}
                                            {currentCountry.socials.instagram && (
                                                <a href={currentCountry.socials.instagram} className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all text-[#515859]">Instagram</a>
                                            )}
                                            {currentCountry.socials.linkedin && (
                                                <a href={currentCountry.socials.linkedin} className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all text-[#515859]">LinkedIn</a>
                                            )}
                                            {currentCountry.socials.facebook && (
                                                <a href={currentCountry.socials.facebook} className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all text-[#515859]">Facebook</a>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}