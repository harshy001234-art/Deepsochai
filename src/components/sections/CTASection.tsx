import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-36 bg-[#1D1D1F]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[13px] font-semibold text-blue-400 tracking-widest uppercase mb-5"
        >
          Get Started
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight"
        >
          Ready to Scale?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#86868B] text-lg md:text-xl mb-3 leading-relaxed"
        >
          Ready to scale with AI infrastructure built for performance?
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.13 }}
          className="text-[#86868B] text-lg md:text-xl mb-12 leading-relaxed"
        >
          Stop worrying about hardware limitations. Start building with DeepSoch AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 text-[15px] h-12 px-7 font-medium rounded-lg w-full sm:w-auto"
            >
              Get Started
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border border-white/20 bg-transparent text-white hover:bg-white/10 text-[15px] h-12 px-7 font-medium rounded-lg w-full sm:w-auto"
            >
              Talk to Sales
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
