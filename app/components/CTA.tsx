"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 bg-primary text-primary-content">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-primary-content/80 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of teams already using MyProduct to ship faster and smarter. Start free, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn btn-secondary btn-lg px-10">
              Start for free
            </a>
            <a href="#" className="btn btn-outline btn-lg px-10 text-primary-content border-primary-content hover:bg-primary-content hover:text-primary">
              Talk to sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
