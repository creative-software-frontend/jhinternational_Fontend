"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  HiHome,
  HiOutlineHome,
  HiViewGrid,
  HiOutlineViewGrid,
  HiUser,
  HiOutlineUser,
} from "react-icons/hi"
import { useAuth } from "@/context/AuthContext"
import { HiOutlineWrench, HiWrench } from "react-icons/hi2"
import { MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md"
import { useShop } from "@/context/ShopContext"
import { useState } from "react"
import { FaDesktop, FaVideo, FaTimes } from "react-icons/fa"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export default function BottomNav() {
  const pathname = usePathname()
  const { user, openLoginModal } = useAuth()
  const { openCart } = useShop()
  const [isBuilderOpen, setIsBuilderOpen] = useState(false)
  const isBuilderActive =
    pathname.startsWith("/pc-builder") || pathname.startsWith("/cc-builder")

  const navItems = [
    {
      name: "Home",
      href: "/",
      outlineIcon: HiOutlineHome,
      solidIcon: HiHome,
    },
    {
      name: "Categories",
      href: "/category",
      outlineIcon: HiOutlineViewGrid,
      solidIcon: HiViewGrid,
    },
    {
      name: "System Builder",
      outlineIcon: HiOutlineWrench,
      solidIcon: HiWrench,
    },
    {
      name: "Cart",
      // href: "/cart",
      outlineIcon: MdOutlineShoppingCart,
      solidIcon: MdShoppingCart,
      onClick: (e: React.MouseEvent) => {
        if (!user) {
          e.preventDefault()
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur()
          }
          openCart()
        }
      },
    },
    {
      name: "Account",
      // href: user ? "/account" : "#",
      outlineIcon: HiOutlineUser,
      solidIcon: HiUser,
      onClick: (e: React.MouseEvent) => {
        if (!user) {
          e.preventDefault()
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur()
          }
          openLoginModal("login")
        }
      },
    },
  ]
  return (
    <Sheet open={isBuilderOpen} onOpenChange={setIsBuilderOpen}>
      <nav className="fixed right-0 bottom-0 left-0 z-50 border-t border-border bg-background/95 shadow-lg backdrop-blur-md sm:invisible sm:hidden">
        <div className="flex h-16 items-center justify-around px-1">
          {navItems.map((item) => {
            const isBuilderItem = item.name === "System Builder"
            const isActive = isBuilderItem
              ? isBuilderActive
              : pathname === item.href
            const Icon = isActive ? item.solidIcon : item.outlineIcon
            const content = (
              <div
                className={cn(
                  "flex h-full w-full flex-col items-center justify-center py-1 transition-all",
                  isActive
                    ? "font-bold text-slate-600"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <div
                  className={cn(
                    "flex items-center justify-center rounded-full px-3.5 py-1 transition-all",
                    isActive && "bg-surface-container text-slate-600 shadow-xs"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span className="mt-0.5 text-[10px] tracking-tight">
                  {item.name}
                </span>
              </div>
            )

            if (isBuilderItem) {
              return (
                <SheetTrigger key={item.name} asChild>
                  <button
                    type="button"
                    className="flex-1 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none focus-visible:ring-inset"
                    aria-label="Open system builder options"
                  >
                    {content}
                  </button>
                </SheetTrigger>
              )
            }

            return item.href ? (
              <Link key={item.name} href={item.href} className="flex-1">
                {content}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={item.onClick}
                className="flex-1 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none focus-visible:ring-inset"
              >
                {content}
              </button>
            )
          })}
        </div>
      </nav>

      <SheetContent
        side="bottom"
        showCloseButton={false}
        className="rounded-t-2xl border-border px-4 pb-[calc(1rem+env(safe-area-inset-bottom))]"
      >
        <div
          className="mx-auto mt-2 h-1 w-10 rounded-full bg-border"
          aria-hidden="true"
        />
        <SheetHeader className="relative flex-row items-center justify-between px-0 pt-4 pb-3">
          <SheetTitle className="text-base font-bold">
            System Builder
          </SheetTitle>
          <SheetClose asChild>
            <button
              type="button"
              className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
              aria-label="Close system builder options"
            >
              <FaTimes className="size-3.5" />
            </button>
          </SheetClose>
        </SheetHeader>

        <div className="grid grid-cols-2 gap-3">
          <SheetClose asChild>
            <Link
              href="/pc-builder"
              className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-center transition-colors hover:border-primary/40 hover:bg-primary/5 active:bg-primary/10"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <FaDesktop className="size-5" />
              </span>
              <span className="text-sm font-bold">PC Builder</span>
              <span className="text-[11px] text-muted-foreground">
                Build a custom computer
              </span>
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/cc-builder"
              className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-center transition-colors hover:border-primary/40 hover:bg-primary/5 active:bg-primary/10"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <FaVideo className="size-5" />
              </span>
              <span className="text-sm font-bold">CC Builder</span>
              <span className="text-[11px] text-muted-foreground">
                Build a camera system
              </span>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
