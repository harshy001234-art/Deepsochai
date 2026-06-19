import { motion } from "framer-motion";
import { Cpu, Server, Network, Shield, Workflow, Building } from "lucide-react";

const services = [
  {
    icon: <Cpu className="w-6 h-6 text-primary" />,
    title: "GPU Cloud",
    description: "Instant access to H100s and A100s, orchestrated for maximum throughput and zero contention."
  },
  {
    icon: <Server className="w-6 h-6 text-accent" />,
    title: "Self-hosted AI",
    description: "Deploy world-class models on your own bare metal. Sovereign infrastructure for absolute privacy."
  },
  {
    icon: <Network className="w-6 h-6 text-primary" />,
    title: "AI APIs",
    description: "Drop-in, enterprise-grade endpoints for inference, embeddings, and complex agentic workflows."
  },
  {
    icon: <Workflow className="w-6 h-6 text-accent" />,
    title: "Intelligent Automation",
    description: "Systemize complex, non-deterministic business processes with custom reasoning engines."
  },
  {
    icon: <Building className="w-6 h-6 text-primary" />,
    title: "Custom Solutions",
    description: "Bespoke model fine-tuning and systems engineering for unique enterprise domains."
  },
  {
    icon: <Shield className="w-6 h-6 text-accent" />,
    title: "Enterprise SLA",
    description: "99.999% guaranteed uptime with dedicated technical account managers and prioritized compute."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Capabilities beyond <br /> the wrapper.
          </h2>
          <p className="text-white/60 text-lg">
            We build the systems that run the systems. From raw compute to fine-tuned autonomous agents, we provide the full stack of enterprise intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
