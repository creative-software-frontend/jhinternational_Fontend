"use client"

import { SITE_CONFIG } from "@/lib/config/site.config"
import Link from "next/link"
import {
  FaBangladeshiTakaSign,
  FaClock,
  FaPhone,
  FaStore,
  FaTruck,
  FaMagnifyingGlass,
  FaScrewdriverWrench,
  FaArrowRightArrowLeft,
  FaUser,
  FaFireFlameCurved,
} from "react-icons/fa6"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Badge } from "../ui/badge"
import { Separator } from "../ui/separator"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { FaRegHeart } from "react-icons/fa"
import CategoriesSidebar from "./CategoriesSidebar"
import Image from "next/image"
import LogoImage from "@/public/images/logo.png"
import HeaderCartButton from "../ui/HeaderCartButton"
import { useShop } from "@/context/ShopContext"
import { useAuth } from "@/context/AuthContext"

const trendingKeywords: string[] = [
  "RTX 4080 Super",
  "MacBook Pro M3",
  "240Hz OLED Display",
  "64GB DDR5",
]

export default function Header() {
  const { favoriteItemCount, compareItemsCount } = useShop()
  const { openLoginModal } = useAuth()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/95 shadow-xs backdrop-blur-md">
      {/* 1. Utility Bar */}
      <div className="bg-foreground text-background">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-2 px-4 text-xs font-medium sm:gap-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${SITE_CONFIG.contact.hotlineShort}`}
              className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
              aria-label={`Call hotline ${SITE_CONFIG.contact.hotlineShort}`}
            >
              <FaPhone className="size-4" />
              <span>Hotline:</span>
              <strong>{SITE_CONFIG.contact.phones[0]}</strong>
              <span className="hidden sm:inline">
                / {SITE_CONFIG.contact.phones[1]}
              </span>
            </a>

            <span className="hidden items-center gap-1.5 opacity-75 md:flex">
              <FaClock className="size-4" />
              {SITE_CONFIG.contact.hours}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/stores"
              className="hidden items-center gap-1 transition-opacity hover:opacity-80 min-[360px]:flex"
            >
              <FaStore className="size-4" />
              Store Locator
            </Link>

            <Separator
              orientation="vertical"
              className="hidden h-4 bg-background/30 min-[390px]:flex"
            />

            <Link
              href="/track-order"
              className="flex items-center gap-1 transition-opacity hover:opacity-80"
            >
              <FaTruck className="size-4" />
              Track Order
            </Link>

            <Separator
              orientation="vertical"
              className="hidden h-4 bg-background/30 sm:flex"
            />

            <span className="hidden items-center gap-1 sm:flex">
              <FaBangladeshiTakaSign className="size-4" />
              {SITE_CONFIG.currency.code} ({SITE_CONFIG.currency.symbol}) /{" "}
              {SITE_CONFIG.currency.locale}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Brand, Search and Actions */}
      <div className="border-b bg-card">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <Link
            href="/"
            className="flex shrink-0 flex-col"
            aria-label={`${SITE_CONFIG.name} home`}
          >
            {/* logo */}
            <Image src={LogoImage} alt="Logo" width={200} height={200} />
          </Link>
          <div className="flex flex-1 items-center justify-end pt-3">
            {/* Search */}
            <div className="mx-2 hidden max-w-2xl flex-1 flex-col gap-1 lg:flex">
              <form
                action="/search"
                method="GET"
                role="search"
                className="flex items-center gap-2 rounded-lg border bg-muted/50 transition-colors focus-within:border-primary"
              >
                <label htmlFor="desktop-search" className="sr-only">
                  Search products
                </label>

                <Input
                  id="desktop-search"
                  name="q"
                  type="search"
                  placeholder="Search components, laptops, displays..."
                  className="h-9 border-0 bg-transparent shadow-none focus-visible:ring-0"
                />

                <Button
                  type="submit"
                  className="flex-1 rounded-l-none rounded-r-lg border-none"
                  aria-label="Search products"
                >
                  <FaMagnifyingGlass className="size-4" />
                </Button>
              </form>

              {/* Trending Keywords */}
              <div className="flex items-center gap-2 overflow-hidden text-xs whitespace-nowrap">
                <span className="shrink-0 text-sm font-bold text-muted-foreground uppercase">
                  Trending:
                </span>

                {trendingKeywords.map((keyword) => (
                  <Link
                    key={keyword}
                    href={`/search?q=${encodeURIComponent(keyword)}`}
                    className="rounded bg-surface-container px-1.5 py-0.5 font-semibold text-muted-foreground transition-colors hover:text-primary"
                  >
                    {keyword}
                  </Link>
                ))}
              </div>
            </div>

            {/* Header Actions */}
            <div className="-mt-1.5 flex shrink-0 items-center gap-1 self-start sm:gap-2">
              {/* Mobile Search */}
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Search"
              >
                <Link href="/search">
                  <FaMagnifyingGlass className="size-5" />
                </Link>
              </Button>

              {/* PC Builder */}
              <Button
                asChild
                variant="outline"
                className="hidden border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground sm:inline-flex"
              >
                <Link href="/pc-builder">
                  <FaScrewdriverWrench className="size-4" />
                  PC Builder
                </Link>
              </Button>

              {/* Compare */}
              <Button asChild variant="ghost" size="icon" className="relative">
                <Link href="/compare" aria-label="Compare products">
                  <FaArrowRightArrowLeft className="size-5" />
                  {compareItemsCount > 0 && (
                    <Badge className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full p-0 text-xs">
                      {compareItemsCount}
                    </Badge>
                  )}
                </Link>
              </Button>

              {/* favorite list */}
              <Button asChild variant="ghost" size="icon" className="relative">
                <Link href="/favorites" aria-label="favorites">
                  <FaRegHeart className="size-5" />
                  {favoriteItemCount > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full p-0 text-xs"
                    >
                      {favoriteItemCount}
                    </Badge>
                  )}
                </Link>
              </Button>

              {/* Cart */}
              <HeaderCartButton />

              {/* User */}

              <Button
                asChild
                variant="ghost"
                onClick={() => openLoginModal("login")}
                size="icon"
                className="hidden sm:flex"
                aria-label="Account"
              >
                <Avatar className="size-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <FaUser className="size-4" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Categories and Navigation */}
      <div className="relative border-b bg-card shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 flex-1 items-center">
            {/* Categories Navigation Bar (Desktop & Mobile) */}
            <CategoriesSidebar />
          </div>
        </div>
      </div>
    </header>
  )
}
