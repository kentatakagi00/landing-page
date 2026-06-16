"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const faqs = [
  {
    question: "Is there a free trial?",
    answer: "Yes! You can start for free and use all Pro features for 14 days without entering a credit card.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. You can cancel your subscription at any time from your account settings. No questions asked.",
  },
  {
    question: "How does billing work?",
    answer: "We bill monthly or annually. Annual plans come with a 20% discount. Invoices are sent via email.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for enterprise plans.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="faq" className="py-24 bg-base-200/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="badge badge-primary badge-outline mb-4 px-4 py-2">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently asked <span className="text-primary">questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              className="collapse collapse-plus bg-base-100 border border-base-200"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-base font-semibold">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-base-content/70 leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
