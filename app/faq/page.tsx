"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import VectorBackground from "@/components/vector-background"
import { AnimatedButton } from "@/components/animated-button"

const faqs = [
  {
    question: "What is Vectors?",
    answer:
      "Vectors is an AI agent automation platform that helps businesses automate complex workflows using intelligent AI agents. Our platform allows you to deploy AI agents that can handle tasks like customer support, data analysis, content creation, and more.",
  },
  {
    question: "How do Vectors AI agents work?",
    answer:
      "Vectors AI agents use advanced machine learning algorithms to understand and execute tasks. They can process natural language, learn from interactions, and adapt to your specific business needs. Our agents are designed to integrate with your existing workflows and tools, making automation seamless.",
  },
  {
    question: "Do I need technical knowledge to use Vectors?",
    answer:
      "No, Vectors is designed to be user-friendly for both technical and non-technical users. Our platform offers a no-code interface for creating and deploying agents, as well as API access for developers who want more customization options.",
  },
  {
    question: "How secure is my data with Vectors?",
    answer:
      "Security is our top priority. Vectors employs end-to-end encryption, SOC 2 compliance, and strict data access controls. Your data is never used to train our models without explicit permission, and you maintain full ownership of your data at all times.",
  },
  {
    question: "Can Vectors integrate with my existing tools?",
    answer:
      "Yes, Vectors offers extensive integration capabilities. We support integration with popular CRM systems, help desks, communication tools, data analytics platforms, and more. If you need a custom integration, our team can help develop it for you.",
  },
  {
    question: "How much does Vectors cost?",
    answer:
      "Vectors offers flexible pricing plans to suit businesses of all sizes. We have a free tier for small teams, as well as professional and enterprise plans with additional features and support. Contact our sales team for detailed pricing information tailored to your needs.",
  },
  {
    question: "How long does it take to deploy an AI agent?",
    answer:
      "With Vectors, you can deploy an AI agent in minutes. Our platform guides you through the process of defining your workflow, selecting the right agent type, and configuring it to your needs. More complex custom agents may require additional setup time.",
  },
  {
    question: "Can I customize the AI agents to match my brand?",
    answer:
      "Absolutely. Vectors allows you to customize the appearance, voice, and behavior of your AI agents to align with your brand identity. You can also train agents on your specific knowledge base and terminology.",
  },
  {
    question: "What kind of support does Vectors offer?",
    answer:
      "We offer comprehensive support including documentation, tutorials, and a knowledge base. Professional and Enterprise plans include dedicated support channels, priority response times, and access to our customer success team.",
  },
  {
    question: "How do I get started with Vectors?",
    answer:
      "Getting started is easy. Simply sign up for a free account on our website, follow the guided setup process, and deploy your first AI agent. Our platform will walk you through each step, and our support team is available if you need assistance.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="relative pt-20">
      <VectorBackground />

      {/* Hero Section */}
      <section className="py-20 vector-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Find answers to common questions about Vectors and our AI agent platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="mb-4">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full text-left p-6 rounded-lg transition-all duration-300 flex justify-between items-center ${
                      openIndex === index
                        ? "bg-purple-900/30 border border-purple-700"
                        : "bg-gray-900/50 border border-gray-800 hover:border-purple-800"
                    }`}
                  >
                    <h3 className="text-xl font-medium">{faq.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-purple-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-purple-400" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 bg-gray-900/30 border-x border-b border-gray-800 rounded-b-lg">
                          <p className="text-gray-300">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Still Have Questions */}
          <ScrollReveal delay={0.5}>
            <div className="max-w-3xl mx-auto mt-16 p-8 rounded-2xl bg-gradient-to-br from-purple-900/40 to-violet-900/40 border border-purple-800/50 text-center">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-gray-300 mb-6">
                Our team is here to help. Contact us for more information about our platform and how it can benefit your
                business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <AnimatedButton>Contact Us</AnimatedButton>
                </Link>
                <Link href="https://calendly.com/agents-vectors/30min" target="_blank" rel="noopener noreferrer">
                  <AnimatedButton variant="outline">Schedule a Demo</AnimatedButton>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
