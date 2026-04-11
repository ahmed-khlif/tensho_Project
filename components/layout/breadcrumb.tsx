"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

const breadcrumbLabels: Record<string, string> = {
  leadership: "Leadership",
  certificates: "Certificates",
  programs: "Programs",
  events: "Events",
  blogs: "Blogs",
}

export function Breadcrumb() {
  const pathname = usePathname()

  if (pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)
  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/")
    const label = breadcrumbLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
    const isLast = index === segments.length - 1

    return {
      href,
      label,
      isLast,
    }
  })

  return (
    <nav className="flex items-center space-x-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
      <Link href="/" className="flex items-center hover:text-text-light transition-colors">
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center">
          <ChevronRight className="w-4 h-4 mx-2" />
          {crumb.isLast ? (
            <span className="text-text-light font-medium">{crumb.label}</span>
          ) : (
            <Link href={crumb.href} className="hover:text-text-light transition-colors">
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}