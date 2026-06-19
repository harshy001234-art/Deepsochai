import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Building2, Headphones, ChevronLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import logoPath from "@assets/favicon_1781884528715.png";

const reasons = [
  "Get Started",
  "Book a Demo",
  "Enterprise / Sales",
  "Support",
  "Partnership",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", reason: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${form.reason || "Inquiry"}] from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nReason: ${form.reason}\n\n${form.message}`
    );
    window.location.href = `mailto:contact@deepsoch.ai?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-0 selection:bg-blue-100">
        {/* Back link */}
        <div className="max-w-5xl mx-auto px-6 mb-10">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-[#6E6E73] hover:text-[#1D1D1F] transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" />
            Back to DeepSoch AI
          </Link>
        </div>

        <div className="max-w-5xl mx-auto px-6 pb-28">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-[44px] md:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4 leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg text-[#6E6E73] max-w-xl leading-relaxed">
              Whether you're ready to scale, need a demo, or want to talk enterprise — we're here to help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Left — contact cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="md:col-span-2 flex flex-col gap-4"
            >
              {/* Primary email */}
              <a
                href="mailto:contact@deepsoch.ai"
                className="block p-5 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-[13px] font-semibold text-[#1D1D1F]">Email Us</p>
                </div>
                <p className="text-[15px] font-medium text-blue-600 group-hover:underline">contact@deepsoch.ai</p>
                <p className="text-[13px] text-[#6E6E73] mt-1">We respond within 24 hours.</p>
              </a>

              {/* Contact tiles */}
              {[
                { icon: <MessageSquare className="w-4 h-4 text-blue-600" />, title: "Book a Demo", sub: "See DeepSoch AI in action.", href: "mailto:contact@deepsoch.ai?subject=Book%20a%20Demo" },
                { icon: <Building2 className="w-4 h-4 text-blue-600" />, title: "Enterprise & Sales", sub: "Custom compute for your team.", href: "mailto:contact@deepsoch.ai?subject=Enterprise%20%2F%20Sales%20Inquiry" },
                { icon: <Headphones className="w-4 h-4 text-blue-600" />, title: "Support", sub: "Technical help and billing.", href: "mailto:contact@deepsoch.ai?subject=Support%20Request" },
              ].map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#1D1D1F]">{card.title}</p>
                    <p className="text-[12px] text-[#6E6E73]">{card.sub}</p>
                  </div>
                </a>
              ))}

              {/* Brand mark */}
              <div className="mt-2 flex items-center gap-2">
                <img src={logoPath} alt="DeepSoch AI" className="w-5 h-5 rounded-md object-contain bg-black" />
                <span className="text-[12px] text-[#6E6E73]">DeepSoch AI · Think Deeper. Compute Smarter.</span>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-3"
            >
              {sent ? (
                <div className="h-full flex items-center justify-center py-20">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1D1D1F] mb-2">Opening your email client…</h3>
                    <p className="text-[#6E6E73] text-sm">Or email us directly at <a href="mailto:contact@deepsoch.ai" className="text-blue-600 hover:underline">contact@deepsoch.ai</a></p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-medium text-[#1D1D1F]">Name <span className="text-red-400">*</span></label>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="h-11 px-4 rounded-xl border border-gray-200 bg-white text-[14px] text-[#1D1D1F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-medium text-[#1D1D1F]">Email <span className="text-red-400">*</span></label>
                      <input
                        required
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="h-11 px-4 rounded-xl border border-gray-200 bg-white text-[14px] text-[#1D1D1F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-[#1D1D1F]">Company</label>
                    <input
                      type="text"
                      placeholder="Your company (optional)"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="h-11 px-4 rounded-xl border border-gray-200 bg-white text-[14px] text-[#1D1D1F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-[#1D1D1F]">Reason <span className="text-red-400">*</span></label>
                    <select
                      required
                      value={form.reason}
                      onChange={(e) => setForm({ ...form, reason: e.target.value })}
                      className="h-11 px-4 rounded-xl border border-gray-200 bg-white text-[14px] text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a reason…</option>
                      {reasons.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-[#1D1D1F]">Message <span className="text-red-400">*</span></label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us what you're looking for…"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-[14px] text-[#1D1D1F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all resize-none leading-relaxed"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-[15px] transition-colors"
                  >
                    Send Message
                  </Button>

                  <p className="text-[12px] text-[#6E6E73] text-center">
                    Or email us directly at{" "}
                    <a href="mailto:contact@deepsoch.ai" className="text-blue-600 hover:underline">
                      contact@deepsoch.ai
                    </a>
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
