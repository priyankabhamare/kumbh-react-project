"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  href: string;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Navigating the Sacred Waters: A Guide to Ramkund Bathing Timings",
    excerpt: "For every devotee visiting Nashik, a dip in the holy Ramkund is the pinnacle of their spiritual journey. Understanding the Ramkund bathing timings is essential for...",
    href: "/events",
  },
  {
    id: "2",
    title: "The Ultimate Guide to the First Amrit Snan: August 2, 2027",
    excerpt: "The spiritual heartbeat of India is set to pulse in Nashik once again. As the gates of the Simhastha Kumbh Mela swing open, millions of devotees and seekers will gather...",
    href: "/events",
  },
  {
    id: "3",
    title: "Nashik Kumbh Mela 2027 Official Information: Your Ultimate Guide",
    excerpt: "The countdown to the world's largest spiritual congregation has begun. As devotees prepare for the Nashik Kumbh Mela 2027, the most frequent question is: Where is the...",
    href: "/about",
  },
  {
    id: "4",
    title: "Simhastha Kumbh Mela 2027: The Sacred Gathering in Nashik",
    excerpt: "The Simhastha Kumbh Mela 2027 is not just a festival; it is a celestial phenomenon that occurs once every 12 years when Jupiter enters the zodiac sign of Leo (Simha)...",
    href: "/about",
  },
  {
    id: "5",
    title: "Trimbakeshwar Kumbh Mela 2027 Schedule: Key Dates & Spiritual Guide",
    excerpt: "The Trimbakeshwar Kumbh Mela 2027 schedule is the most awaited announcement for millions of devotees and spiritual seekers worldwide. As one of the most sacred Hindu...",
    href: "/events",
  },
  {
    id: "6",
    title: "How to Get the Official Nashik Kumbh Mela Schedule",
    excerpt: "Planning your pilgrimage for the upcoming Simhastha? With millions of devotees expected, having the verified Nashik Kumbh Mela Schedule 2027 is essential for a...",
    href: "/events",
  },
];

export default function NewsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Latest News & Updates for Pilgrims
          </h2>
          <p className="text-muted-foreground">
            Stay informed with the most current information as we get closer to the event.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <article
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`p-6 bg-background rounded-lg border border-border transition-all duration-300 ${
                hoveredId === item.id ? "shadow-md border-primary/20" : ""
              }`}
            >
              <h3 className="font-semibold text-foreground mb-3 leading-snug line-clamp-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                {item.excerpt}
              </p>
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:underline"
              >
                read more
                <ArrowRight className={`w-3 h-3 transition-transform ${
                  hoveredId === item.id ? "translate-x-1" : ""
                }`} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
