'use client'
import React from "react";

import { motion } from "framer-motion";
import { Pencil, Building2, HardHat, Settings, ClipboardCheck, Users2 } from "lucide-react";

const services = [
  {
    icon: Pencil,
    title: "Estructuras Metálicas",
    description: "Diseño, fabricación e instalación de soluciones estructurales para edificaciones industriales, comerciales y deportivas."
  },
  {
    icon: Building2,
    title: "Construcción Civil",
    description: "Desarrollo de obras civiles, desde cimentaciones hasta acabados finales. Tenemos un equipo de profesionales con experiencia en este rubro"
  },
  {
    icon: HardHat,
    title: "Acero Inoxidable",
    description: "Creación de mobiliario y estructuras especializadas para espacios que demandan durabilidad y estética."
  },
  {
    icon: Settings,
    title: "Instalaciones de Sistemas",
    description: "Montaje y mantenimiento de sistemas eléctricos, sanitarios y mecánicos. Instalacion de sistemas contra incendios"
  },
  {
    icon: ClipboardCheck,
    title: "Mantenimiento de Sistemas",
    description: "Sistemas de Bombas de Agua instalación y mantenimiento de sistemas contra incendios."
  },
  {
    icon: Users2,
    title: "Canchas Deportivas",
    description: "Diseño y construcción de estructuras para gimnasios, estadios y áreas deportivas."
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 group"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}