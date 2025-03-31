"use client";

import HomeNavbar from "@/components/home/HomeNavbar";
import HeroPage from "@/components/home/HeroPage";
import CustomCarousel from "@/components/CustomSlider";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "motion/react";

const sampleCarouselItems = [
  {
    headerImg: "https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/64e89b4f2e553031249da292_logo-porshe.svg",
    footerText: "Empowering sustainable solutions for modern infrastructure.",
    backgroundImg: "https://picsum.photos/400",
    imageAlt: "Innovative design background image",
  },
  {
    headerImg: "https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/64e89b4f2e553031249da292_logo-porshe.svg",
    footerText: "Leading the way in engineering and technology.",
    backgroundImg: "https://picsum.photos/400",
    imageAlt: "Global engineering concept",
  },
  {
    headerImg: "https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/64e89b4f2e553031249da292_logo-porshe.svg",
    footerText: "Bridging communities through advanced construction techniques.",
    backgroundImg: "https://picsum.photos/400",
    imageAlt: "Community development background",
  },
  {
    headerImg: "https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/64e89b4f2e553031249da292_logo-porshe.svg",
    footerText: "Bridging communities through advanced construction techniques.",
    backgroundImg: "https://picsum.photos/400",
    imageAlt: "Community development background",
  },
  {
    headerImg: "https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/64e89b4f2e553031249da292_logo-porshe.svg",
    footerText: "Bridging communities through advanced construction techniques.",
    backgroundImg: "https://picsum.photos/400",
    imageAlt: "Community development background",
  },
  {
    headerImg: "https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/64e89b4f2e553031249da292_logo-porshe.svg",
    footerText: "Bridging communities through advanced construction techniques.",
    backgroundImg: "https://picsum.photos/400",
    imageAlt: "Community development background",
  },
];


export default function Page () {
  
  return (
    <>
      <HomeNavbar/>
      <div className="relative mx-2">
        <HeroPage/>
      </div>
      <div className={"my-4 mx-2 "}>
        <Card>
          <CardHeader>
            <div className="grid grid-cols-1 lg:grid-cols-12 my-2">
              <motion.p
                className="col-span-2 uppercase text-muted-foreground"
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1.2, ease: "easeOut"}}
              >
                Our
                <br/>
                customers
              </motion.p>
              <div className="col-span-10">
                <motion.p className="scroll-m-20 text-5xl font-medium tracking-tight leading-12">
                  <motion.span
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1.5, ease: "easeOut",}}
                    className="inline-block"
                  >
                    the wonderful
                  </motion.span>
                  {" "}
                  <motion.span
                    initial={{opacity: 0, y: -10}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.75}}
                    transition={{duration: .4, ease: "easeOut", delay: 0.8}}
                    className="inline-block line-through"
                  >
                    companies
                  </motion.span>
                  <br className="lg:hidden"/>
                  {` `}
                  <motion.span
                    initial={{opacity: 0, x: 10}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true, amount: 0.75}}
                    transition={{duration: 1.7, ease: "easeOut", delay: 1.2}}
                    className="inline-block"
                  >
                    people
                  </motion.span>
                  <br/>
                  <motion.span
                    initial={{opacity: 0, y: 10}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.75}}
                    transition={{duration: 1.7, ease: "easeOut", delay: 2}}
                    className="inline-block"
                  >
                    we work with
                  </motion.span>
                </motion.p>
              </div>
            </div>
          </CardHeader>
          <CardContent className={"mb-3"}>
            <CustomCarousel isLooping={true} carouselItems={sampleCarouselItems}/>
          </CardContent>
        
        </Card>
      </div>
    
    </>
  );
}