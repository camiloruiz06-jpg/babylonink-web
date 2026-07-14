"use client";

import { motion } from "framer-motion";

/**
 * Envuelve cualquier contenido para que aparezca con una animación
 * suave (fade + subida) cuando entra en pantalla al hacer scroll.
 *
 * Uso:  <Reveal><h2>Hola</h2></Reveal>
 *       <Reveal delay={0.2}>...</Reveal>
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
