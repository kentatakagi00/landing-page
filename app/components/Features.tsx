"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Deploy in seconds, not hours. Our optimized pipeline ensures your code ships without delays.",
  },
  {
    icon: "🔒",
    title: "Secure by Default",
    description: "End-to-end encryption and zero-trust architecture keep your data safe at every layer.",
  },
  {
    icon: "📊",
    title: "Real-time Analytics",
    description: "Monitor performance, track usage, and make data-driven decisions with live dashboards.",
  },
  {
    icon: "🤝",
    title: "Team Collaboration",
    description: "Invite teammates, manage roles, and collaborate seamlessly across projects and environments.",
  },
  {
    icon: "🔌",
    title: "200+ Integrations",
    description: "Connect with your favorite tools — GitHub, Slack, Jira, and hundreds more.",
  },
  {
    icon: "♾️",
    title: "Infinitely Scalable",
    description: "Start small and grow to millions of users without touching your infrastructure.",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="card bg-base-100 border border-base-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="card-body">
        <div className="text-4xl mb-2">{feature.icon}</div>
        <h3 className="card-title text-lg">{feature.title}</h3>
        <p className="text-base-content/70 text-sm leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" });

  return (
    <section id="features" className="py-24 bg-base-200/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="badge badge-primary badge-outline mb-4 px-4 py-2">Features</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to{" "}
            <span className="text-primary">succeed</span>
          </h2>
          <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
            A complete toolkit designed to eliminate friction and help your team focus on what matters most.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
