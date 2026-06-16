"use client";

import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.div
      className="navbar bg-base-100/80 backdrop-blur-md fixed top-0 z-50 border-b border-base-200"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl font-bold text-primary">MyProduct</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="btn btn-ghost btn-sm">Log in</a>
        <a className="btn btn-primary btn-sm">Get started</a>
      </div>
    </motion.div>
  );
}
