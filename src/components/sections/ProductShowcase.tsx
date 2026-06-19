import { motion } from "framer-motion";

const products = [
  {
    label: "GPU Cloud Infrastructure",
    description: "Elastic compute infrastructure for rendering, model execution, and intensive AI workloads.",
  },
  {
    label: "AI APIs",
    description: "Production-ready APIs for inference, media pipelines, and enterprise-grade automation layers.",
  },
  {
    label: "AI Dashboard",
    description: "Operational visibility across compute usage, deployment health, workload status, and throughput.",
  },
  {
    label: "Custom AI Solutions",
    description: "Bespoke infrastructure and product systems aligned to business workflows and private deployment needs.",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-28 bg-[#F5F5F7]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4"
          >
            Product
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] leading-tight mb-5"
          >
            Build, scale, and deploy AI without hardware limits.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#6E6E73] leading-relaxed"
          >
            DeepSoch combines cloud compute, AI systems, and deployment tooling into a premium infrastructure layer for modern businesses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="bg-white p-10 hover:bg-[#FAFAFA] transition-colors"
            >
              <p className="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-4">Product</p>
              <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3 leading-snug">{product.label}</h3>
              <p className="text-[#6E6E73] leading-relaxed text-[15px]">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
