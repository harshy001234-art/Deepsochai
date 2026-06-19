import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "DeepSoch helped us scale AI workloads without massive infrastructure costs.",
    author: "Director of Engineering",
    company: "Global Media Corp",
    initial: "G",
  },
  {
    quote: "The GPU infrastructure dramatically improved our workflow speed.",
    author: "Head of AI",
    company: "TechScale Innovations",
    initial: "T",
  },
  {
    quote: "We deployed our AI product faster using DeepSoch infrastructure.",
    author: "CTO",
    company: "Nexus Automation",
    initial: "N",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#F5F5F7]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] leading-tight"
          >
            Why businesses choose DeepSoch AI.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col"
            >
              <p className="text-[#1D1D1F] text-[17px] font-medium leading-relaxed flex-1 mb-8">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1D1D1F] flex items-center justify-center text-white text-sm font-semibold shrink-0">
                  {item.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1D1D1F]">{item.author}</p>
                  <p className="text-xs text-[#6E6E73]">{item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
