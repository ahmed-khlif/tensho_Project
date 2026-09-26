"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, Shield, ExternalLink, Download } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const certificates = [
  {
    id: "TSH-COA-2-01",
    name: "SM Mohamed Meddoud",
    country: "Algeria",
    flag: "🇩🇿",
    rank: "Senior Master",
    expires: "8/13/2026",
    status: "active",
    image: "/martial-arts-certificate-red-gold-ornate.jpg",
  },
  {
    id: "TSH-COA-2-02",
    name: "GM Aleomarcio Ferreira Da Silva",
    country: "Brazil",
    flag: "🇧🇷",
    rank: "Grand Master",
    expires: "8/11/2026",
    status: "active",
    image: "/martial-arts-grand-master-certificate-ornate.jpg",
  },
  {
    id: "TSH-COA-2-04",
    name: "GM Lion Shankar Lal Gihara",
    country: "India",
    flag: "🇮🇳",
    rank: "Grand Master",
    expires: "8/11/2026",
    status: "active",
    image: "/martial-arts-certificate-gold-border-official.jpg",
  },
  {
    id: "TSH-COA-2-05",
    name: "SM Ahmed Ben Salah",
    country: "Tunisia",
    flag: "🇹🇳",
    rank: "Senior Master",
    expires: "12/15/2026",
    status: "active",
    image: "/martial-arts-senior-master-certificate.jpg",
  },
  {
    id: "TSH-COA-2-06",
    name: "GM Kenji Yamamoto",
    country: "Japan",
    flag: "🇯🇵",
    rank: "Grand Master",
    expires: "9/20/2026",
    status: "active",
    image: "/japanese-martial-arts-certificate.jpg",
  },
  {
    id: "TSH-COA-2-07",
    name: "SM Carlos Rodriguez",
    country: "Spain",
    flag: "🇪🇸",
    rank: "Senior Master",
    expires: "10/05/2026",
    status: "active",
    image: "/european-martial-arts-certificate-official.jpg",
  },
]

export function CertificateGallerySection() {
  const [searchQuery, setSearchQuery] = useState("")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredCertificates = certificates.filter(
    (cert) =>
      cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.country.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <section ref={ref} className="py-24 px-4 bg-brand-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Verified Certificates
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase text-text-light mb-4">
            Certificate <span className="text-brand-red">Gallery</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-8">
            Browse our verified certificates from martial artists around the world.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <Input
              placeholder="Search by name, ID, or country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 bg-brand-dark-grey border-white/10 text-text-light placeholder:text-text-muted focus:border-brand-red focus:ring-brand-red/20 rounded-full text-center"
            />
          </div>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert, index) => (
            <Dialog key={cert.id}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-brand-dark-grey rounded-2xl overflow-hidden border border-white/5 hover:border-brand-red/30 transition-all duration-300 cursor-pointer"
                >
                  {/* Certificate Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={`${cert.name} Certificate`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold uppercase tracking-wider">
                        Active
                      </span>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-brand-green text-white rounded-full flex items-center gap-2 font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Certificate
                      </motion.button>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="p-5">
                    <p className="text-brand-red text-sm font-mono font-medium mb-2">{cert.id}</p>
                    <h3 className="font-serif text-lg font-bold text-text-light uppercase tracking-wide mb-2 line-clamp-1">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-2 text-text-muted text-sm mb-4">
                      <span className="text-lg">{cert.flag}</span>
                      <span>{cert.country}</span>
                      <span className="text-text-muted/50">|</span>
                      <span className="text-brand-gold">{cert.rank}</span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-text-muted text-xs uppercase tracking-wider">Expires On:</span>
                      <span className="text-text-light font-medium">{cert.expires}</span>
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-brand-black border-white/10">
                <div className="relative">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={`${cert.name} Certificate`}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button
                      size="sm"
                      className="bg-brand-green hover:bg-brand-green-dark text-white"
                      onClick={() => {
                        // Simulate PDF download
                        const link = document.createElement('a')
                        link.href = cert.image || '/placeholder.svg'
                        link.download = `${cert.name.replace(/\s+/g, '_')}_Certificate.jpg`
                        link.click()
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                  <div className="mt-4 p-4 bg-brand-dark-grey/50 rounded-lg">
                    <h3 className="font-serif text-xl font-bold text-text-light mb-2">{cert.name}</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-text-muted">Certificate ID:</span>
                        <span className="text-brand-red ml-2 font-mono">{cert.id}</span>
                      </div>
                      <div>
                        <span className="text-text-muted">Rank:</span>
                        <span className="text-brand-gold ml-2">{cert.rank}</span>
                      </div>
                      <div>
                        <span className="text-text-muted">Country:</span>
                        <span className="text-text-light ml-2">{cert.flag} {cert.country}</span>
                      </div>
                      <div>
                        <span className="text-text-muted">Expires:</span>
                        <span className="text-text-light ml-2">{cert.expires}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* View All Button */}
        {filteredCertificates.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent border-2 border-brand-red text-brand-red hover:bg-brand-red/10 rounded-full font-semibold transition-colors"
            >
              View All Certificates
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
