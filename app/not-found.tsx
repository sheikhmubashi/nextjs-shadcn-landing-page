// app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFoundPage() {
 return (
  <main className="flex h-screen flex-col items-center justify-center bg-black text-white">
   <motion.h1
    className="text-6xl font-bold"
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
   >
    404
   </motion.h1>
   <motion.p
    className="mt-4 text-lg text-gray-400"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.6 }}
   >
    Oops! The page you’re looking for doesn’t exist.
   </motion.p>
   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 0.6 }}
   >
    <Link
     href="/"
     className="mt-6 inline-block rounded-lg bg-white/40 px-6 py-3 text-white hover:bg-white/20 transition"
    >
     Back to Home
    </Link>
   </motion.div>
  </main>
 );
}
