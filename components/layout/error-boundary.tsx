"use client"

import React from "react"
import { motion } from "framer-motion"
import { AlertTriangle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />
      }

      return <DefaultErrorFallback error={this.state.error} resetError={this.resetError} />
    }

    return this.props.children
  }
}

function DefaultErrorFallback({ error, resetError }: { error?: Error; resetError: () => void }) {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-destructive/10 flex items-center justify-center"
        >
          <AlertTriangle className="w-10 h-10 text-destructive" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-serif text-3xl font-bold text-text-light mb-4"
        >
          Something went wrong
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-text-muted mb-8"
        >
          We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
        </motion.p>

        {process.env.NODE_ENV === 'development' && error && (
          <motion.details
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-6 text-left bg-brand-dark-grey/50 p-4 rounded-lg border border-white/10"
          >
            <summary className="cursor-pointer text-text-light font-medium mb-2">
              Error Details (Development)
            </summary>
            <pre className="text-xs text-text-muted overflow-auto">
              {error.stack}
            </pre>
          </motion.details>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex gap-4 justify-center"
        >
          <Button
            onClick={resetError}
            className="bg-destructive hover:bg-destructive/90 text-white"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.reload()}
            className="border-white/20 text-text-light hover:bg-white/5"
          >
            Refresh Page
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
