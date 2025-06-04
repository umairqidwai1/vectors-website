export const metadata = {
  title: 'AI Agents',
  description: 'Discover how Vectors AI agents can automate your workflows and scale your operations.',
};

"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import VectorBackground from "@/components/vector-background"
import { AnimatedButton } from "@/components/animated-button"
import VectorShape from "@/components/vector-shape"

const agents = [
  {
    id: "customer-service",
    name: "Customer Service Agent",
    description: "Handle customer inquiries, resolve issues, and provide support across multiple channels.",
    capabilities: [
      "Natural language understanding",
      "Multi-channel support (email, chat, social)",
      "Knowledge base integration",
      "Sentiment analysis",
      "Escalation to human agents when needed",
    ],
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "data-analyst",
    name: "Data Analyst Agent",
    description: "Process large datasets, identify patterns, and generate insights and visualizations.",
    capabilities: [
      "Data cleaning and preprocessing",
      "Statistical analysis",
      "Automated reporting",
      "Visualization generation",
      "Anomaly detection",
    ],
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "content-creator",
    name: "Content Creator Agent",
    description: "Generate blog posts, social media content, and marketing copy tailored to your brand voice.",
    capabilities: [
      "Brand voice adaptation",
      "SEO optimization",
      "Multi-format content generation",
      "Content calendar management",
      "Performance analytics",
    ],
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "sales-assistant",
    name: "Sales Assistant Agent",
    description: "Qualify leads, schedule meetings, and follow up with prospects automatically.",
    capabilities: [
      "Lead qualification",
      "Meeting scheduling",
      "Personalized follow-ups",
      "CRM integration",
      "Sales pipeline analytics",
    ],
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "research-assistant",
    name: "Research Assistant Agent",
    description: "Gather information, summarize findings, and generate reports on any topic.",
    capabilities: [
      "Web research",
      "Document summarization",
      "Citation management",
      "Trend analysis",
      "Report generation",
    ],
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "process-automation",
    name: "Process Automation Agent",
    description: "Automate repetitive tasks and workflows across your organization.",
    capabilities: [
      "Workflow automation",
      "System integration",
      "Form processing",
      "Approval management",
      "Error handling and reporting",
    ],
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "receptionist-agent",
    name: "Receptionist Agent",
    description: "Answer calls as a receptionist, book meetings, and check availability for your team.",
    capabilities: [
      "Answer and route incoming calls",
      "Book meetings based on calendar availability",
      "Check and manage team schedules",
      "Send meeting invites and confirmations",
      "Provide basic company information to callers"
    ],
    icon: "/placeholder.svg?height=80&width=80",
  },
]

export default function AgentsPage() {
  const [selectedAgent, setSelectedAgent] = useState(agents[0])

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
              <span className="gradient-text">AI Agents</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Our specialized AI agents are designed to handle specific tasks and workflows, adapting to your business
              needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agents Interactive Section */}
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Agent Selection Sidebar */}
            <ScrollReveal direction="left">
              <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
                <h2 className="text-2xl font-semibold mb-6">Our Agents</h2>
                <div className="space-y-4">
                  {agents.map((agent) => (
                    <button
                      key={agent.id}
                      onClick={() => setSelectedAgent(agent)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        selectedAgent.id === agent.id
                          ? "bg-purple-900/30 border border-purple-700"
                          : "bg-gray-800/50 border border-gray-700 hover:border-purple-700"
                      }`}
                    >
                      <div className="flex items-center">
                        <div className="mr-3">
                          <VectorShape
                            size={40}
                            color={selectedAgent.id === agent.id ? "#9333ea" : "#6b7280"}
                            animated={selectedAgent.id === agent.id}
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{agent.name}</h3>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Agent Details */}
            <ScrollReveal direction="up" className="lg:col-span-2">
              <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <VectorShape size={60} color="#9333ea" animated={true} />
                  </div>
                  <h2 className="text-3xl font-semibold">{selectedAgent.name}</h2>
                </div>

                <p className="text-xl text-gray-300 mb-8">{selectedAgent.description}</p>

                <h3 className="text-xl font-medium mb-4 text-purple-400">Key Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {selectedAgent.capabilities.map((capability, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Check className="h-5 w-5 text-purple-500" />
                      </div>
                      <span className="text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <AnimatedButton>Deploy This Agent</AnimatedButton>
                  <Link href={`/agents/${selectedAgent.id}`}>
                    <AnimatedButton variant="outline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Custom Agent Section */}
          <ScrollReveal>
            <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl bg-gradient-to-br from-purple-900/40 to-violet-900/40 border border-purple-800/50">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="relative">
                    <VectorShape size={150} color="#9333ea" animated={true} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <VectorShape size={80} color="#4f46e5" animated={true} />
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h2 className="text-3xl font-bold mb-4">Need a Custom Agent?</h2>
                  <p className="text-gray-300 mb-6">
                    We can build custom AI agents tailored to your specific business needs. Our team will work with you
                    to understand your requirements and develop a solution that integrates seamlessly with your existing
                    workflows.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <AnimatedButton>Schedule a Consultation</AnimatedButton>
                    <Link href="/contact">
                      <AnimatedButton variant="outline">Contact Sales</AnimatedButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
