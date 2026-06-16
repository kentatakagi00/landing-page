"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for side projects and small teams.",
    features: ["Up to 3 projects", "5 team members", "10 GB storage", "Basic analytics", "Community support"],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For growing teams that need more power.",
    features: ["Unlimited projects", "25 team members", "100 GB storage", "Advanced analytics", "Priority support", "Custom domains"],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "Tailored solutions for large organizations.",
    features: ["Unlimited everything", "Unlimited members", "1 TB storage", "Full analytics suite", "Dedicated support", "SLA guarantee", "SSO & SAML"],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="pricing" className="py-24 bg-base-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="badge badge-primary badge-outline mb-4 px-4 py-2">Pricing</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="text-primary">transparent</span> pricing
          </h2>
          <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
            No hidden fees. No surprise bills. Start free and scale as you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`card border ${plan.highlighted ? "border-primary bg-primary text-primary-content shadow-2xl scale-105" : "border-base-200 bg-base-100"}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="badge badge-secondary px-4 py-2 font-semibold shadow">Most popular</div>
                </div>
              )}
              <div className="card-body gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className={`text-sm ${plan.highlighted ? "text-primary-content/80" : "text-base-content/60"}`}>
                    {plan.description}
                  </p>
                </div>
                <div>
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={`ml-2 text-sm ${plan.highlighted ? "text-primary-content/70" : "text-base-content/50"}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 shrink-0 ${plan.highlighted ? "text-primary-content" : "text-success"}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="card-actions">
                  <a
                    href="#"
                    className={`btn w-full ${plan.highlighted ? "btn-secondary" : "btn-primary btn-outline"}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
