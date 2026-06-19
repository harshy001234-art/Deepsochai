import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Infrastructure Built for AI",
    description: "Purpose-built compute environments for inference, image generation, media rendering, and custom AI operations.",
  },
  {
    number: "02",
    title: "Compute Without Limits",
    description: "Scale demanding workloads without expensive on-prem hardware or fragmented third-party infrastructure.",
  },
  {
    number: "03",
    title: "Enterprise-Ready Security",
    description: "Operate with stronger control through private deployment models, access boundaries, and infrastructure governance.",
  },
  {
    number: "04",
    title: "Faster Time to Production",
    description: "Move faster with ready-to-run compute, APIs, dashboards, and deployment systems built for execution.",
  },
];

export default function WhyDeepSoch() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4"
          >
            Why DeepSoch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] leading-tight max-w-2xl"
          >
            More than cloud. Built for AI.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <p className="text-4xl font-bold text-gray-100 leading-none mb-4 select-none">{reason.number}</p>
              <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">{reason.title}</h3>
              <p className="text-[#6E6E73] leading-relaxed text-[15px]">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
