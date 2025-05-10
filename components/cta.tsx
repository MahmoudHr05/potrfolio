"use client";

import { useRef } from "react";
import { motion, useInView } from "@/lib/motion-utils";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="py-16 bg-primary">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-serif font-bold mb-6 text-primary-foreground">Ready to Collaborate?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Whether you're looking for an English teacher or have a teaching opportunity, 
            I'd love to hear from you. Let's connect and discuss how we can work together.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full">
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}