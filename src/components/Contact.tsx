"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Mail, Zap, CheckCircle } from "lucide-react";

type FormData = {
  firstName: string;
  email: string;
  companyRole: string;
  automationType: string;
  message: string;
};

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
    setIsSuccess(true);
    // Auto reset or just show checkmark
  };

  const contactInfo = [
    { icon: <Calendar className="w-6 h-6 text-indigo" />, title: "Book a Call", desc: "20-min free scoping session" },
    { icon: <Mail className="w-6 h-6 text-indigo" />, title: "Email", desc: "hello@aiworkz360.com" },
    { icon: <Zap className="w-6 h-6 text-indigo" />, title: "Response Time", desc: "Within 1 business day" },
  ];

  return (
    <section id="contact" className="py-32 relative bg-bg overflow-hidden scroll-mt-24">
      {/* Background Decor */}
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left - Contact Info */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="flex flex-col h-full"
          >
            <div className="flex flex-col gap-4 mb-20">
              <span className="text-indigo font-mono text-xs tracking-widest uppercase mb-2">// Contact</span>
              <h2 className="text-4xl md:text-6xl font-semibold font-heading leading-tight tracking-[-0.04em]">
                 Let's map your <br /> workflow together.
              </h2>
            </div>

            <div className="flex flex-col gap-12">
               {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-6 group">
                     <div className="w-14 h-14 rounded-2xl bg-indigo/10 border border-indigo/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(108,99,255,0.2)]">
                        {info.icon}
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-white text-xl font-bold font-heading">{info.title}</span>
                        <span className="text-muted text-lg font-body leading-relaxed">{info.desc}</span>
                     </div>
                  </div>
               ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}
             className="relative"
          >
             <div className="p-10 rounded-[40px] bg-card border border-white/5 shadow-2xl relative overflow-hidden group">
                <AnimatePresence mode="wait">
                   {!isSuccess ? (
                      <motion.form 
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        onSubmit={handleSubmit(onSubmit)} 
                        className="flex flex-col gap-6"
                      >
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                               <label className="text-xs font-mono uppercase tracking-widest text-[#6B6B88]">First Name</label>
                               <input 
                                 {...register("firstName", { required: true })}
                                 className="p-4 rounded-xl bg-bg border border-white/10 text-white focus:border-indigo outline-none transition-all duration-300"
                                 placeholder="e.g. Pablo"
                               />
                            </div>
                            <div className="flex flex-col gap-2">
                               <label className="text-xs font-mono uppercase tracking-widest text-[#6B6B88]">Email</label>
                               <input 
                                 {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                 className="p-4 rounded-xl bg-bg border border-white/10 text-white focus:border-indigo outline-none transition-all duration-300"
                                 placeholder="e.g. pablo@example.com"
                               />
                            </div>
                         </div>

                         <div className="flex flex-col gap-2">
                            <label className="text-xs font-mono uppercase tracking-widest text-[#6B6B88]">Company / Role</label>
                            <input 
                              {...register("companyRole", { required: true })}
                              className="p-4 rounded-xl bg-bg border border-white/10 text-white focus:border-indigo outline-none transition-all duration-300"
                              placeholder="e.g. CEO at Tech Innovations"
                            />
                         </div>

                         <div className="flex flex-col gap-2">
                            <label className="text-xs font-mono uppercase tracking-widest text-[#6B6B88]">What are you trying to automate?</label>
                            <select 
                               {...register("automationType", { required: true })}
                               className="p-4 rounded-xl bg-bg border border-white/10 text-white focus:border-indigo outline-none transition-all duration-300 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B6B88%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat cursor-pointer"
                            >
                               <option value="" disabled selected>Select an option</option>
                               <option value="Workflow Automation">Workflow Automation</option>
                               <option value="Custom AI Tool or App">Custom AI Tool or App</option>
                               <option value="CRM or Data Pipeline">CRM or Data Pipeline</option>
                               <option value="Document Processing">Document Processing</option>
                               <option value="Not sure — need guidance">Not sure — need guidance</option>
                            </select>
                         </div>

                         <div className="flex flex-col gap-2">
                            <label className="text-xs font-mono uppercase tracking-widest text-[#6B6B88]">Tell us more...</label>
                            <textarea 
                              {...register("message", { required: true })}
                               rows={4}
                               className="p-4 rounded-xl bg-bg border border-white/10 text-white focus:border-indigo outline-none transition-all duration-300 resize-none"
                               placeholder="Briefly describe your current process or the problem you're solving..."
                            />
                         </div>

                         <button 
                            type="submit" 
                            className="w-full sm:w-auto px-10 py-5 rounded-full bg-indigo text-white font-semibold font-heading text-lg hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] transition-all hover:scale-[1.02] transform flex items-center justify-center gap-3 overflow-hidden relative group"
                         >
                            <span className="relative z-10">Send Message</span>
                            <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
                            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[45deg]"></div>
                         </button>
                      </motion.form>
                   ) : (
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-20 text-center gap-6"
                      >
                         <div className="w-20 h-20 rounded-full bg-indigo/20 border border-indigo/40 flex items-center justify-center mb-4">
                            <CheckCircle className="w-10 h-10 text-indigo animate-bounce" />
                         </div>
                         <h3 className="text-3xl font-semibold font-heading text-white">Message Sent!</h3>
                         <p className="text-muted text-lg max-w-xs mx-auto">
                            Thanks for reaching out. We'll get back to you within 24 hours to schedule your scoping call.
                         </p>
                         <button 
                            onClick={() => setIsSuccess(false)}
                            className="mt-6 text-indigo font-bold hover:underline"
                         >
                           Send another message
                         </button>
                      </motion.div>
                   )}
                </AnimatePresence>

                {/* Corner ornament */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-indigo/10 to-transparent group-hover:from-cyan/10 transition-colors duration-1000 rotate-180 opacity-40"></div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
