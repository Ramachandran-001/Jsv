import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const aboutData = [
  {
    title: "Wind Energy",
    description: "Dedicated to pioneering wind energy solutions that redefine sustainability and performance since 2018.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Solar Turnkey Projects",
    description: "Our diverse team of engineers, designers, and visionaries work tirelessly to achieve our renewable energy goals.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Thermal Power",
    description: "From massive offshore farms to urban micro-turbines, we've successfully energized thousands of communities.",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Solar Energy",
    description: "Awarded 'Green Tech Innovator of the Year' and celebrated for setting new industry benchmarks in efficiency.",
    image: "/public/image/solar.png",
  },
];

const ownerData = [
  {
    name: "Vaigund Ganesh",
    role: "Founder & CEO",
    image: "/public/image/g1.png",
  },
  {
    name: "Sasi Kumar",
    role: "Business Development Head",
    image: "/public/image/sasi1.png",
  },
  {
    name: "Madhavan",
    role: "Accounts & Finance Head",
    image: "/public/image/madhav.png",
  },
  {
    name: "Ragupathi",
    role: "Admin",
    image: "/public/image/R1.png",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 relative bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 text-foreground"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-6xl mx-auto">
            Srivaigunda group is a well-established Renewable Energy Advisory firm headquartered in Tamil Nadu, started in the Year 1999. With over 100+ Man Years of experience in Renewable Energy Projects,
            they have strong expertise across the Renewable value chain such as Solar PV, Wind, and Thermal Power. We have teamed up to revolutionize the renewable energy sector and innovative technology with expertise in sustainable practices, we aim to develop solutions that enhance energy efficiency and reduce carbon emission. Together, we committed to driving positive change and making renewable energy accessible and affordable for all, paving the way for a greener future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {aboutData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={2500}
                className="h-full"
              >
                <div className="group h-full rounded-3xl overflow-hidden bg-card border border-white/10 hover:border-primary/50 shadow-xl relative backdrop-blur-sm transition-colors">
                  {/* Image Container */}
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Owner Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 mt-24 text-foreground"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ownerData.map((owner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-white/10 shadow-lg hover:border-primary/50 transition-all h-80"
            >
              <img
                src={owner.image}
                alt={owner.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-xl font-bold text-white mb-1">{owner.name}</h4>
                <p className="text-primary font-medium">{owner.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
