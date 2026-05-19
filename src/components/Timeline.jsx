import { motion } from "framer-motion";

const timelineData = [
  {
    year: "1999",
    title: "Foundation",
    description: "Our journey began in 1999 with a clear vision—to harness the power of renewable energy and create sustainable solutions for the future.We started by identifying and developing suitable land for windmill installations, focusing on detailed feasibility studies, wind potential analysis, and site selection. This strong foundation enabled us to understand the core challenges and opportunities in the renewable energy sector.",
  },
  {
    year: "2010",
    title: "Power Trading",
    description: " We Delivered cost-effective and reliable power trading solutions for industries and Commercial through Open Access Renewable Energy. ",
  },
  {
    year: "2020",
    title: "Solar Projects",
    description: " In 2020, we expanded our services to offer complete one-stop solutions for Solar Turnkey Projects, delivering end-to-end support from design and procurement to installation and commissioning.",
  },
  {
    year:"2026",
    title:"Expoloring New Technologies",
    description:"In 2026, we are expanding into Battery Energy Storage Systems (BESS) to enhance solar power reliability, optimize energy usage, and deliver advanced storage solutions for our clients.",
  }
];

const Timeline = () => {
  return (
    <div className="relative border-l border-primary/30 ml-3 md:ml-0 md:pl-0 md:flex md:flex-col items-center">
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className={`mb-12 pl-8 md:pl-0 w-full flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:justify-end" : "md:justify-start"
          } relative`}
        >
          {/* Timeline Dot */}
          <div className="absolute left-[-5px] top-1 md:left-1/2 md:-ml-[5px] w-3 h-3 rounded-full bg-primary ring-4 ring-background shadow-[0_0_15px_rgba(59,130,246,0.6)]" />

          <div
            className={`md:w-5/12 bg-muted/50 p-6 rounded-2xl backdrop-blur-sm border border-white/5 hover:border-primary/50 transition-colors ${
              index % 2 === 0 ? "md:mr-12" : "md:ml-12"
            }`}
          >
            <span className="text-primary font-mono text-sm tracking-widest font-bold">
              {item.year}
            </span>
            <h3 className="text-xl font-heading font-semibold mt-2 mb-3 text-foreground">
              {item.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
      <div className="absolute left-[-1px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent -z-10" />
    </div>
  );
};

export default Timeline;
