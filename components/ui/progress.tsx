"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { useInView } from "framer-motion";

import { cn } from "@/lib/utils";

const AnimatedProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    animateValue?: number;
  }
>(({ className, animateValue = 0, ...props }, ref) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true });
  const [value, setValue] = React.useState(0);

  // Animate when in view
  React.useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setValue(animateValue);
      }, 200); // optional delay
      return () => clearTimeout(timeout);
    }
  }, [isInView, animateValue]);

  return (
    <div ref={containerRef}>
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
          className
        )}
        value={value}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className="h-full w-full flex-1 bg-primary transition-all duration-700"
          style={{ transform: `translateX(-${100 - value}%)` }}
        />
      </ProgressPrimitive.Root>
    </div>
  );
});
AnimatedProgress.displayName = "AnimatedProgress";

export { AnimatedProgress as Progress };
