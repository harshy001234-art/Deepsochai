import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const options = [
  {
    label: "Private Cloud",
    description: "Your models, your data, your rules. Fully isolated cloud infrastructure with zero shared resources and complete data sovereignty.",
  },
  {
    label: "Dedicated Infrastructure",
    description: "Reserved bare-metal GPU nodes provisioned exclusively for your organisation — no noisy neighbours, predictable performance.",
  },
  {
    label: "Custom Enterprise Setup",
    description: "Purpose-built infrastructure designed around your compliance requirements, deployment model, and integration architecture.",
  },
];

export default function EnterpriseSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4"
            >
              Enterprise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] leading-tight mb-6"
            >
              Infrastructure for serious workloads.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-[#6E6E73] leading-relaxed mb-10"
            >
              Your workloads. Your infrastructure. Your control.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 text-[15px] h-12 px-7 font-medium rounded-lg"
              >
                Contact Sales
              </Button>
            </motion.div>
          </div>

          {/* Right: interactive tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#F5F5F7] rounded-2xl border border-gray-200 overflow-hidden"
          >
            {/* Tab list */}
            <div className="border-b border-gray-200">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`w-full text-left px-8 py-5 text-[15px] font-medium transition-colors border-b border-gray-200 last:border-0 ${
                    active === index
                      ? "bg-white text-[#1D1D1F]"
                      : "text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-white/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option.label}</span>
                    {active === index && (
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                    )}
                  </div>
                </button>
              ))}
            </div>
            {/* Description */}
            <div className="px-8 py-8 bg-white">
              <p className="text-[#6E6E73] leading-relaxed text-[15px]">
                {options[active].description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
