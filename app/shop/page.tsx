"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import {
  ShoppingCart,
  Heart,
  Star,
  Filter,
  Search,
  Shirt,
  Dumbbell,
  Shield,
  Crown,
  Award,
  Sparkles,
  Eye,
  X
} from "lucide-react"

const productCategoryConfig = [
  { id: "all", labelKey: "pages.shop.categories.all", icon: ShoppingCart },
  { id: "apparel", labelKey: "pages.shop.categories.apparel", icon: Shirt },
  { id: "equipment", labelKey: "pages.shop.categories.equipment", icon: Dumbbell },
  { id: "accessories", labelKey: "pages.shop.categories.accessories", icon: Shield },
  { id: "memorabilia", labelKey: "pages.shop.categories.memorabilia", icon: Award },
]

const products = [
  // Apparel
  {
    id: 1,
    name: "Tensho Training Gi",
    price: 89.99,
    originalPrice: 109.99,
    category: "apparel",
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg",
    badge: "Best Seller",
    description: "Premium cotton gi with reinforced stitching for intense training sessions."
  },
  {
    id: 2,
    name: "Champion T-Shirt",
    price: 24.99,
    category: "apparel",
    rating: 4.6,
    reviews: 89,
    image: "/placeholder.svg",
    description: "Comfortable cotton t-shirt with Tensho logo and champion design."
  },
  {
    id: 3,
    name: "Official Hoodie",
    price: 49.99,
    category: "apparel",
    rating: 4.9,
    reviews: 156,
    image: "/placeholder.svg",
    badge: "New",
    description: "Warm and comfortable hoodie perfect for training or casual wear."
  },

  // Equipment
  {
    id: 4,
    name: "Heavy Bag Set",
    price: 199.99,
    originalPrice: 249.99,
    category: "equipment",
    rating: 4.7,
    reviews: 67,
    image: "/placeholder.svg",
    description: "Professional heavy bag with stand and accessories for home training."
  },
  {
    id: 5,
    name: "Focus Mitts",
    price: 39.99,
    category: "equipment",
    rating: 4.5,
    reviews: 43,
    image: "/placeholder.svg",
    description: "High-quality focus mitts for partner training and technique practice."
  },
  {
    id: 6,
    name: "Speed Bag Platform",
    price: 79.99,
    category: "equipment",
    rating: 4.4,
    reviews: 28,
    image: "/placeholder.svg",
    description: "Adjustable speed bag platform for coordination and timing training."
  },

  // Accessories
  {
    id: 7,
    name: "Belt Display Rack",
    price: 29.99,
    category: "accessories",
    rating: 4.3,
    reviews: 52,
    image: "/placeholder.svg",
    description: "Elegant wooden rack to display your belt collection with pride."
  },
  {
    id: 8,
    name: "Training Timer",
    price: 19.99,
    category: "accessories",
    rating: 4.6,
    reviews: 78,
    image: "/placeholder.svg",
    description: "Digital interval timer perfect for circuit training and rounds."
  },
  {
    id: 9,
    name: "Water Bottle",
    price: 14.99,
    category: "accessories",
    rating: 4.2,
    reviews: 91,
    image: "/placeholder.svg",
    badge: "Eco-Friendly",
    description: "Insulated stainless steel water bottle with Tensho logo."
  },

  // Memorabilia
  {
    id: 10,
    name: "Championship Poster",
    price: 12.99,
    category: "memorabilia",
    rating: 4.8,
    reviews: 34,
    image: "/placeholder.svg",
    description: "Limited edition poster commemorating our championship victories."
  },
  {
    id: 11,
    name: "Master Signature Book",
    price: 34.99,
    category: "memorabilia",
    rating: 4.9,
    reviews: 67,
    image: "/placeholder.svg",
    badge: "Collectible",
    description: "Autographed book by Grand Master Li Wei with exclusive insights."
  },
  {
    id: 12,
    name: "Dojo Keychain",
    price: 7.99,
    category: "memorabilia",
    rating: 4.1,
    reviews: 23,
    image: "/placeholder.svg",
    description: "Metal keychain with Tensho logo and traditional design elements."
  }
]

export default function ShopPage() {
  const { t } = useTranslation("common")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)

  const productCategories = productCategoryConfig.map((category) => ({
    ...category,
    label: t(category.labelKey),
  }))

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-brand-black to-brand-dark-grey">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb />
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-medium mb-6"
            >
              <ShoppingCart className="w-4 h-4" />
              {t("pages.shop.badge")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl font-bold uppercase text-text-light mb-6"
            >
              {t("pages.shop.title")} <span className="text-brand-red">{t("pages.shop.titleHighlight")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-muted text-lg max-w-2xl mx-auto"
            >
              {t("pages.shop.subtitle")}
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 bg-gradient-to-r from-brand-red/20 via-brand-gold/20 to-brand-red/20 rounded-3xl p-8 border border-white/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50" />
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-brand-gold" />
              <h2 className="text-2xl font-bold text-text-light">{t("pages.shop.banner.title")}</h2>
              <Sparkles className="w-8 h-8 text-brand-gold" />
            </div>
            <p className="text-text-muted mb-4">{t("pages.shop.banner.subtitle")}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-3xl font-bold text-brand-gold">{t("pages.shop.banner.code")}</span>
              <Link href="/membership">
                <Button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-black font-bold">
                  {t("pages.shop.banner.cta")}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-brand-dark-grey/30 rounded-2xl p-6 border border-white/5 mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder={t("pages.shop.searchPlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-brand-black/50 border border-white/10 rounded-xl text-text-light placeholder:text-text-muted focus:border-brand-gold focus:outline-none text-lg"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {productCategories.map((category) => {
                const Icon = category.icon
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-brand-red hover:bg-brand-red/90 text-text-light shadow-lg shadow-brand-red/25"
                        : "border-white/20 text-text-light hover:bg-white/10 hover:text-brand-red hover:border-brand-red/50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {category.label}
                  </Button>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-brand-dark-grey/80 to-brand-black/80 border border-white/10 hover:border-brand-gold/50 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-brand-gold/10 h-full">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badges */}
                  {product.badge && (
                    <Badge className="absolute top-4 left-4 bg-brand-gold text-brand-black font-bold shadow-lg">
                      {product.badge}
                    </Badge>
                  )}
                  {product.originalPrice && (
                    <Badge className="absolute top-4 right-4 bg-green-500 text-white font-bold shadow-lg">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </Badge>
                  )}

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="w-9 h-9 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProduct(product)
                      }}
                    >
                      <Eye className="w-4 h-4 text-white" />
                    </Button>
                    <Button size="icon" variant="secondary" className="w-9 h-9 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20">
                      <Heart className="w-4 h-4 text-white" />
                    </Button>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-brand-red hover:bg-brand-red/90 text-text-light font-bold px-6 py-3 transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Quick Add
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Product Info */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-text-light text-lg line-clamp-2 group-hover:text-brand-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-text-muted text-sm line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-500"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-text-muted font-medium">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-xs text-text-muted">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 pt-2">
                    <span className="text-2xl font-bold text-brand-gold">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <div className="flex flex-col">
                        <span className="text-sm text-text-muted line-through">
                          ${product.originalPrice}
                        </span>
                        <span className="text-xs text-green-400 font-medium">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button className="w-full bg-gradient-to-r from-brand-red to-brand-red/80 hover:from-brand-red/90 hover:to-brand-red/70 text-text-light font-bold py-3 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-brand-red/25">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Results Summary */}
        {filteredProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-between mb-8 text-text-muted"
          >
            <span>{t("pages.shop.showingProducts", { count: filteredProducts.length })}</span>
            <div className="flex items-center gap-4">
              <span className="text-sm">{t("pages.shop.sortBy")}</span>
              <select className="bg-brand-dark-grey/50 border border-white/10 rounded-lg px-3 py-1 text-text-light text-sm focus:border-brand-gold focus:outline-none">
                <option>{t("pages.shop.sort.featured")}</option>
                <option>{t("pages.shop.sort.priceLowToHigh")}</option>
                <option>{t("pages.shop.sort.priceHighToLow")}</option>
                <option>{t("pages.shop.sort.rating")}</option>
                <option>{t("pages.shop.sort.newest")}</option>
              </select>
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-brand-dark-grey/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-12 h-12 text-text-muted" />
            </div>
            <h3 className="text-2xl font-bold text-text-light mb-3">{t("pages.shop.emptyTitle")}</h3>
            <p className="text-text-muted mb-6 max-w-md mx-auto">
              {t("pages.shop.emptyDescription")}
            </p>
            <Button
              onClick={() => {
                setSelectedCategory("all")
                setSearchTerm("")
              }}
              className="bg-brand-red hover:bg-brand-red/90"
            >
              {t("pages.shop.clearFilters")}
            </Button>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-brand-red/20 to-brand-gold/20 rounded-3xl p-8 border border-white/5 text-center"
        >
          <Crown className="w-12 h-12 text-brand-gold mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-text-light mb-4">{t("pages.shop.newsletter.title")}</h3>
          <p className="text-text-muted mb-6 max-w-2xl mx-auto">
            {t("pages.shop.newsletter.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/membership">
              <Button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-black font-bold px-8 py-3">
                {t("pages.shop.newsletter.becomeMember")}
              </Button>
            </Link>
            <Button variant="outline" className="border-white/10 text-text-light hover:bg-white/5 px-8 py-3">
              {t("pages.shop.newsletter.learnMore")}
            </Button>
          </div>
        </motion.div>
      </div>

      <Footer />
      <BackToTop />

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl bg-brand-black border-white/10">
          {selectedProduct && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {selectedProduct.badge && (
                  <Badge className="bg-brand-gold text-brand-black">
                    {selectedProduct.badge}
                  </Badge>
                )}
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-text-light mb-2">{selectedProduct.name}</h2>
                  <p className="text-text-muted text-lg">{selectedProduct.description}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(selectedProduct.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-text-light font-medium">
                    {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-brand-gold">
                    ${selectedProduct.price}
                  </span>
                  {selectedProduct.originalPrice && (
                    <div className="flex flex-col">
                      <span className="text-xl text-text-muted line-through">
                        ${selectedProduct.originalPrice}
                      </span>
                      <span className="text-sm text-green-400 font-medium">
                        Save ${(selectedProduct.originalPrice - selectedProduct.price).toFixed(2)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Category */}
                <div className="flex items-center gap-2">
                  <span className="text-text-muted">Category:</span>
                  <Badge variant="outline" className="border-white/20 text-text-light capitalize">
                    {selectedProduct.category}
                  </Badge>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                  <Button className="flex-1 bg-brand-red hover:bg-brand-red/90 text-text-light font-bold py-3">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart - ${selectedProduct.price}
                  </Button>
                  <Button variant="outline" className="border-white/20 text-text-light hover:bg-white/10">
                    <Heart className="w-5 h-5 mr-2" />
                    Add to Wishlist
                  </Button>
                </div>

                {/* Additional Info */}
                <div className="border-t border-white/10 pt-6 space-y-3">
                  <h3 className="text-lg font-semibold text-text-light">Product Details</h3>
                  <ul className="space-y-2 text-text-muted">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                      Premium quality materials
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                      Official Tensho branding
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                      Perfect for training and competition
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                      Satisfaction guaranteed
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  )
}
