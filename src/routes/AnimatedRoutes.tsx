import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from '../pages/home/Home';
import Projects from '../pages/projects/Projects';
import Experience from '../pages/experience/Experience';
import Skills from '../pages/skills/Skills';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          index
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/experience"
          element={
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Experience />
            </motion.div>
          }
        />
        <Route
          path="/skills"
          element={
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Skills />
            </motion.div>
          }
        />

      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

