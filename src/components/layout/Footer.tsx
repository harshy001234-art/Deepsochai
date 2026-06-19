import { Link } from "wouter";

const logoPath = "/favicon.svg";
const contactHref = "/contact";

const columns = [
  {
    heading: "Company",
    links: [
      { label: "About DeepSoch", href: "#company" },
      { label: "Enterprise Team", href: contactHref },
      { label: "Careers", href: contactHref },
      { label: "Contact", href: contactHref },
    ],
  },
  {
    heading: "Product",
    links: [
      { label: "GPU Cloud", href: "#product" },
      { label: "AI APIs", href: "#product" },
      { label: "Dashboard", href: "#product" },
      { label: "Deployments", href: "#product" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "Docs", href: contactHref },
      { label: "Platform Guides", href: contactHref },
      { label: "Security", href: contactHref },
      { label: "Pricing", href: contactHref },
    ],
  },
  {
    heading: "Build & Explore",
    links: [
      { label: "Use Cases", href: "#solutions" },
      { label: "Model Hosting", href: "#product" },
      { label: "Image Pipelines", href: "#product" },
      { label: "Automation", href: "#product" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Community", href: contactHref },
      { label: "Support", href: contactHref },
      { label: "Book Demo", href: contactHref },
      { label: "Sales", href: contactHref },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1F] text-white">
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 cursor-pointer mb-4">
              <img src={logoPath} alt="DeepSoch AI" className="w-7 h-7 rounded-lg object-contain bg-black" />
              <span className="text-[15px] font-semibold tracking-tight text-white">DeepSoch AI</span>
            </Link>
            <p className="text-[#86868B] text-sm leading-relaxed">
              Think Deeper.
              <br />
              Compute Smarter.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h4 className="text-[13px] font-semibold text-white mb-4">{column.heading}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link href={link.href} className="text-[13px] text-[#86868B] hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-[13px] text-[#86868B] hover:text-white transition-colors">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href={contactHref} className="text-[13px] text-[#86868B] hover:text-white transition-colors">Terms &amp; Conditions</a>
            <a href={contactHref} className="text-[13px] text-[#86868B] hover:text-white transition-colors">Privacy Policy</a>
          </div>
          <p className="text-[13px] text-[#86868B]">
            &copy; {new Date().getFullYear()} DeepSoch AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
