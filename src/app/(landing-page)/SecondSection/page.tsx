"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { useState } from "react";

const tabs = [
  {
    name: "Marketing Teams",
    title: "Deliver impactful marketing strategies",
    feature1: "Campaign planning",
    feature2:
      "Help teams quickly refocus and reprioritize work as goals change.",
    feature3: "Automate processes for approvals",
    image: "/images/tab-1.webp",
  },
  {
    name: "IT Teams",
    title: "Automate and streamline IT requests",
    feature1: "Reduce digital friction for better team velocity",
    feature2: "Track and manage work across teams",
    feature3: "Automate processes for approvals",
    image: "/images/tab-2.webp",
  },

  {
    name: "Operations Teams",
    title: "Drive operational efficiency",
    feature1: "Track work and see progress in real time",
    feature2: "Standardize and automate processes",
    feature3: "Unblock teams to hit revenue goals",
    image: "/images/tab-3.webp",
  },
  {
    name: "Project Management",
    title: "Manage projects more efficiently",
    feature1: "Track work and see progress in real time",
    feature2: "Standardize and automate processes",
    feature3: "Track resources, goals and progress in one place",
    image: "/images/tab-4.webp",
  },
  {
    name: "Strategic Planning",
    title: "Align teams to execute winning strategies",
    feature1: "Track work and see progress in real time",
    feature2: "Set annual plans to deliver results",
    feature3: "See real-time insights to stay on track and on budget",
    image: "/images/tab-1.webp",
  },
];

const SecondSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      className="flex flex-col justify-center items-center p-10 md:py-20"
    >
      <div className="flex items-center justify-center">
        <div
          style={{
            transform: `translateY(${isInView ? 0 : 100}px)`,
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="md:flex md:space-x-20 border-b md:py-10"
        >
          <div className="space-y-10">
            <div className="text-3xl">
              80% of Fortune 100 companies use Bird
            </div>
            <div className="flex items-center space-x-9 hover:text-blue-500 text-xl">
              See how customers use Bird
              <ArrowRight className="h-6 w-6 ml-4" />
            </div>
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="grid grid-cols-2  md:flex md:space-x-10  items-center   justify-center py-10 "
          >
            <Image
              src="/images/logo/logo-5.svg"
              width={150}
              height={150}
              alt="logo"
            />
            <Image
              src="/images/logo/logo-13.svg"
              width={150}
              height={150}
              alt="logo"
            />
            <Image
              src="/images/logo/logo-8.svg"
              width={150}
              height={150}
              alt="logo"
            />
            <Image
              src="/images/logo/logo-9.svg"
              width={150}
              height={150}
              alt="logo"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
