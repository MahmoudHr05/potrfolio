"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "@/lib/motion-utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl   font-semibold mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground mb-6">
              I'm passionate about language education and dedicated to helping students achieve fluency.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden aspect-square"
          >
            <Image
              src="/programmer.webp"
              alt="Mahmoud Harmouch"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl   font-medium">Hello! I'm Mahmoud Harmouch</h3>
            <p className="text-muted-foreground">
              As a second-year English teacher trainee with a C1 proficiency level, I'm dedicated to making language learning engaging and effective. At 19 years old, I've already accumulated two years of valuable experience teaching high school students during my internships.
            </p>
            <p className="text-muted-foreground">
              My teaching philosophy centers on creating an immersive and supportive environment where students can develop their language skills naturally. I believe in using modern teaching methodologies that emphasize practical communication skills.
            </p>
            
            <div className="pt-4">
              <h4 className="text-lg font-medium mb-3">Personal Details</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="cursor-pointer hover:border-slate-200 hover:bg-slate-300/10 duration-200">
                  <CardContent className="p-4">
                    <p className="text-sm font-medium">Age</p>
                    <p className="text-muted-foreground">19 Years</p>
                  </CardContent>
                </Card>
                <Card className="cursor-pointer hover:border-slate-200 hover:bg-slate-300/10 duration-200">
                  <CardContent className="p-4">
                    <p className="text-sm font-medium">Education Level</p>
                    <p className="text-muted-foreground">Second Year</p>
                  </CardContent>
                </Card>
                <Card className="cursor-pointer hover:border-slate-200 hover:bg-slate-300/10 duration-200">
                  <CardContent className="p-4">
                    <p className="text-sm font-medium">English Proficiency</p>
                    <p className="text-muted-foreground">C1 Level</p>
                  </CardContent>
                </Card>
                <Card className="cursor-pointer hover:border-slate-200 hover:bg-slate-300/10 duration-200">
                  <CardContent className="p-4">
                    <p className="text-sm font-medium">Experience</p>
                    <p className="text-muted-foreground">2 Years Internship</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">English Education</Badge>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Teaching Methodology</Badge>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Curriculum Design</Badge>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Student Engagement</Badge>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}