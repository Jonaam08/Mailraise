import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MousePointerClick, Calendar, GitBranch, FlaskConical } from 'lucide-react';
import { Section } from './ui/Section';

const services = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Expert Klaviyo & SMS Management",
    description: "Complete handling of your retention stack. We ensure your messages land in the inbox, not the spam folder."
  },
  {
    icon: <MousePointerClick className="w-6 h-6" />,
    title: "High Converting Pop-Ups",
    description: "Aggressive yet elegant list growth strategies that capture intent without ruining the user experience."
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Strategic Campaign Planning",
    description: "Execution of 2-4 high-value campaigns per week, aligned with your brand calendar and inventory."
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Automated Flow Architecture",
    description: "Setting up complex behavioral triggers: Abandoned Cart, Browse Abandonment, Post-Purchase, and Win-backs..."
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Frequent A/B Testing",
    description: "We don't set and forget. We constantly test subject lines, send times, and creative angles to maximize effectiveness."
  }
];

export const ValueProps: React.FC = () => {
  return (
    <div className="bg-black py-24 md:py-32 relative border-b border-white/5">
      <Section>
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Section Header - Only sticky on desktop */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold tracking-tight text-[#F2E9E4] mb-6"
            >
              Comprehensive <br className="hidden lg:block"/> Retention Engine.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#9A8C98] text-lg leading-relaxed max-w-lg lg:max-w-none"
            >
              We handle every aspect of the customer lifecycle. From the first click to the tenth purchase.
            </motion.p>
          </div>

          {/* Service Grid */}
          <div className="lg:col-span-8 grid gap-4 md:gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 5 }}
                className="group relative p-6 md:p-8 rounded-2xl bg-[#22223B]/20 border border-white/5 hover:border-[#C9ADA7]/30 hover:bg-[#22223B]/40 transition-all duration-300 flex flex-col md:flex-row items-start gap-6"
              >
                <div className="p-3 rounded-lg bg-[#22223B] text-[#C9ADA7] border border-[#4A4E69] group-hover:bg-[#C9ADA7] group-hover:text-[#22223B] transition-colors shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#F2E9E4] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#9A8C98] leading-relaxed text-sm group-hover:text-[#F2E9E4]/80 transition-colors">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};