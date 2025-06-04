"use client"

export const metadata = {
  title: 'Use Cases | Vectors AI',
  description: 'Explore real-world use cases of how Vectors AI agents can transform operations across various industries.',
};

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import VectorBackground from "@/components/vector-background"
import { AnimatedButton } from "@/components/animated-button"

const useCases = [
  {
    title: "Customer Support",
    description: "Automate responses to common customer inquiries and route complex issues to human agents.",
    image: "/placeholder.svg?height=300&width=600",
    benefits: [
      "Reduce response time by up to 80%",
      "Handle multiple inquiries simultaneously",
      "Maintain consistent brand voice",
      "Seamless handoff to human agents when needed",
    ],
  },
  {
    title: "Data Analysis",
    description: "Extract insights from your data automatically and generate comprehensive reports.",
    image: "/placeholder.svg?height=300&width=600",
    benefits: [
      "Analyze large datasets in minutes",
      "Identify trends and patterns automatically",
      "Generate visualizations and dashboards",
      "Schedule regular reports and insights",
    ],
  },
  {
    title: "Content Creation",
    description: "Generate blog posts, social media content, and marketing copy tailored to your brand voice.",
    image: "/placeholder.svg?height=300&width=600",
    benefits: [
      "Create content at scale",
      "Maintain consistent brand messaging",
      "Optimize content for SEO",
      "Generate ideas and outlines",
    ],
  },
  {
    title: "Sales Automation",
    description: "Qualify leads, schedule meetings, and follow up with prospects automatically.",
    image: "/placeholder.svg?height=300&width=600",
    benefits: [
      "Qualify leads 24/7",
      "Personalized follow-ups at scale",
      "Intelligent meeting scheduling",
      "Sales pipeline analytics",
    ],
  },
  {
    title: "Research Assistant",
    description: "Gather information, summarize findings, and generate reports on any topic.",
    image: "/placeholder.svg?height=300&width=600",
    benefits: [
      "Comprehensive research in minutes",
      "Summarize lengthy documents",
      "Extract key insights and citations",
      "Stay updated on industry trends",
    ],
  },
  {
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows across your organization.",
    image: "/placeholder.svg?height=300&width=600",
    benefits: [
      "Reduce manual data entry",
      "Automate approval workflows",
      "Connect disparate systems",
      "Scale operations without adding headcount",
    ],
  },
]

export default function UseCasesPage() {
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
              <span className="gradient-text">Use Cases</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Discover how Vectors AI agents can transform your business operations across various departments and
              industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {useCases.map((useCase, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                <div className="group rounded-lg overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-purple-800 transition-all duration-300 h-full">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={useCase.image || "/placeholder.svg"}
                      alt={useCase.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-semibold mb-4">{useCase.title}</h2>
                    <p className="text-gray-300 mb-6">{useCase.description}</p>

                    <h3 className="text-lg font-medium mb-3 text-purple-400">Key Benefits</h3>
                    <ul className="space-y-2 mb-6">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={`/use-cases/${useCase.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <AnimatedButton variant="outline">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA Section */}
          <ScrollReveal>
            <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl bg-gradient-to-br from-purple-900/40 to-violet-900/40 border border-purple-800/50 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using Vectors to automate workflows and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton size="lg">Get Started Free</AnimatedButton>
                <Link href="/contact">
                  <AnimatedButton variant="outline" size="lg">
                    Contact Sales
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
