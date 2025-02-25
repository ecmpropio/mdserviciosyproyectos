
'use client'
import React from "react";
import { Building2, Trophy, MessageCircle, Users } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "45",
    label: "Proyectos Anuales Realizados",
    icon: Building2,
  },
  {
    value: "8",
    label: "Servicios",
    icon: Trophy,
  },
  {
    value: "100%",
    label: "Servicios Concluidos",
    icon: MessageCircle,
  },
  {
    value: "45",
    label: "Clientes Satisfechos",
    icon: Users,
  },
];

export default function Stats() {
  return (
    <section className="relative py-20 bg-secondary text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat opacity-10" />
      
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4"
            >
              <stat.icon className="w-8 h-8 text-primary" />
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}