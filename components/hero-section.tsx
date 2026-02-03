"use client";

import { ArrowRight, Calendar, MapPin, Shield } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const quickLinks = [
    {
      id: "dates",
      icon: Calendar,
      title: "Official Dates & Schedule",
      description: "View the complete Shahi Snan dates and auspicious bathing timings for 2027-2028.",
      href: "/events",
      cta: "View Schedule",
    },
    {
      id: "safety",
      icon: Shield,
      title: "Safety Guide",
      description: "Essential tips and protocols for a safe and peaceful pilgrimage experience.",
      href: "/about",
      cta: "Read Guide",
    },
    {
      id: "places",
      icon: MapPin,
      title: "Places to Visit",
      description: "Explore sacred temples, ghats, and spiritual destinations around Nashik.",
      href: "/nearby-places",
      cta: "Explore Places",
    },
  ];

  return (
    <div>


      {/* Hero Section */}
<section className="relative overflow-hidden min-h-screen">
  {/* Background image */}
  <div className="absolute inset-0">
    <img
      src="\kumbh.png" // Replace with your Kumbh Mela image in public folder
      alt="Kumbh Mela"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>
  {/* bg-black/40 = black overlay with 40% opacity */}

  {/* Centered content */}
  <div className="relative flex items-center justify-center min-h-screen px-4 py-16">
    <div className="text-center max-w-3xl text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
         Nashik Kumbh Mela 2027
      </h1>
      <p className="text-lg md:text-xl opacity-90 mb-4">
        The Ultimate Pilgrim&apos;s Independent Guide
      </p>
      <p className="text-base opacity-80 mb-8 leading-relaxed max-w-2xl mx-auto">
        Dates, Travel & Stay and Safety Guide
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity"
        >
          View Shahi Snan Dates
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 text-white border border-white/30 rounded-md font-medium hover:bg-white/30 transition-colors"
        >
          Tips for Pilgrims
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* Welcome Section */}
      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Welcome to the independent resource for the upcoming Kumbh Mela in Nashik. 
              As one of the largest spiritual gatherings in the world, staying informed is the key 
              to a peaceful experience. Our mission is to simplify your spiritual journey by bringing 
              you practical insights directly from the heart of Nashik.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our comprehensive Nashik Kumbh Mela 2027 guide provides everything you need to know—from 
              auspicious Shahi Snan timings to essential transport tips and crowd management protocols. 
              Whether you are looking for the latest dates, seeking advice on travel logistics, or 
              looking for a reliable Safety Guide, we are here to ensure your journey to the holy 
              Godavari river is sacred and secure.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Cards */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Stop Searching. Start Planning.</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Your Reliable Guide to the 2027 Pilgrimage
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {quickLinks.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`block p-6 bg-card rounded-lg border border-border transition-all duration-300 ${
                  hoveredCard === item.id ? "shadow-lg border-primary/30 -translate-y-1" : "shadow-sm"
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                  hoveredCard === item.id ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                }`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-medium text-sm">
                  {item.cta}
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    hoveredCard === item.id ? "translate-x-1" : ""
                  }`} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Event Start Banner */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Event Starts: August 2, 2027</h2>
          <p className="opacity-90">First Amrit Snan (Shahi Snan) at the sacred Ramkund</p>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary-foreground text-primary rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            <Calendar className="w-4 h-4" />
            View Complete Schedule
          </Link>
        </div>
      </section>
    </div>
  );
}
