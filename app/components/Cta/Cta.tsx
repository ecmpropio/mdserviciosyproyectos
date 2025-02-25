'use client'
import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-primary py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              MEJORANDO TU ENTORNO DE MANERA TÉCNICA Y PROFESIONAL
            </h2>
            <p className="text-xl md:text-2xl font-semibold">
             CONTÁCTENOS Y IMPULSEMOS TU DESARROLLO CON ESTRUCTURAS METÁLICAS
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            CONTÁCTENOS AL WHATSAPP
          </motion.button>
        </div>
      </div>
    </section>
  );
}