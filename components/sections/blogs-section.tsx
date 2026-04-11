"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "The Philosophy Behind Martial Arts Training",
    excerpt: "Discover the deep connection between mental discipline and physical mastery in traditional martial arts.",
    image: "/martial-arts-philosophy-meditation-training.jpg",
    author: "SGM Ahmed Mansouri",
    date: "Jan 10, 2026",
    category: "Philosophy",
  },
  {
    id: 2,
    title: "Belt Progression: What Each Color Represents",
    excerpt: "Understanding the symbolism and requirements behind each belt rank in the martial arts journey.",
    image: "/martial-arts-belt-colors-ranking.jpg",
    author: "GM Karim Ben Ali",
    date: "Jan 5, 2026",
    category: "Training",
  },
  {
    id: 3,
    title: "Building a Global Martial Arts Community",
    excerpt: "How Tensho is connecting martial artists across borders and creating lasting bonds worldwide.",
    image: "/placeholder.svg?height=300&width=500",
    author: "SM Youssef Trabelsi",
    date: "Dec 28, 2025",
    category: "Community",
  },
]

export function BlogsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="blogs" ref={ref} className="py-24 px-4 bg-brand-dark-grey">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-sm font-medium mb-6">
            Latest News
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase text-text-light mb-4">
            From Our <span className="text-brand-red">Blog</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Insights, stories, and updates from the world of martial arts.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-brand-black rounded-2xl overflow-hidden border border-white/5 hover:border-brand-red/30 transition-all"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-brand-red text-white text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-text-light mb-3 group-hover:text-brand-red transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-text-muted pt-4 border-t border-white/5">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span className="truncate max-w-[100px]">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              className="border-brand-red text-brand-red hover:bg-brand-red/10 bg-transparent px-8 py-6 text-lg font-semibold"
            >
              View All News
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
