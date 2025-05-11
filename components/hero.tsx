"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion-utils";
import { GraduationCap, Book, MessageSquare } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative max-w-5xl mx-auto px-6 py-32 sm:py-48 lg:py-56 z-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Mahmoud Harmouch
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-300"
            >
              English Teacher Trainee | C1 Proficiency Level
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Button asChild size="lg" className="rounded-full z-40">
                <a href="#contact">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent text-white border-white hover:bg-white/10">
                <a href="#experience">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  My Experience
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
          <a href="#about" className="text-white opacity-80 hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}