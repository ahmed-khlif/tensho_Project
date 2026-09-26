"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, CheckCircle, XCircle, Loader2, QrCode, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function VerificationSection() {
  const [certificateId, setCertificateId] = useState("")
  const [status, setStatus] = useState<"idle" | "scanning" | "valid" | "invalid">("idle")
  const [isHovering, setIsHovering] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleVerify = () => {
    if (!certificateId.trim()) return
    setStatus("scanning")
    setTimeout(() => {
      // Demo: IDs starting with "TSH" are valid
      setStatus(certificateId.toUpperCase().startsWith("TSH") ? "valid" : "invalid")
    }, 2000)
  }

  const resetForm = () => {
    setStatus("idle")
    setCertificateId("")
  }

  return (
    <section ref={ref} className="py-24 px-4 bg-[#F4F6F8]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase text-brand-black mb-4">
            Certificate <span className="text-brand-red">Verification</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Instantly verify the authenticity of any Tensho certification with our secure validation system.
          </p>
        </motion.div>

        {/* Verification Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12"
        >
          {status === "idle" || status === "scanning" ? (
            <>
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-brand-black/5 flex items-center justify-center">
                    <Shield className="w-10 h-10 text-brand-black" />
                  </div>
                  {status === "scanning" && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-brand-red"
                      animate={{ scale: [1, 1.1, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    />
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input
                  placeholder="Enter Certificate ID (e.g., TSH-2024-001)"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  className="flex-1 h-14 bg-gray-50 border-gray-200 text-brand-black placeholder:text-text-muted focus:ring-brand-red focus:border-brand-red text-center sm:text-left"
                  disabled={status === "scanning"}
                />
                <motion.div
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={handleVerify}
                    disabled={status === "scanning" || !certificateId.trim()}
                    className="h-14 px-8 bg-brand-green hover:bg-brand-green-dark text-white font-semibold w-full sm:w-auto"
                  >
                    {status === "scanning" ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Scanning...
                      </>
                    ) : (
                      <>
                        <Search className={`mr-2 h-5 w-5 transition-transform ${isHovering ? "scale-110" : ""}`} />
                        Verify
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>

              <p className="text-center text-sm text-text-muted mt-4">
                Try <span className="font-medium text-brand-black">TSH-2024-001</span> for a demo
              </p>
            </>
          ) : status === "valid" ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-black mb-2">Certificate Verified!</h3>
              <p className="text-text-muted mb-6">This certificate is authentic and valid.</p>

              {/* Certificate Preview */}
              <div className="bg-gradient-to-br from-brand-black to-brand-dark-grey rounded-2xl p-6 text-left border-2 border-brand-gold max-w-md mx-auto">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-brand-gold text-sm font-medium">Tensho Academy</p>
                    <p className="text-text-light font-serif text-lg font-bold">Black Belt - 1st Dan</p>
                  </div>
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                    <QrCode className="w-12 h-12 text-brand-black" />
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="text-text-muted">
                    Holder: <span className="text-text-light">Ahmed Ben Salah</span>
                  </p>
                  <p className="text-text-muted">
                    ID: <span className="text-text-light">{certificateId.toUpperCase()}</span>
                  </p>
                  <p className="text-text-muted">
                    Issued: <span className="text-text-light">January 15, 2024</span>
                  </p>
                </div>
              </div>

              <Button
                onClick={resetForm}
                variant="outline"
                className="mt-6 border-brand-black text-brand-black hover:bg-brand-black hover:text-text-light bg-transparent"
              >
                Verify Another
              </Button>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
                <XCircle className="w-10 h-10 text-destructive" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-black mb-2">Certificate Not Found</h3>
              <p className="text-text-muted mb-6">
                We couldn{"'"}t find a certificate with this ID. Please check and try again.
              </p>
              <Button
                onClick={resetForm}
                variant="outline"
                className="border-brand-black text-brand-black hover:bg-brand-black hover:text-text-light bg-transparent"
              >
                Try Again
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
