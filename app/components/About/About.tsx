'use client'
import React from "react";
import { FileText, Users, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Última Tecnología",
    description: "Utilizamos la última tecnología de punta para implantar nuestros servicios y ofrecer un servicio gradual y de calidad a nuestros clientes.",
    icon: FileText,
  },
  {
    title: "Equipo Profesional",
    description: "Contamos con un equipo profesional con experiencia en los servicios de estructuras metálicas, instalaciones de sistemas de bombas de agua;entre otros.  ",
    icon: Users,
  },
  {
    title: "Mejores Soluciones",
    description: "Ofrecemos soluciones técnicas que logran alto impacto en las empresas con nuestros servicios que hemos ofrecido.",
    icon: Lightbulb,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Acerca de Nosotros
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            <p className="text-gray-600 leading-relaxed">
            En MD Servicios y Proyectos, somos especialistas en el diseño,
            planificación y ejecución de proyectos de ingeniería y construcción. Con años de experiencia, nos hemos consolidado como referentes en estructuras metálicas, acero inoxidable, instalaciones de sistemas y construcción civil. 
            Nuestro compromiso es ofrecer soluciones eficientes y sostenibles que fortalezcan cada obra.
            </p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <img  src="https://images.unsplash.com/photo-1455165814004-1126a7199f9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Estructuras Metálicas"
            className="w-full h-full object-cover"/>
            
        
          </motion.div>
        </div>
      </div>
    </section>
  );
}