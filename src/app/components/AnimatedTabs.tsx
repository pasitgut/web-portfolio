"use client";
import { motion, AnimatePresence } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import AboutSection from "./about";
import ProjectSection from "./project";
import TechStackSection from "./techstack";

export default function AnimatedTabs() {
  const [active, setActive] = useState<string>("about");

  return (
    <Tabs value={active} onValueChange={setActive} className="w-full">
      <TabsList>
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="project">Projects</TabsTrigger>
        <TabsTrigger value="techstack">Tech Stack</TabsTrigger>
      </TabsList>
      <div className="relative mt-4">
        <AnimatePresence mode="wait">
          {active === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="about" forceMount>
                <AboutSection />
              </TabsContent>
            </motion.div>
          )}
          {active === "project" && (
            <motion.div
              key="project"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="project" forceMount>
                <ProjectSection />
              </TabsContent>
            </motion.div>
          )}
          {active === "techstack" && (
            <motion.div
              key="techstack"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="techstack" forceMount>
                <TechStackSection />
              </TabsContent>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Tabs>
  );
}
