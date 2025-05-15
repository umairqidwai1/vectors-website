"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface VectorShapeProps {
  color?: string
  size?: number
  className?: string
  animated?: boolean
}

export default function VectorShape({
  color = "#9333ea",
  size = 200,
  className = "",
  animated = true,
}: VectorShapeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = size
    canvas.height = size

    // Draw vector shape
    const drawShape = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create a timestamp for animation
      const time = Date.now() * 0.001

      // Draw triangular vector shape
      ctx.beginPath()

      // Calculate points with slight animation if animated
      const centerX = size / 2
      const centerY = size / 2
      const radius = size * 0.4

      // Create 3 points for triangle with optional animation
      const points = []
      for (let i = 0; i < 3; i++) {
        const angle = (i * (Math.PI * 2)) / 3 + (animated ? Math.sin(time * 0.5) * 0.1 : 0)
        const x = centerX + Math.cos(angle) * radius * (animated ? 0.9 + Math.sin(time + i) * 0.1 : 1)
        const y = centerY + Math.sin(angle) * radius * (animated ? 0.9 + Math.cos(time + i) * 0.1 : 1)
        points.push({ x, y })
      }

      // Draw the triangle
      ctx.moveTo(points[0].x, points[0].y)
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y)
      }
      ctx.closePath()

      // Style
      ctx.strokeStyle = color
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw connecting lines
      ctx.beginPath()
      ctx.moveTo(points[0].x, points[0].y)
      ctx.lineTo(centerX, centerY)
      ctx.moveTo(points[1].x, points[1].y)
      ctx.lineTo(centerX, centerY)
      ctx.moveTo(points[2].x, points[2].y)
      ctx.lineTo(centerX, centerY)
      ctx.strokeStyle = color
      ctx.lineWidth = 1
      ctx.stroke()

      // Draw a small circle in the center
      ctx.beginPath()
      ctx.arc(centerX, centerY, 3, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()

      // Request next frame if animated
      if (animated) {
        requestAnimationFrame(drawShape)
      }
    }

    drawShape()

    return () => {
      // Cleanup
    }
  }, [color, size, animated])

  return (
    <motion.canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  )
}
