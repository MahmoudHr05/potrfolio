"use client";

import { useRef } from "react";
import { motion, useInView } from "@/lib/motion-utils";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Mahmoud is an incredible teacher who made learning English enjoyable. His attention to detail and patience helped me improve significantly.",
    author: "Sarah Johnson",
    role: "High School Student",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    initials: "SJ"
  },
  {
    quote: "I was impressed by Mahmoud's teaching methods. He creates a supportive environment where students feel comfortable practicing their English skills.",
    author: "Ahmed Taleb",
    role: "High School Student",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    initials: "AT"
  },
  {
    quote: "As a supervising teacher, I've observed Mahmoud's natural talent for teaching. His lesson plans are creative and his classroom management is excellent.",
    author: "Dr. Emma Rodriguez",
    role: "Senior English Teacher",
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    initials: "ER"
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="testimonials" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl   font-semibold mb-4"
          >
            Testimonials
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground">
              What students and colleagues say about my teaching.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6 pb-6 px-6 flex flex-col justify-between h-full">
                  <div>
                    <Quote className="h-10 w-10 text-primary/30 mb-4" />
                    <p className="italic text-muted-foreground mb-6">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}