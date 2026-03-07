import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/mobile-detailing-toronto", label: "Mobile Detailing Toronto" },
  { href: "/reviews", label: "Reviews" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact / Book" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-card border-t border-border mt-16">
      <div className="max-w-[1100px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-4">
              PitStop Polish
            </h4>
            <p className="text-text-muted text-sm">Premium mobile detailing in Toronto and the GTA. We come to you.</p>
            <p className="mt-2">
              <a href="tel:+16478237338" className="text-accent font-medium">
                (647) 823-7338
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-4">
              Quick links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-muted hover:text-accent text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-4">
              Connect
            </h4>
            <a
              href="https://www.google.com/maps?cid=0x89d4cdaa61cd7613:0xf0845188efaf56c6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent text-sm transition-colors"
            >
              Google Business
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-text-muted">
          © PitStop Polish. Toronto & GTA mobile detailing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
