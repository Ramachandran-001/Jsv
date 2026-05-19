import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, Phone, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_0qfxzbl",
        "template_7sxyfcm",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "cPjxPO22ma7G3S3ET"
      );
      console.log("Form data:", data);
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  const whatsappNumber = "+918870010339"; // Added country code +91
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}`;

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 relative bg-background flex flex-col justify-center items-center">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl w-full mx-auto relative z-10 grid md:grid-cols-5 gap-12 bg-card/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
        
        {/* Contact Info container */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 flex flex-col justify-between"
        >
          <div>
            <h1 className="text-4xl font-extrabold mb-4 text-foreground">Get in Touch</h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Have questions about our wind energy solutions? We'd love to hear from you. Drop us a message or reach out via WhatsApp.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center p-4 px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out bg-green-500 rounded-full hover:bg-green-600 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] overflow-hidden"
          >
            <MessageCircle className="w-5 h-5 mr-2 relative z-10" />
            <span className="relative z-10">Chat on WhatsApp</span>
            <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
          </a>
        </motion.div>

        {/* Form Container */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-3"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className={`w-full px-4 py-3 rounded-xl bg-background border transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground ${
                  errors.name ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-primary"
                }`}
                placeholder="John Doe"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-sm text-red-500">
                  {errors.name.message}
                </motion.p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className={`w-full px-4 py-3 rounded-xl bg-background border transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground ${
                  errors.email ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-primary"
                }`}
                placeholder="john@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </motion.p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className={`w-full px-4 py-3 rounded-xl bg-background border transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none ${
                  errors.message ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-primary"
                }`}
                placeholder="How can we help you?"
                {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } })}
              ></textarea>
              {errors.message && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-sm text-red-500">
                  {errors.message.message}
                </motion.p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center px-8 py-4 font-bold text-white transition-all bg-primary rounded-xl hover:bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
