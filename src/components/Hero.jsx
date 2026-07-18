import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const titles = [
  "Frontend Developer",
  "UI/UX Designer",
  "React.js Engineer",
  "3D Web Enthusiast",
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile to disable canvas pointer events (lets page scroll work)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    let ticker = null;
    const current = titles[titleIndex % titles.length];

    ticker = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return current.substring(0, prev.length - 1);
        }
        return current.substring(0, prev.length + 1);
      });

      // when typing finished, pause then start deleting
      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 900);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => prev + 1);
      }
    }, isDeleting ? 50 : 120);

    return () => clearTimeout(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isDeleting, titleIndex]);

  const fullName = "Sulagna Ghosh";
  const [nameDisplay, setNameDisplay] = useState("");

  useEffect(() => {
    let mounted = true;
    let i = 0;
    const tick = () => {
      if (!mounted) return;
      if (i <= fullName.length) {
        setNameDisplay(fullName.slice(0, i));
        i += 1;
        setTimeout(tick, 90);
      }
    };
    tick();
    return () => {
      mounted = false;
    };
    // run only once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto overflow-visible`}>
      <div
        className={`absolute inset-0 sm:top-[120px] top-[110px] z-20 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none`}
      >
        <div className='flex flex-col justify-center items-center mt-5 pointer-events-auto'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='pointer-events-auto'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{' '}
            <span className='text-[#915EFF] font-semibold'>
              {nameDisplay}
              <span className='ml-1 inline-block animate-pulse'>|</span>
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#dfd9ff]`}>
            I'm a&nbsp;
            <span className='text-[#915EFF] font-semibold'>
              {displayText}
              <span className='ml-1 inline-block animate-pulse'>|</span>
            </span>
            <br className='sm:block hidden' />
            I build elegant interfaces and web applications.
          </p>
        </div>
      </div>

      {/*
        On mobile: pointerEvents=none so ALL touch events (swipe-to-scroll) pass
        straight through to the page — the canvas only auto-rotates via RAF.
        On desktop: pointerEvents=auto so mouse drag-to-rotate still works.
      */}
      <div
        className="w-full h-full absolute inset-0"
        style={{
          pointerEvents: isMobile ? "none" : "auto",
          touchAction: "pan-y",
        }}
      >
        <ComputersCanvas />
      </div>

      <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
