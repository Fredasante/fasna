"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FirstSection = () => {
  return (
    <section className="md:py-20 py-10 space-y-10">
      <div className="container mx-auto text-center md:w-1/2">
        <div className="text-6xl flex justify-center md:px-20 pb-10">
          A smarter way to work
        </div>
        <p className="text-lg md:text-xl mb-10">
          With Fasna, you can drive clarity and impact at scale by connecting
          work and workflows to company-wide goals.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-black text-white px-6 py-3 rounded-sm text-lg">
            Get started
          </button>
          <button className="bg-white font-bold border border-black px-6 py-3 rounded-sm text-lg">
            See how it works
          </button>
        </div>
      </div>

      <div className="md:pt-10 items-center space-y-10 md:flex justify-center md:mx-auto md:space-x-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-10 md:px-0"
        >
          <Image
            src={"/images/tab-1.webp"}
            alt="illustration 1"
            width={500}
            height={500}
          />
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-10 md:px-0"
        >
          <Image
            src={"/images/tab-2.webp"}
            alt="illustration 1"
            width={500}
            height={500}
          />
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-10 md:px-0"
        >
          <Image
            src={"/images/tab-3.webp"}
            alt="illustration 1"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSection;
