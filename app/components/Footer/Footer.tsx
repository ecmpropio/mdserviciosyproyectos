'use client'
import React from "react";
import { Facebook, Twitter, Youtube, Video, PointerIcon } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Video, href: "#" },  
  { icon: PointerIcon, href: "#" },  
];



export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-6">Acerca de Nosotros</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
            En MD Servicios y Proyectos, somos especialistas en el diseño, 
            planificación y ejecución de proyectos de ingeniería y construcción. Con años de experiencia, nos hemos consolidado como referentes en estructuras metálicas, acero inoxidable, instalaciones de sistemas y construcción civil. 
            Nuestro compromiso es ofrecer soluciones eficientes y sostenibles que fortalezcan cada obra.
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-lg font-bold mb-6">Navegación</h3>
            <ul className="space-y-3">
              {["Acerca de Nosotros", "Nuestros Proyectos", "Clientes", "Servicios" ].map((item)=>(
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

      

          {/* Contacts Section */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contáctenos</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>Dirección: Chancay,Perú</p>
              <p>Teléfono: (+51)  923 910 604</p>
              <p>Correo: mdserviciosyproyectos@gmail.com</p>
              <p>We are open: Lunes-Sábado: 08:00 am -6:00 pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              Md Servicios y Proyectos. Todos los Derechos Reservados.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}