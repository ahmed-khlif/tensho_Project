"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { useTranslation } from "react-i18next"

const breadcrumbLabelKeys: Record<string, string> = {
  about: "breadcrumb.about",
  testimonials: "breadcrumb.testimonials",
  faq: "breadcrumb.faq",
  contact: "breadcrumb.contact",
  leadership: "breadcrumb.leadership",
  certificates: "breadcrumb.certificates",
  programs: "breadcrumb.programs",
  events: "breadcrumb.events",
  blogs: "breadcrumb.blogs",
  gallery: "breadcrumb.gallery",
  calendar: "breadcrumb.calendar",
  resources: "breadcrumb.resources",
  shop: "breadcrumb.shop",
  membership: "breadcrumb.membership",
  dashboard: "breadcrumb.dashboard",
  login: "breadcrumb.login",
  register: "breadcrumb.register",
  masters: "breadcrumb.masters",
}

const formatSegmentLabel = (segment: string) =>
  segment
    .replace(/\[|\]/g, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")

export function Breadcrumb() {
  const pathname = usePathname()
  const { t } = useTranslation("common")

  if (pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)
  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/")
    const labelKey = breadcrumbLabelKeys[segment]
    const label = labelKey ? t(labelKey) : formatSegmentLabel(segment)
    const isLast = index === segments.length - 1

    return {
      href,
      label,
      isLast,
    }
  })

  return (
    <nav className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-text-muted mb-8" aria-label={t("breadcrumb.aria")}>
      <Link href="/" className="flex items-center hover:text-text-light transition-colors">
        <Home className="w-4 h-4 mr-1" />
        {t("breadcrumb.home")}
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
