import Button from "../components/Button/Button.tsx"
import {Card, CardContent} from "../components/Card"
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'

// 👉 Si no usas framer‑motion o shadcn/ui aún, instálalos:
//    npm i framer-motion
//    npx shadcn-ui@latest add button card
// const handlePageNavigation = (route_string) =>{
//   const navigate = useNavigate();
//   navigate(route_string)
// }


const features = [
  {
    title: "Tu equipo, tu bienestar",
    description:
      "Conoce los hábitos que crean los usuarios de tu organización.",
    icon: "🤝",
  },
  {
    title: "Estadísticas reales, cambios reales",
    description:
      "Conoce el cumplimiento promedio, áreas más registradas, promedio de datos, etc.\
      Datos reales que cambian la vida de los usuarios",
    icon: "📊",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-center text-gray-900">
      {/* Hero */}
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-sky-600 to-blue-800 text-white shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 py-24 text-center lg:py-32"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md mb-6">
            Kaizen
          </h1>
          <p className="max-w-3xl mx-auto text-lg lg:text-2xl mb-10 font-light">
            Conoce las distintas actividades de administrador.
          </p>
          <Button className="text-lg px-8">
            Usuarios
          </Button>
          <Button className="text-lg px-8">
            Estadísticas
          </Button>
        </motion.div>
        {/* fondo decorativo */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 600"
        >
          <path
            d="M0 0L1200 0L1200 400C800 300 400 500 0 400Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </header>

      {/* Features */}
      <main className="flex-1">
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
                      <span className="text-5xl">{f.icon}</span>
                      <h3 className="text-xl font-semibold">{f.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {f.description}
                      </p>
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

// const styles = {
//   button: "bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200",
//   card: "bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-200",
//   featureIcon: "text-4xl mb-4",
//   featureTitle: "text-xl font-semibold mb-2",
//   featureDescription: "text-gray-600",
//   footer: "bg-gray-100 py-4 text-sm text-gray-500",
//   heroTitle: "text-4xl lg:text-5xl font-bold mb-4",
//   heroSubtitle: "text-lg lg:text-xl mb-6"
// }
