"use client";

import { useRef } from "react";
import { motion, useInView } from "@/lib/motion-utils";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, BookOpen, Users, PenTool, MessageCircle, Check } from "lucide-react";

const languageSkills = [
  { name: "Reading", level: 95 },
  { name: "Writing", level: 90 },
  { name: "Speaking", level: 88 },
  { name: "Listening", level: 92 },
  { name: "Grammar", level: 85 },
];

const teachingSkills = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Curriculum Development",
    description: "Creating effective learning materials and lesson plans tailored to student needs."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Assessment Design",
    description: "Developing comprehensive assessments to measure student progress."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Classroom Management",
    description: "Creating a positive learning environment that engages all students."
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: "Modern Teaching Methods",
    description: "Implementing communicative and student-centered teaching approaches."
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-primary" />,
    title: "Student Engagement",
    description: "Using interactive techniques to keep students motivated and interested."
  },
  {
    icon: <Check className="h-10 w-10 text-primary" />,
    title: "Feedback Provision",
    description: "Offering constructive feedback to help students improve their language skills."
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-serif font-semibold mb-4"
          >
            My Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground">
              Language proficiency and teaching abilities I've developed.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Language Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-serif font-medium mb-8 text-center lg:text-left">Language Skills</h3>
            <div className="space-y-6">
              {languageSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-accent/30 rounded-lg">
              <h4 className="text-lg font-medium mb-2">English Proficiency Level</h4>
              <p className="text-muted-foreground">C1 Level - Advanced / Proficient User</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Can understand complex texts and implicit meaning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Can express ideas fluently without searching for expressions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Can use language flexibly for social, academic and professional purposes</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Teaching Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-serif font-medium mb-8 text-center lg:text-left">Teaching Abilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {teachingSkills.map((skill, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="mb-4">{skill.icon}</div>
                    <h4 className="text-lg font-medium mb-2">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}