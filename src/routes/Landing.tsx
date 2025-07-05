import { Link } from "react-router-dom";
import Button from "../components/Button/Button.tsx"
import {Card, CardContent} from "../components/Card"
import { motion } from "framer-motion";


const features = [
  {
    title: "Tu equipo, tu bienestar",
    description:
      "Conoce los hábitos que crean los usuarios de tu organización.",
    icon: "🤝",
    ref: "/users",
    link: "Usuarios"
  },
  {
    title: "Plantillas para otros",
    description: "Crea plantillas de hábitos que le aparecerán a los usuarios de la app",
    icon: "🗺️",
    ref: "/templates",
    link: "Plantillas"
  },
  {
    title: "Estadísticas reales, cambios reales",
    description:
      "Conoce el cumplimiento promedio, áreas más registradas, promedio de datos, etc.\
      Datos reales que cambian la vida de los usuarios",
    icon: "📊",
    ref: "/analytics",
    link: "Estadísticas"
  },
];

export default function LandingPage() {
  return (
    <div className="text-center justify-center">
      <header className="flex-column align-center justify-center mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-cente">
          <h1 className="title">
            Kaizen
          </h1>
          <p className="">
            Conoce las distintas actividades de administrador.
          </p>
          <div className="flex-row space-x-4">
            <Button className="text-lg px-8">
              Usuarios
            </Button>
            <Button className="text-lg px-8">
              Estadísticas
            </Button>
            <Button className="text-lg px-8">
              Plantillas
            </Button>
          </div>
        </motion.div>
        {/* fondo decorativo */}
      </header>

      {/* Features */}
      <main className="flex-1 mt-10">
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                      <h3 className="text-xl font-semibold">{f.icon} {f.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {f.description}
                      </p>
                      <Link to={f.ref}>{f.link}</Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50 border-t">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto px-6 text-center"
          >
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Kaizen. Proyecto Desarrollo de Software 2025-1. Autoría de equipo ByteMe
      </footer>
    </div>
  );
}
