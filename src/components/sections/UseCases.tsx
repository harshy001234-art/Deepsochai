import { motion } from "framer-motion";

const useCases = [
  {
    title: "Media & Video Workloads",
    description: "Process, render, and deliver high-volume media pipelines at GPU-accelerated speed.",
  },
  {
    title: "AI Product Development",
    description: "Build and iterate on AI-powered products with dedicated infrastructure that doesn't slow you down.",
  },
  {
    title: "AI Image Generation",
    description: "Run diffusion models and image generation pipelines on dedicated, high-throughput GPU clusters.",
  },
  {
    title: "Enterprise Automation",
    description: "Deploy intelligent automation workflows with private models and secure, auditable infrastructure.",
  },
  {
    title: "Machine Learning",
    description: "Train, fine-tune, and evaluate models on compute that scales with your experiment volume.",
  },
];

export default function UseCases() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4"
          >
            Use Cases
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] leading-tight mb-5"
          >
            Built for high-performance workloads.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#6E6E73] leading-relaxed"
          >
            Designed for teams that need serious compute reliability across media, AI products, automation, and continuous deployment.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="divide-y divide-gray-100 border border-gray-200 rounded-2xl overflow-hidden"
        >
          {useCases.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-12 px-8 py-6 bg-white hover:bg-[#F5F5F7] transition-colors"
            >
              <span className="text-[13px] font-semibold text-gray-400 w-6 shrink-0">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-[15px] font-semibold text-[#1D1D1F] w-64 shrink-0">{item.title}</h3>
              <p className="text-[#6E6E73] text-[15px] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
