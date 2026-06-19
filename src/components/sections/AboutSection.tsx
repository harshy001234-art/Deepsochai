import { motion } from "framer-motion";

const principles = [
  {
    title: "Infrastructure Ownership",
    description: "We help enterprises build AI systems they can control, audit, and scale on their own terms.",
  },
  {
    title: "Business-First Design",
    description: "We design around operational needs, workflows, and measurable outcomes instead of pushing generic AI tooling.",
  },
  {
    title: "Production Discipline",
    description: "Security, deployment quality, reliability, and long-term maintainability are built into every implementation.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-28 bg-[#F5F5F7]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left column */}
          <div className="lg:sticky lg:top-32">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4"
            >
              About DeepSoch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] leading-tight mb-6"
            >
              Built for organisations that need more than demos.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-[#6E6E73] leading-relaxed"
            >
              DeepSoch AI focuses on serious implementation, private infrastructure, and practical AI adoption that fits real teams, real workloads, and real business constraints.
            </motion.p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-10">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-3">
                  DeepSoch Principle
                </p>
                <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">{principle.title}</h3>
                <p className="text-[#6E6E73] leading-relaxed text-[15px]">{principle.description}</p>
                {index < principles.length - 1 && (
                  <div className="mt-10 border-b border-gray-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
