import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { BookOpen, History, MapPin, Shield, Sparkles, Users } from "lucide-react";

const aboutSections = [
  {
    title: "History of Kumbh Mela",
    description:
      "Kumbh Mela traces its origins to ancient Hindu mythology, specifically the churning of the cosmic ocean (Samudra Manthan). The festival commemorates the mythological event where gods and demons fought over the pot (Kumbh) of nectar of immortality. Drops of this nectar fell at four sacred locations, which are now the sites of Kumbh Mela.",
    icon: History,
  },
  {
    title: "Why Simhastha in Nashik?",
    description:
      "The Simhastha Kumbh Mela in Nashik occurs when Jupiter (Brihaspati) enters the zodiac sign of Leo (Simha), hence the name 'Simhastha'. This celestial phenomenon happens once every 12 years. Nashik, situated on the banks of the holy Godavari River, is believed to be the place where Lord Rama, Sita, and Lakshmana spent part of their exile.",
    icon: Sparkles,
  },
  {
    title: "The Sacred Godavari",
    description:
      "The Godavari is one of India's most sacred rivers, often called the 'Ganga of the South' or 'Dakshin Ganga'. A ritual bath at Ramkund during Kumbh Mela is believed to cleanse pilgrims of their sins and bestow moksha. The river originates at Trimbakeshwar, one of the twelve Jyotirlingas.",
    icon: MapPin,
  },
  {
    title: "What to Expect in 2027",
    description:
      "The Simhastha Nashik Kumbh Mela 2027 is expected to draw millions of devotees, saints, and spiritual seekers from around the world. Major events include Shahi Snan (Royal Baths), religious discourses, cultural programs, and processions of various Akharas (religious orders).",
    icon: Users,
  },
];

const safetyTips = [
  "Carry identification documents at all times",
  "Keep emergency contact numbers saved",
  "Stay hydrated and carry water bottles",
  "Wear comfortable, simple clothing",
  "Keep valuables secure and minimal",
  "Follow crowd management guidelines",
  "Know the location of medical camps",
  "Travel in groups when possible",
];

const travelTips = [
  "Book accommodation well in advance",
  "Nashik is well-connected by rail and road",
  "Nearest airport is Mumbai (180 km)",
  "Local transport includes buses and auto-rickshaws",
  "Consider staying near Panchavati area",
  "Peak rush during Shahi Snan dates",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* About Hero Section */}
<section className="relative py-16 bg-accent text-accent-foreground">
  {/* Optional faint background overlay */}
  <div className="absolute inset-0">
    <img
      src="/kumbh.png" // Replace with your Kumbh Mela image in public folder
      alt="Kumbh Mela"
      className="w-full h-full object-cover opacity-10"
    />
    <div className="absolute inset-0 bg-black/20"></div> {/* overlay */}
  </div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-4 text-center">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">
      About Nashik Kumbh Mela
    </h1>
    <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
      Understanding the history, significance, and practical information 
      for your pilgrimage to the holy Godavari.
    </p>
  </div>
</section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {aboutSections.map((section) => (
              <div
                key={section.title}
                className="p-6 bg-card rounded-lg border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {section.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Guide Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Safety Tips */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Safety Guide</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Essential tips for a safe and peaceful pilgrimage experience.
              </p>
              <ul className="space-y-3">
                {safetyTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Travel Tips */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Travel Tips</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Practical advice for planning your journey to Nashik.
              </p>
              <ul className="space-y-3">
                {travelTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">Kumbh Mela by Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "30M+", label: "Expected Pilgrims" },
              { value: "55", label: "Days Duration" },
              { value: "12", label: "Years Cycle" },
              { value: "2000+", label: "Years of Tradition" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-lg bg-primary-foreground/10">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
