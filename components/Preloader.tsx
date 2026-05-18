"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent body scrolling during loading animation
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white"
        >
          {/* Custom style for logo blend modes inside container */}
          <style>{`
            .logo-blend-container {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 80px;
              width: 140px;
            }
            .circle-emerald {
              position: absolute;
              height: 48px;
              width: 48px;
              border-radius: 9999px;
              background-color: #10b981; /* Bright Emerald Green */
              mix-blend-mode: multiply;
            }
            .circle-forest {
              position: absolute;
              height: 48px;
              width: 48px;
              border-radius: 9999px;
              background-color: #012e17; /* Deep Forest Green */
              mix-blend-mode: multiply;
            }
          `}</style>

          <div className="logo-blend-container">
            {/* Left Circle: Emerald - moves left to right and scales */}
            <motion.div
              animate={{
                x: [-24, 24, -24],
                scale: [1, 1.1, 1],
                zIndex: [10, 20, 10],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="circle-emerald opacity-90"
            />
            {/* Right Circle: Forest - moves right to left and scales in opposite phase */}
            <motion.div
              animate={{
                x: [24, -24, 24],
                scale: [1.1, 1, 1.1],
                zIndex: [20, 10, 20],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="circle-forest opacity-95"
            />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
