import { motion } from "framer-motion";

const features = [
  {
    title: "Compute Engine",
    description: "Burstable GPU capacity with intelligent orchestration and performance visibility.",
  },
  {
    title: "AI APIs",
    description: "APIs that support production-grade applications, media generation, and enterprise integrations.",
  },
  {
    title: "AI Dashboards",
    description: "Unified control panels for workloads, usage metrics, deployment states, and operational insights.",
  },
  {
    title: "Deployment Systems",
    description: "Private, dedicated, or custom infrastructure delivery models for teams with serious requirements.",
  },
];

export default function PlatformFeatures() {
  return (
    <section className="py-28 bg-[#F5F5F7]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4"
          >
            Platform
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] leading-tight mb-5"
          >
            The AI infrastructure platform for modern businesses.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#6E6E73] leading-relaxed"
          >
            Everything you need to build, deploy, and scale AI systems with enterprise readiness built in.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl border border-gray-200 p-10 hover:shadow-sm transition-shadow"
            >
              <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">{feature.title}</h3>
              <p className="text-[#6E6E73] leading-relaxed text-[15px]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
