import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Section } from './ui/Section';

const faqs = [
  {
    question: "What does it cost?",
    answer: "We operate strictly on a performance-based model. This means we only win when you win. There are no heavy upfront retainers; our fees are tied directly to the incremental revenue we generate for your brand."
  },
  {
    question: "What Services does Mailraise offer?",
    answer: "We provide complete end-to-end E-mail and SMS management. This includes strategic campaign planning, complex behavioral flow architecture, and high-converting pop-up forms. Our goal is for you to be completely hands-off—simply provide us with your brand assets, and we handle the execution."
  },
  {
    question: "How often will you send campaigns to the Email list?",
    answer: "Typically, we send between 2-4 campaigns per week. However, this is dynamically adjusted based on your business needs, inventory cycles, and audience segmentation to ensure maximum engagement without list fatigue."
  }
];

// Added FAQItemProps interface to explicitly define component props
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

// Updated FAQItem to use React.FC and the FAQItemProps interface to resolve the 'key' prop assignment error
const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg md:text-xl font-medium transition-colors ${isOpen ? 'text-[#F2E9E4]' : 'text-[#9A8C98] group-hover:text-[#F2E9E4]'}`}>
          {question}
        </span>
        <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-[#C9ADA7] text-[#22223B]' : 'bg-white/5 text-[#9A8C98]'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#9A8C98] leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-32 bg-[#0a0a0a] relative">
      {/* Visual Separation Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <Section>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold tracking-tight text-[#F2E9E4] mb-6">
                Frequently <br />
                Asked Questions
              </h2>
              <p className="text-[#9A8C98] text-lg">
                Transparent answers for brands ready to scale their retention.
              </p>
              
              {/* Decorative accent */}
              <div className="mt-8 w-12 h-1 bg-[#C9ADA7]/30 rounded-full" />
            </motion.div>
          </div>
          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};