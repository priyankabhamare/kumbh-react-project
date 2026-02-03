"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ExternalLink, Filter } from "lucide-react";
import { useEffect, useState } from "react";

interface PlaceData {
  id: number;
  name: string;
  category: "Religious" | "Nature" | "Historical";
  description: string;
  significance: string;
  image: string;
}

const placesData: PlaceData[] = [
 
  {
    id: 1,
    name: "Trimbakeshwar Temple",
    category: "Religious",
    description: "One of the twelve Jyotirlingas, located at the source of the Godavari River near Brahmagiri mountain.",
    significance: "The unique Shivalinga here has three faces representing Brahma, Vishnu, and Shiva. A key pilgrimage site during Kumbh Mela.",
    image: "/Trimbakeshwar.png"
  },
  {
    id: 2,
    name: "Ramkund",
    category: "Religious",
    description: "The principal sacred bathing ghat on the banks of the Godavari River in Nashik's Panchavati area.",
    significance: "According to mythology, Lord Rama bathed here during his exile. Pilgrims immerse ancestors' ashes here for moksha.",
    image: "/Ramkund.png"
  },
  {
    id: 3,
    name: "Panchavati",
    category: "Religious",
    description: "The sacred area where Lord Rama, Sita, and Lakshmana lived during their 14-year exile.",
    significance: "Home to Kalaram Temple, Sita Gumpha cave, and Tapovan. The name comes from five ancient banyan trees.",
    image: "/panchavati.png"
  },
  {
    id: 4,
    name: "Anjaneri Hills",
    category: "Nature",
    description: "Rising to 4,264 feet, believed to be the birthplace of Lord Hanuman according to Hindu mythology.",
    significance: "Trekkers climb 2,500+ steps to reach the summit temple with panoramic views of the Sahyadri range.",
    image: "/Anjaneri-Fort.png"
  },
  {
    id: 5,
    name: "Dugarwadi Waterfall",
    category: "Nature",
    description: "A scenic waterfall located about 30 km from Nashik city, surrounded by lush greenery and rocky terrain.",
    significance: "Popular for trekking, picnics, and nature photography. A must-visit for nature lovers during the Kumbh Mela season.",
    image: "/Dugarwadi.png"
  },
  {
    id: 6,
    name: "Sula Vineyards",
    category: "Nature",
    description: "Established in 1999, pioneered the wine revolution in India and put Nashik on the global wine map.",
    significance: "Offers vineyard tours, wine tasting, and hosts the annual SulaFest music festival.",
    image: "/sula.png"
  },
  {
    id: 7,
    name: "Pandavleni Caves",
    category: "Historical",
    description: "A group of 24 rock-cut Buddhist caves dating from the 1st century BCE to the 3rd century CE.",
    significance: "Contains remarkable sculptures, Brahmi inscriptions, and depicts the evolution of Buddhist architecture.",
    image: "/pandav-leni.png"
  },
  {
    id: 8,
    name: "Kalaram Temple",
    category: "Historical",
    description: "Ancient black stone temple dedicated to Lord Rama located in Panchavati, Nashik.",
    significance: "Built in the 18th century, this temple is a fine example of historical architecture and is important during Kumbh Mela.",
    image: "/kalaram-temple.png"
  },
  {
    id: 9,
    name: "Saptashrungi Fort",
    category: "Historical",
    description: "A historic fort near Nashik, known for its ancient temple of Goddess Saptashrungi.",
    significance: "Offers trekking, spiritual visits, and panoramic views of the surrounding area.",
    image: "/vani.png"
  }
];


type FilterCategory = "All" | "Religious" | "Nature" | "Historical";
const filterCategories: FilterCategory[] = ["All", "Religious", "Nature", "Historical"];

export default function NearbyPlacesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [cardsVisible, setCardsVisible] = useState(true);

  useEffect(() => {
    setCardsVisible(false);
    const timer = setTimeout(() => setCardsVisible(true), 150);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const filteredPlaces = activeFilter === "All" 
    ? placesData 
    : placesData.filter(place => place.category === activeFilter);

  const getCategoryColor = (category: PlaceData["category"]) => {
    switch (category) {
      case "Religious": return "bg-primary text-primary-foreground";
      case "Nature": return "bg-green-600 text-white";
      case "Historical": return "bg-accent text-accent-foreground";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 bg-accent text-accent-foreground">
          <div className="absolute inset-0">
            <img
              src="/kumbh.png"
              alt="Kumbh Mela"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Places to Visit in Nashik
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
              Explore sacred temples, historical sites, and scenic destinations 
              around Nashik during your Kumbh Mela pilgrimage.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-6 border-b border-border bg-card">
          <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-muted-foreground mr-2">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filter:</span>
            </div>
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
                <span className="ml-1 opacity-70">
                  ({category === "All" 
                    ? placesData.length 
                    : placesData.filter(p => p.category === category).length
                  })
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Places Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            {filteredPlaces.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No places found for this category.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlaces.map((place, index) => (
                  <article
                    key={place.id}
                    className={`bg-white rounded-lg border border-border overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/20 ${
                      cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded ${getCategoryColor(
                            place.category
                          )}`}
                        >
                          {place.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{place.name}</h3>
                      <p className="text-gray-700 text-sm mb-2 leading-relaxed">{place.description}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{place.significance}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Info Banner */}
        <section className="py-12 bg-muted">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-card rounded-lg border border-border p-8 flex flex-col md:flex-row items-start gap-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <ExternalLink className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Plan Your Complete Pilgrimage
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nashik offers a unique blend of spirituality, history, and natural beauty. 
                  Whether you seek divine blessings at ancient temples, wish to trace the footsteps 
                  of Lord Rama, or explore the region's rich Buddhist heritage, Nashik has something 
                  for every pilgrim. We recommend visiting Trimbakeshwar and Ramkund as essential 
                  stops during your Kumbh Mela journey.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
