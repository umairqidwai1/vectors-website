"use client"

import { useEffect, useRef } from "react"

interface VectorBackgroundProps {
  className?: string
}

export default function VectorBackground({ className = "" }: VectorBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Create vector shapes
    const shapes = Array.from({ length: 15 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 20 + Math.random() * 40,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.01,
      color: Math.random() > 0.5 ? "#9333ea" : "#4f46e5",
      opacity: 0.1 + Math.random() * 0.2,
    }))

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw shapes
      shapes.forEach((shape) => {
        // Update position
        shape.x += shape.speedX
        shape.y += shape.speedY
        shape.rotation += shape.rotationSpeed

        // Bounce off edges
        if (shape.x < 0 || shape.x > canvas.width) shape.speedX *= -1
        if (shape.y < 0 || shape.y > canvas.height) shape.speedY *= -1

        // Draw shape
        ctx.save()
        ctx.translate(shape.x, shape.y)
        ctx.rotate(shape.rotation)
        ctx.globalAlpha = shape.opacity

        // Draw triangle
        ctx.beginPath()
        const radius = shape.size / 2
        for (let i = 0; i < 3; i++) {
          const angle = (i * Math.PI * 2) / 3
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.closePath()
        ctx.strokeStyle = shape.color
        ctx.lineWidth = 1
        ctx.stroke()

        // Draw connecting lines
        ctx.beginPath()
        for (let i = 0; i < 3; i++) {
          const angle = (i * Math.PI * 2) / 3
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          ctx.moveTo(0, 0)
          ctx.lineTo(x, y)
        }
        ctx.strokeStyle = shape.color
        ctx.lineWidth = 0.5
        ctx.stroke()

        ctx.restore()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={`fixed top-0 left-0 w-full h-full pointer-events-none ${className}`} />
}
