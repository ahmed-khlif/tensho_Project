"use client"

import type React from "react"
import { useEffect } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "@/lib/i18n"

const updateDocumentLanguage = (language: string) => {
  document.documentElement.lang = language
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const storedLanguage =
      window.localStorage.getItem("tensho_lang") ?? window.localStorage.getItem("i18nextLng")

    if (storedLanguage && storedLanguage !== i18n.language) {
      void i18n.changeLanguage(storedLanguage)
    }

    updateDocumentLanguage(i18n.language || "en")
    i18n.on("languageChanged", updateDocumentLanguage)

    return () => {
      i18n.off("languageChanged", updateDocumentLanguage)
    }
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
