import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Calendar, Clock, MapPin, Star } from "lucide-react";

interface ShahiSnanDate {
  title: string;
  date: string;
  significance: string;
  isAmritSnan: boolean;
}

const shahiSnanDates: ShahiSnanDate[] = [
  {
    title: "First Amrit Snan (Shahi Snan)",
    date: "August 2, 2027",
    significance: "Beginning of Simhastha Kumbh Mela - The first royal bath marks the official commencement of the sacred gathering at Ramkund.",
    isAmritSnan: true,
  },
  {
    title: "Second Shahi Snan",
    date: "August 17, 2027",
    significance: "Purnima (Full Moon) - Auspicious full moon bathing day, considered highly meritorious for spiritual cleansing.",
    isAmritSnan: true,
  },
  {
    title: "Third Shahi Snan",
    date: "September 1, 2027",
    significance: "Amavasya (New Moon) - One of the most sacred bathing days, believed to bestow special blessings.",
    isAmritSnan: true,
  },
  {
    title: "Fourth Shahi Snan",
    date: "September 15, 2027",
    significance: "Purnima - Another significant full moon bathing opportunity during the Kumbh period.",
    isAmritSnan: false,
  },
  {
    title: "Fifth Shahi Snan",
    date: "October 1, 2027",
    significance: "Amavasya - Important new moon bathing date attracting large numbers of devotees.",
    isAmritSnan: false,
  },
  {
    title: "Final Shahi Snan",
    date: "October 14, 2027",
    significance: "Purnima - Concluding royal bath marking the end of the main Kumbh Mela festivities.",
    isAmritSnan: false,
  },
];

const ramkundTimings = [
  { period: "Early Morning (Brahma Muhurta)", time: "4:00 AM - 6:00 AM", note: "Most auspicious time" },
  { period: "Morning", time: "6:00 AM - 10:00 AM", note: "Peak hours, expect crowds" },
  { period: "Afternoon", time: "10:00 AM - 4:00 PM", note: "Relatively less crowded" },
  { period: "Evening", time: "4:00 PM - 7:00 PM", note: "Sunset aarti time" },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* hero section  */}
     <section className="relative py-16 bg-accent text-accent-foreground">
  {/* Optional faint background image overlay */}
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
    {/* Label / Tag */}
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-foreground/10 rounded-full mb-6">
      <Calendar className="w-4 h-4" />
      <span className="text-sm font-medium">Official Schedule 2027-2028</span>
    </div>

    {/* Heading */}
    <h1 className="text-3xl md:text-4xl font-bold mb-4">
      Shahi Snan Dates & Schedule
    </h1>

    {/* Description */}
    <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
      Plan your pilgrimage around the most auspicious bathing dates at the sacred Ramkund, Nashik.
    </p>
  </div>
</section>


      {/* Key Dates Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Nashik Kumbh Mela 2027-2028
            </h2>
            <p className="text-muted-foreground">
              Key Shahi Snan (Royal Bath) dates for your spiritual journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shahiSnanDates.map((event, index) => (
              <div
                key={event.title}
                className={`p-6 rounded-lg border transition-shadow hover:shadow-md ${
                  event.isAmritSnan 
                    ? "bg-primary/5 border-primary/30" 
                    : "bg-card border-border"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {event.isAmritSnan && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                      <Star className="w-3 h-3" />
                      Amrit Snan
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-primary font-medium mb-3">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {event.significance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ramkund Bathing Timings */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Ramkund Bathing Timings
              </h2>
              <p className="text-muted-foreground">
                Recommended bathing times at the sacred Ramkund
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 border-b border-border font-medium text-sm text-foreground">
                <div>Period</div>
                <div>Time</div>
                <div>Note</div>
              </div>
              {ramkundTimings.map((timing) => (
                <div
                  key={timing.period}
                  className="grid grid-cols-3 gap-4 p-4 border-b border-border last:border-0"
                >
                  <div className="font-medium text-foreground">{timing.period}</div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {timing.time}
                  </div>
                  <div className="text-sm text-muted-foreground">{timing.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-card rounded-lg border border-border p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Main Bathing Location: Ramkund, Panchavati
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ramkund is the principal bathing ghat during Nashik Kumbh Mela. Located in the Panchavati 
                  area on the banks of the Godavari River, it is believed to be the place where Lord Rama 
                  performed the last rites of his father, King Dasharatha. The ghat sees millions of 
                  devotees during the Shahi Snan days.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Bathing timings may vary based on crowd conditions and official 
                  announcements. Please follow local authority guidelines during your visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
