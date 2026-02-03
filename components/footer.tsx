import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Kumbh" },
  { href: "/events", label: "Shahi Snan Dates" },
  { href: "/nearby-places", label: "Places to Visit" },
  { href: "/contact", label: "Contact" },
];

const resources = [
  { label: "Safety Guide", href: "/about" },
  { label: "Travel Tips", href: "/about" },
  { label: "Accommodation", href: "/contact" },
  { label: "History of Kumbh", href: "/about" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">ॐ</span>
              </div>
              <div>
                <span className="text-lg font-bold block">Nashik Kumbh Mela</span>
                <span className="text-xs text-background/60">2027-2028</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed max-w-md">
              Your independent guide to Simhastha Nashik Kumbh Mela. We provide practical 
              information about dates, travel, accommodation, and safety to help pilgrims 
              plan their spiritual journey to the holy Godavari river.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <nav className="flex flex-col gap-2">
              {resources.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p className="w-text-center">
             &copy; {currentYear} Nashik Kumbh Mela Guide. All rights reserved.
           </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
