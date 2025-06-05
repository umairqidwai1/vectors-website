"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Zap, Shield, BarChart, Code, Sparkles } from "lucide-react"
import { AnimatedButton } from "@/components/animated-button"
import ScrollReveal from "@/components/scroll-reveal"
import VectorShape from "@/components/vector-shape"
import VectorBackground from "@/components/vector-background"

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div className="relative">
      <VectorBackground />

      {/* Hero Section */}
      <section
        ref={targetRef}
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden vector-bg"
      >
        <motion.div
          style={{ opacity, scale }}
          className="container mx-auto px-4 py-20 flex flex-col items-center text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <img src="/logo.png" alt="Vectors Logo" className="h-20 w-20 rounded-full shadow-lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block"
          >
            <span className="px-4 py-1.5 rounded-full bg-purple-900/30 text-purple-300 text-sm font-medium border border-purple-800">
              Introducing Vectors
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl"
          >
            <span className="gradient-text">Vectors AI</span> Automates Your Business With Smart Agents
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 max-w-2xl"
          >
            Vectors is an AI automation platform that helps businesses deploy intelligent agents to streamline workflows, reduce manual tasks, and scale operations with ease.
          </motion.p>

          {/* SEO Description */}
          <p className="sr-only">
            Vectors AI is a cutting-edge automation platform that helps businesses deploy intelligent AI agents and digital employees. 
            With Vectors Build, teams can automate daily operations, manage client communication, and streamline support workflows. 
            Our platform offers Vectors Agents, AI Workflows, and no-code automation tools built to scale with your business. 
            Whether you're running an agency, startup, or enterprise, Vectors AI delivers smart automation for sales, onboarding, support, data entry, and more. 
            Try Vectors.build to transform manual tasks into efficient, AI-powered processes and boost your business efficiency.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact">
              <AnimatedButton size="lg">Get Started with Vectors AI</AnimatedButton>
            </Link>
            <Link href="/demo">
              <AnimatedButton variant="outline" size="lg">
                See Demo <ArrowRight className="ml-2 h-4 w-4" />
              </AnimatedButton>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 relative"
          >
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden gradient-border">
                <div className="w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  <div className="animate-pulse">
                    <VectorShape size={150} animated={true} />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 animate-float">
                <VectorShape color="#4f46e5" size={100} />
              </div>
              <div className="absolute -top-6 -left-6 animate-float" style={{ animationDelay: "1s" }}>
                <VectorShape color="#9333ea" size={80} />
              </div>
            </div>
          </motion.div>
          {/* More SEO Description for Screen Readers */}
          <p className="sr-only">
            Discover the power of Vectors AI Automations—designed for scalable workflow automation, AI assistants, and next-gen business tools. 
            From AI employees handling customer queries to backend automation of business intelligence systems, Vectors adapts to your operations. 
            Keywords include vectors ai, vectors automations, vectors workflows, vectors agents, AI automation platform, virtual AI staff, and workflow automation solutions. 
            Trusted by modern businesses, Vectors AI simplifies operations with smart tools that grow with your company. Start building with AI today at vectors.build.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black vector-bg">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              <span className="gradient-text">Intelligent Automation</span> For Modern Businesses
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-6 w-6 text-purple-400" />,
                title: "Lightning Fast",
                description:
                  "Deploy AI agents in minutes, not months. Get results immediately with our no-code platform.",
              },
              {
                icon: <Shield className="h-6 w-6 text-purple-400" />,
                title: "Enterprise Security",
                description:
                  "Your data stays private with end-to-end encryption and SOC 2 compliance built into every agent.",
              },
              {
                icon: <BarChart className="h-6 w-6 text-purple-400" />,
                title: "Performance Analytics",
                description: "Track agent performance with detailed analytics and optimize for better results.",
              },
              {
                icon: <Code className="h-6 w-6 text-purple-400" />,
                title: "Customizable",
                description: "Tailor agents to your specific needs with our intuitive interface or API integration.",
              },
              {
                icon: <Sparkles className="h-6 w-6 text-purple-400" />,
                title: "Continuous Learning",
                description: "Agents improve over time by learning from interactions and feedback.",
              },
              {
                icon: <ArrowRight className="h-6 w-6 text-purple-400" />,
                title: "Seamless Integration",
                description:
                  "Connect with your existing tools and workflows through our extensive integration library.",
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-purple-800 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-black vector-bg">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              <span className="gradient-text">How Vectors Works</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Define Your Workflow",
                description: "Describe what you want to automate in plain language or use our visual workflow builder.",
              },
              {
                step: "02",
                title: "Deploy Your Agent",
                description: "Our platform creates a custom AI agent tailored to your specific workflow requirements.",
              },
              {
                step: "03",
                title: "Optimize & Scale",
                description: "Monitor performance, make adjustments, and scale your automation as needed.",
              },
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.2} direction="up">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 text-7xl font-bold text-purple-900/30">{step.step}</div>
                  <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-purple-800 transition-all duration-300 h-full">
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.6}>
            <div className="mt-16 text-center">
              <Link href="/contact">
                <AnimatedButton size="lg">Start Building Now</AnimatedButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Use Cases Preview */}
      <section className="py-20 bg-black vector-bg">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">AI Automation Use Cases</span>
              </h2>
              <Link href="/use-cases">
                <AnimatedButton variant="outline" className="mt-4 md:mt-0">
                  View All Use Cases <ArrowRight className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Support",
                description:
                  "Automate responses to common customer inquiries and route complex issues to human agents.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Data Analysis",
                description: "Extract insights from your data automatically and generate comprehensive reports.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Content Creation",
                description:
                  "Generate blog posts, social media content, and marketing copy tailored to your brand voice.",
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((useCase, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group rounded-lg overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-purple-800 transition-all duration-300 h-full">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={useCase.image || "/placeholder.svg"}
                      alt={useCase.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                    <p className="text-gray-400 mb-4">{useCase.description}</p>
                    <Link href={`/use-cases/${useCase.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <span className="text-purple-400 flex items-center hover:text-purple-300 transition-colors">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black vector-bg">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl bg-gradient-to-br from-purple-900/40 to-violet-900/40 border border-purple-800/50 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">  Ready to Automate Your Business with Vectors AI?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using Vectors to automate workflows and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <AnimatedButton size="lg">Get Started Free</AnimatedButton>
                </Link>
                <Link href="/demo">
                  <AnimatedButton variant="outline" size="lg">
                    Schedule a Demo
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
