import { motion, useScroll, useTransform } from "framer-motion";
import Timeline from "../components/Timeline";
import { ArrowDown } from "lucide-react";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

        {/* YouTube Video Background Container */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <iframe
              src="https://www.youtube.com/embed/QdsZNYLy4tw?autoplay=1&mute=1&controls=0&loop=1&playlist=QdsZNYLy4tw&rel=0&playsinline=1&modestbranding=1"
              title="Wind Farm Video Background"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute top-1/2 left-1/2 w-[300vw] h-[300vh] min-w-[177.77vh] min-h-[100vw] -translate-x-1/2 -translate-y-1/2 opacity-70"
              style={{ width: "100vw", height: "56.25vw", minHeight: "100vh", minWidth: "177.77vh" }}
            ></iframe>
        </div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Hero Content Overlay */}
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 text-center px-4 mt-20 md:mt-0 pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-white drop-shadow-lg">
              Sri Vaigunda Wind Farm Services<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-emerald-400 drop-shadow-none">
                Power of Wind Since1999
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-8 drop-shadow-md">
              Innovating sustainable energy solutions with smart, aerodynamic, and next-generation turbine technology.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/70"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Featured Video Section */}
      <section className="relative w-full py-24 bg-background z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience the Future</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We are revolutionizing renewable energy through cutting-edge design and engineering. 
              </p>
              <div className="w-24 h-1 bg-primary rounded-full mb-8" />
            </div>
            
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video relative">
              <iframe
                src="https://www.youtube.com/embed/HvKsMUNY8KA?autoplay=0&rel=0"
                title="Featured Wind Energy Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative w-full py-24 bg-background z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <Timeline />
        </div>
      </section>
    </div>
  );
};

export default Home;
