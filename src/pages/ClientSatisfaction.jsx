import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Award, Users, ChevronRight } from 'lucide-react';

const stats = [
  { id: 1, name: 'Projects Completed', value: '150+', icon: Target },
  { id: 2, name: 'Total Capacity (MW)', value: '1,200+', icon: Award },
  { id: 3, name: 'Client Satisfaction', value: '99%', icon: Users },
];

const projects = [
  {
    id: 1,
    name: 'Solaris Onshore',
    location: 'Tamil nadu, India',
    image: '/image/solar.png',
    description: 'Powering thousands of homes using advanced solar panel technology with high-efficiency energy storage systems designed for sustainable growth across Tamil Nadu.',
    features: ['500 Acres Solar Installation','300MW Power Capacity','Smart Grid Integration'],
    projectValue: 'Medium Scale Project',
  },
  {
    id: 2,
    name: 'Wind Energy Project',
    location: 'PAN India',
    image: '/image/W1.png',
    description: 'One of India’s largest wind energy corridors, generating clean electricity through high-capacity wind turbines designed for coastal wind conditions.',
    features: ['120 Turbines Installed', '500MW Total Capacity', 'Deep-water Foundation'],
    projectValue: 'Large Scale Project',
  },
  {
    id: 3,
    name: 'Solar Energy Project',
    location: 'PAN India',
    image: '/image/S1.png',
    description: 'Providing reliable and sustainable solar energy solutions across India with cutting-edge renewable technology and smart power management systems.',
    features: ['Smart Solar Infrastructure', 'Clean Energy Generation', 'High Power Efficiency'],
    projectValue: 'large Scale Project',
  },
];

const ClientSatisfaction = () => {
  return (
    <div className="bg-background min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Wind turbines" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
              Empowering a Sustainable Future, <span className="text-primary">One Client at a Time</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our commitment to excellence drives us to deliver world-class wind energy solutions. Discover the impact we've made and the trust we've built worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl shadow-xl p-8 border border-border flex flex-col items-center text-center transform transition-transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <stat.icon size={32} />
                </div>
                <h3 className="text-4xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-muted-foreground font-medium">{stat.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Key Projects & Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of our most impactful wind energy installations around the globe, showcasing our engineering prowess and commitment to clean energy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group rounded-2xl overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    Value: {project.projectValue}
                  </div>
                  <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary border border-border">
                    {project.location}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{project.description}</p>
                  
                  <div className="space-y-3">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm font-medium text-foreground/80">
                        <ChevronRight className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Power Your Next Project?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Join the growing list of satisfied clients who have chosen us as their renewable energy partner.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-white text-primary hover:bg-slate-100 font-bold py-4 px-10 rounded-full text-lg transition-colors shadow-xl hover:shadow-2xl"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ClientSatisfaction;
