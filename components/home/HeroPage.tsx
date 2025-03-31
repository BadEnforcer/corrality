import { motion, useScroll, useTransform } from "motion/react";


function HeroPage() {
  // Use global scroll instead of a targeted container
  const { scrollY } = useScroll();
  // As you scroll down, the text moves upward (opposite of scroll)
  const y = useTransform(scrollY, (value) => -value * 0.2);

  return (
    <div className="h-[93vh] grid grid-rows-5  bg-gradient-to-tr from-amber-300 to-fuchsia-500 rounded-2xl drop-shadow-lg">
      {/* Top Spacer */}
      <div className="row-span-1"></div>
      
      {/* Text Section */}
      <div className="grid grid-rows-3 row-span-3">
        <div className={"row-span-2 flex items-center justify-center overflow-hidden relative"}>
          <motion.h1
            drag={"x"}
          // Fade in on mount
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          // Move opposite to scroll
          style={{ y }}
          className="text-center text-white  text-8xl font-bold tracking-tight lg:text-9xl"
        >
          Making the<br/> web talk
        </motion.h1>
        </div>
        
        <div className={"row-span-1 flex items-center justify-center overflow-hidden relative"}>
          <motion.h1
          // Fade in on mount
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          // Move opposite to scroll
          style={{ y }}
          className="text-center text-xl text-muted/100  tracking-tight"
        >
          100 Award winning dev partner to over<br/> 100 agencies, startups & SMEs
        </motion.h1>
        </div>
      </div>
      
      {/* Bottom Spacer */}
      <div className="row-span-1  flex items-center justify-center"></div>
    </div>
  );
}

export default HeroPage;