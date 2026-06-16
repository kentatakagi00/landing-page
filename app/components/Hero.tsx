"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="hero min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 pt-16">
      <div className="hero-content text-center max-w-4xl mx-auto px-4">
        <div>
          <motion.div
            className="badge badge-primary badge-outline mb-6 px-4 py-3 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            🚀 Now in public beta
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Build faster.
            <br />
            <span className="text-primary">Ship smarter.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            The all-in-one platform that helps your team move from idea to production in record time.
            No more context switching. Just results.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="#" className="btn btn-primary btn-lg px-8">
              Start for free
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#features" className="btn btn-outline btn-lg px-8">
              See how it works
            </a>
          </motion.div>

          <motion.p
            className="mt-6 text-sm text-base-content/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Free 14-day trial · No credit card required · Cancel anytime
          </motion.p>
        </div>
      </div>
    </section>
  );
}
