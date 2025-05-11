"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, BookOpen, Award } from "lucide-react";
import { useInView } from "framer-motion";

const experiences = [
  {
    title: "High School English Internship",
    period: "2023 - Present",
    description:
      "Teaching English to high school students, focusing on grammar, vocabulary, and conversation skills. Helped students improve their English proficiency through interactive lessons and personalized feedback.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Teaching Assistant",
    period: "2022 - 2023",
    description:
      "Assisted senior English teachers with classroom management, lesson planning, and student assessments. Gained valuable experience in teaching methodologies and classroom dynamics.",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    title: "Started Teacher Training",
    period: "2022",
    description:
      "Enrolled in the English teacher training program, studying language pedagogy, educational psychology, and teaching methodologies. Focused on developing essential teaching skills and knowledge.",
    icon: <Calendar className="h-6 w-6" />,
  },
  {
    title: "English Proficiency Certification",
    period: "2021",
    description:
      "Achieved C1 level certification in English, demonstrating advanced language proficiency in reading, writing, speaking, and listening. This qualification prepared me for a career in English education.",
    icon: <Award className="h-6 w-6" />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl   font-semibold mb-4"
          >
            My Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground">
              My journey in English education and teaching experience.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, amount: 0.1 });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background border border-primary flex items-center justify-center z-10">
                    {experience.icon}
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                    } pl-16 md:pl-0`}
                  >
                    <div className="bg-card p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-medium mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {experience.period}
                      </p>
                      <p className="text-muted-foreground">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
