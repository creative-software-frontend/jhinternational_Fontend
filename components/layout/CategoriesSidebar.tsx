"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useCallback, useRef, useEffect, useTransition } from "react"
import { FaBars, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { categories, type Category } from "@/lib/data/Categories.data"
import { cn } from "@/lib/utils"

/* ==========================================================================
   ১. CascadingSubMenu (ডেস্কটপ মাল্টি-লেভেল ৩-কলাম ফ্লাইআউট মেনু)
   - কলাম ১ (লেভেল ১): মূল সাব-ক্যাটেগরি (যেমন: Headphone & Headsets)
     * সিলেক্টেড আইটেমে গাঢ় নীল ব্যাকগ্রাউন্ড (bg-primary) ও সাদা টেক্সট
   - কলাম ২ (লেভেল ২): সিলেক্টেড লেভেল ১ এর চাইল্ড আইটেম
   - কলাম ৩ (লেভেল ৩): সিলেক্টেড লেভেল ২ এর চাইল্ড আইটেম
   ========================================================================== */
interface CascadingSubMenuProps {
  category: Category
  onClose?: () => void
}

function CascadingSubMenu({ category, onClose }: CascadingSubMenuProps) {
  const router = useRouter()
  const [, startTransition] = useTransition()

  // কলাম ১ এর প্রথম আইটেম ডিফল্ট অ্যাক্টিভ থাকবে (ইমেজের মতো)
  const [activeL1Id, setActiveL1Id] = useState<string>(
    () => category.children?.[0]?.id ?? ""
  )

  // কলাম ২ এর প্রথম আইটেম যা চিলড্রেন বহন করে তা অ্যাক্টিভ থাকবে
  const [activeL2Id, setActiveL2Id] = useState<string>(() => {
    const firstL1 = category.children?.[0]
    return (
      firstL1?.children?.find((c) => Boolean(c.children?.length))?.id ??
      firstL1?.children?.[0]?.id ??
      ""
    )
  })

  useEffect(() => {
    const firstL1Id = category.children?.[0]?.id ?? ""
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveL1Id(firstL1Id)

    const firstL1 = category.children?.[0]
    const nextL2 =
      firstL1?.children?.find((c) => Boolean(c.children?.length))?.id ??
      firstL1?.children?.[0]?.id ??
      ""
    setActiveL2Id(nextL2)
  }, [category])

  // বর্তমান অ্যাক্টিভ লেভেল ১ অবজেক্ট
  const activeL1 = category.children?.find((c) => c.id === activeL1Id)

  // বর্তমান অ্যাক্টিভ লেভেল ২ অবজেক্ট
  const activeL2 = activeL1?.children?.find((c) => c.id === activeL2Id)

  // লেভেল ১ আইটেম হোভার হ্যান্ডলার
  const handleL1Hover = useCallback((item: Category) => {
    setActiveL1Id(item.id)
    if (item.children && item.children.length > 0) {
      const nextL2 =
        item.children.find((c) => Boolean(c.children?.length))?.id ??
        item.children[0]?.id ??
        ""
      setActiveL2Id(nextL2)
    } else {
      setActiveL2Id("")
    }
  }, [])

  // লেভেল ২ আইটেম হোভার হ্যান্ডলার
  const handleL2Hover = useCallback((item: Category) => {
    setActiveL2Id(item.id)
  }, [])

  // কোনো লিংকে ক্লিক করলে মেনু ক্লোজ করে নেভিগেট করবে
  const handleNavigate = (slug: string) => {
    onClose?.()
    startTransition(() => {
      router.push(`/category/${slug}`)
    })
  }

  const hasL2 = Boolean(activeL1?.children && activeL1.children.length > 0)
  const hasL3 = Boolean(activeL2?.children && activeL2.children.length > 0)

  return (
    <div className="flex flex-row items-stretch overflow-hidden rounded-b-lg border border-border/80 bg-popover text-popover-foreground shadow-2xl">
      {/* ----------------- COLUMN 1 (Level 1) ----------------- */}
      <div className="max-h-[480px] w-56 shrink-0 overflow-y-auto border-r border-border/60 py-1.5">
        {category.children?.map((item) => {
          const isActive = item.id === activeL1Id
          const hasChildren = Boolean(item.children && item.children.length > 0)

          return (
            <div
              key={item.id}
              onMouseEnter={() => handleL1Hover(item)}
              className="relative"
            >
              <Link
                href={`/category/${item.slug}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigate(item.slug)
                }}
                className={cn(
                  "flex items-center justify-between px-4 py-2 text-[13px] transition-colors select-none",
                  isActive
                    ? "bg-primary font-medium text-primary-foreground shadow-xs"
                    : "text-foreground/90 hover:bg-muted/70 hover:text-foreground"
                )}
              >
                <span className="truncate">{item.name}</span>
                {hasChildren && (
                  <FaChevronRight
                    className={cn(
                      "ml-2 shrink-0 text-[10px] transition-transform",
                      isActive
                        ? "text-primary-foreground"
                        : "text-muted-foreground/60"
                    )}
                  />
                )}
              </Link>
            </div>
          )
        })}
      </div>

      {/* ----------------- COLUMN 2 (Level 2) ----------------- */}
      {hasL2 && (
        <div
          className={cn(
            "max-h-[480px] w-52 shrink-0 overflow-y-auto bg-popover py-1.5",
            hasL3 && "border-r border-border/60"
          )}
        >
          {activeL1?.children?.map((item) => {
            const isActive = item.id === activeL2Id
            const hasChildren = Boolean(
              item.children && item.children.length > 0
            )

            return (
              <div
                key={item.id}
                onMouseEnter={() => handleL2Hover(item)}
                className="relative"
              >
                <Link
                  href={`/category/${item.slug}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigate(item.slug)
                  }}
                  className={cn(
                    "flex items-center justify-between px-4 py-2 text-[13px] transition-colors select-none",
                    isActive
                      ? "bg-muted font-medium text-primary"
                      : "text-foreground/90 hover:bg-muted/60 hover:text-foreground"
                  )}
                >
                  <span className="truncate">{item.name}</span>
                  {hasChildren && (
                    <FaChevronRight
                      className={cn(
                        "ml-2 shrink-0 text-[10px]",
                        isActive ? "text-primary" : "text-muted-foreground/60"
                      )}
                    />
                  )}
                </Link>
              </div>
            )
          })}
        </div>
      )}

      {/* ----------------- COLUMN 3 (Level 3) ----------------- */}
      {hasL3 && (
        <div className="max-h-[480px] w-56 shrink-0 overflow-y-auto bg-popover py-1.5">
          {activeL2?.children?.map((item) => {
            const hasChildren = Boolean(
              item.children && item.children.length > 0
            )

            return (
              <div key={item.id} className="relative">
                <Link
                  href={`/category/${item.slug}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigate(item.slug)
                  }}
                  className="flex items-center justify-between px-4 py-2 text-[13px] text-foreground/90 transition-colors select-none hover:bg-muted/60 hover:text-primary"
                >
                  <span className="truncate">{item.name}</span>
                  {hasChildren && (
                    <FaChevronRight className="ml-2 shrink-0 text-[10px] text-muted-foreground/60" />
                  )}
                </Link>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ক্যাটেগরি অনুযায়ী ড্রপডাউনের সঠিক প্রস্থ (Width) গণনা
function getDropdownWidth(category: Category): number {
  if (!category.children || category.children.length === 0) return 0
  let width = 224 // কলাম ১ (w-56)

  // কলাম ২ আছে কিনা চেক
  const hasL2 = category.children.some((c) =>
    Boolean(c.children && c.children.length > 0)
  )
  if (hasL2) {
    width += 208 // কলাম ২ (w-52)

    // কলাম ৩ আছে কিনা চেক
    const hasL3 = category.children.some((c) =>
      c.children?.some((sub) =>
        Boolean(sub.children && sub.children.length > 0)
      )
    )
    if (hasL3) {
      width += 224 // কলাম ৩ (w-56)
    }
  }

  return width
}

/* ==========================================================================
   ২. DesktopCategoryNav (হরাইজন্টাল স্লাইডার বার উইথ লেফট ও রাইট অ্যারো)
   - মেনুগুলো কখনোই ভেঙে নিচে নামবে না (flex-nowrap)
   - লেফট/রাইট অ্যারো বাটনে ক্লিক করে স্মুথলি স্ক্রল করা যায়
   - ড্রপডাউন স্ক্রল কন্টেইনারের বাইরে রেন্ডার হওয়ায় কোনো ক্লিপিং হয় না
   ========================================================================== */
function DesktopCategoryNav() {
  const pathname = usePathname()

  const scrollRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const [activeCategory, setActiveCategory] = useState<Category | null>(null)
  const [hoveredCategoryId, setHoveredCategoryId] = useState<string | null>(
    null
  )
  const [dropdownLeft, setDropdownLeft] = useState<number>(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const clearCloseTimer = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }, [])

  useEffect(() => {
    return () => {
      clearCloseTimer()
    }
  }, [clearCloseTimer])

  // স্ক্রল অ্যারো বাটন ভিজিবিলিটি চেক
  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 6)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 6)
  }, [])

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    if (!el) return

    el.addEventListener("scroll", checkScroll, { passive: true })
    window.addEventListener("resize", checkScroll)

    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [checkScroll])

  // ড্রপডাউন ক্লোজ হ্যান্ডলার
  const handleClose = useCallback(() => {
    clearCloseTimer()
    setActiveCategory(null)
    setHoveredCategoryId(null)
  }, [clearCloseTimer])

  // ক্যাটেগরি আইটেমে মাউস প্রবেশ করলে
  const handleMouseEnterItem = (category: Category) => {
    clearCloseTimer()

    setHoveredCategoryId(category.id)

    if (!category.children || category.children.length === 0) {
      setActiveCategory(null)
      return
    }

    const itemEl = itemRefs.current[category.id]
    const contEl = containerRef.current

    if (itemEl && contEl) {
      const itemRect = itemEl.getBoundingClientRect()
      const contRect = contEl.getBoundingClientRect()

      const actualWidth = getDropdownWidth(category)
      const itemLeft = itemRect.left - contRect.left
      const itemRight = itemRect.right - contRect.left

      // চেক করা যে বাটনটির বাম প্রান্ত থেকে ড্রপডাউন ডানে খুললে স্ক্রিনের ভেতরে সুন্দরভাবে ফিট হয় কি না
      const screenRightRemaining = window.innerWidth - itemRect.left

      let leftPos: number

      if (screenRightRemaining >= actualWidth + 16) {
        // ডানে পর্যাপ্ত জায়গা আছে -> বাটনটির বাম প্রান্তের সোজাসুজি ড্রপডাউন ওপেন হবে
        leftPos = itemLeft
      } else {
        // ডানে জায়গা কম (যেমন: Cameras বা Gadgets) -> বাটনটির ডান প্রান্তের সোজাসুজি ড্রপডাউন অ্যালাইন হবে
        leftPos = itemRight - actualWidth

        // যদি স্ক্রিনের বাম প্রান্তের বাইরে যাওয়ার ঝুঁকি থাকে
        const minAllowedLeft = -contRect.left + 16
        if (leftPos < minAllowedLeft) {
          leftPos = minAllowedLeft
        }
      }

      setDropdownLeft(Math.round(leftPos))
    }

    setActiveCategory(category)
  }

  // ক্যাটেগরি আইটেম থেকে মাউস সরে গেলে
  const handleMouseLeaveItem = () => {
    clearCloseTimer()
    closeTimeoutRef.current = setTimeout(() => {
      setActiveCategory(null)
      setHoveredCategoryId(null)
    }, 120)
  }

  // ড্রপডাউনে মাউস প্রবেশ করলে বন্ধ হওয়া থামাবে
  const handleDropdownMouseEnter = () => {
    clearCloseTimer()
  }

  // ড্রপডাউন থেকে মাউস বের হলে
  const handleDropdownMouseLeave = () => {
    clearCloseTimer()
    closeTimeoutRef.current = setTimeout(() => {
      setActiveCategory(null)
      setHoveredCategoryId(null)
    }, 120)
  }

  // বামে স্ক্রল করার ফাংশন
  const scrollLeftAction = () => {
    if (!scrollRef.current) return
    handleClose()
    scrollRef.current.scrollBy({ left: -260, behavior: "smooth" })
  }

  // ডানে স্ক্রল করার ফাংশন
  const scrollRightAction = () => {
    if (!scrollRef.current) return
    handleClose()
    scrollRef.current.scrollBy({ left: 260, behavior: "smooth" })
  }

  return (
    <div
      key={pathname}
      ref={containerRef}
      className="relative flex w-full min-w-0 items-center"
    >
      {/* বাম পাশের স্ক্রল অ্যারো বাটন */}
      {/* {canScrollLeft && (
        <div className="absolute left-0 z-30 flex items-center bg-linear-to-r from-card via-card/90 to-transparent pr-6">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={scrollLeftAction}
            aria-label="Scroll left categories"
            className="size-7 cursor-pointer rounded-full border border-border/80 bg-background/95 shadow-md transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <FaChevronLeft className="size-3" />
          </Button>
        </div>
      )} */}

      {/* হরাইজন্টাল স্ক্রলযোগ্য ক্যাটেগরি লিস্ট (এক লাইনে থাকবে, ভাঙবে না) */}
      <div
        ref={scrollRef}
        className="flex w-full [scrollbar-width:none] items-center gap-0.5 overflow-x-auto scroll-smooth px-1 py-1 whitespace-nowrap [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((category) => {
          const isHovered = hoveredCategoryId === category.id
          const isOpen = activeCategory?.id === category.id

          return (
            <div
              key={category.id}
              ref={(el) => {
                itemRefs.current[category.id] = el
              }}
              onMouseEnter={() => handleMouseEnterItem(category)}
              onMouseLeave={handleMouseLeaveItem}
              className="relative shrink-0"
            >
              <Link
                href={`/category/${category.slug}`}
                onClick={handleClose}
                className={cn(
                  "relative flex items-center rounded-md px-3.5 py-2.5 text-xs font-semibold text-inverse-on-surface/90",
                  "transition-colors duration-150 select-none",
                  "hover:bg-primary/20 hover:text-inverse-on-surface",
                  "focus-visible:ring-2 focus-visible:ring-inverse-primary focus-visible:ring-offset-2 focus-visible:ring-offset-inverse-surface focus-visible:outline-none",
                  "xl:text-[13px]",
                  isHovered && "bg-primary/10",
                  isOpen && "bg-primary/15 font-bold text-inverse-on-surface"
                )}
              >
                {/* অ্যাক্টিভ ইন্ডিকেটর বার (রেফারেন্স ইমেজের মতো নীল টপ বার) */}
                {isOpen && (
                  <span
                    className="absolute inset-x-0 -top-[5px] h-[3px] animate-in rounded-t-sm bg-primary duration-150 fade-in-50"
                    aria-hidden="true"
                  />
                )}
                <span>{category.name}</span>
              </Link>
            </div>
          )
        })}
      </div>

      {/* ডান পাশের স্ক্রল অ্যারো বাটন */}
      {/* {canScrollRight && (
        <div className="absolute right-0 z-30 flex items-center bg-linear-to-l from-card via-card/90 to-transparent pl-6">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={scrollRightAction}
            aria-label="Scroll right categories"
            className="size-7 cursor-pointer rounded-full border border-border/80 bg-background/95 shadow-md transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <FaChevronRight className="size-3" />
          </Button>
        </div>
      )} */}

      {/* ড্রপডাউন মেনু (স্ক্রল কন্টেইনারের বাইরে থাকায় কোনো ক্লিপিং হয় না) */}
      {activeCategory &&
        activeCategory.children &&
        activeCategory.children.length > 0 && (
          <div
            style={{ left: `${dropdownLeft}px` }}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
            className="absolute top-full z-50 animate-in pt-0 duration-150 fade-in-50 zoom-in-95"
          >
            <CascadingSubMenu category={activeCategory} onClose={handleClose} />
          </div>
        )}
    </div>
  )
}

/* ==========================================================================
   ৩. MobileCategoryLinks (মোবাইল ড্রয়ারের জন্য একর্ডিয়ন ভিউ)
   ========================================================================== */
function MobileCategoryLinks({
  items,
  onClose,
}: {
  items: Category[]
  onClose: () => void
}) {
  return (
    <Accordion
      type="multiple"
      className="w-full overflow-visible rounded-none border-0"
    >
      {items.map((category) => {
        const Icon = category.icon
        const hasChildren = Boolean(
          category.children && category.children.length > 0
        )

        if (!hasChildren) {
          return (
            <div
              key={category.id}
              className="flex min-h-10 items-center border-b border-border last:border-b-0"
            >
              <SheetClose asChild>
                <Link
                  href={`/category/${category.slug}`}
                  onClick={onClose}
                  className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2.5 text-xs font-medium text-foreground no-underline transition-colors hover:bg-muted hover:text-primary"
                >
                  <Icon className="size-4 shrink-0 text-muted-foreground" />
                  <span className="truncate">{category.name}</span>
                </Link>
              </SheetClose>
            </div>
          )
        }

        return (
          <AccordionItem
            key={category.id}
            value={category.id}
            className="border-0 border-b border-border last:border-b-0 data-open:bg-transparent"
          >
            <div className="mr-3 flex min-h-10 items-center">
              <SheetClose asChild>
                <Link
                  href={`/category/${category.slug}`}
                  onClick={onClose}
                  className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  <Icon className="size-4 shrink-0 text-muted-foreground" />
                  <span className="truncate">{category.name}</span>
                </Link>
              </SheetClose>
              <AccordionTrigger
                aria-label={`Expand ${category.name}`}
                className="w-9 shrink-0 justify-center gap-0 px-0 py-2 hover:no-underline"
              />
            </div>
            <AccordionContent className="px-0 pb-0 pl-3">
              <MobileCategoryLinks
                items={category.children ?? []}
                onClose={onClose}
              />
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

/* ==========================================================================
   ৪. MobileCategoryNav (মোবাইল ড্রয়ার কম্পোনেন্ট)
   ========================================================================== */
function MobileCategoryNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="gap-2 border-primary/20 text-xs font-semibold text-foreground hover:text-primary"
        >
          <FaBars className="size-3.5 text-primary" aria-hidden="true" />
          <span>All Categories</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        showCloseButton={false}
        className="h-dvh max-h-dvh w-[min(88vw,21rem)] max-w-none gap-0 rounded-none border-none bg-background p-0"
      >
        <SheetHeader className="flex-row items-center justify-between gap-2 rounded-t-none bg-primary px-4 py-3 text-primary-foreground">
          <div className="flex min-w-0 items-center gap-2.5">
            <FaBars aria-hidden="true" />
            <SheetTitle className="truncate text-sm font-bold text-primary-foreground">
              All Categories
            </SheetTitle>
          </div>
          <SheetClose asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              aria-label="Close categories"
              className="text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground"
            >
              <FaTimes />
            </Button>
          </SheetClose>
        </SheetHeader>
        <nav
          aria-label="Product categories"
          className="min-h-0 flex-1 overflow-y-auto bg-background px-1 py-1"
        >
          <MobileCategoryLinks
            items={categories}
            onClose={() => setIsOpen(false)}
          />
        </nav>
      </SheetContent>
    </Sheet>
  )
}

/* ==========================================================================
   ৫. CategoriesSidebar (মেইন এক্সপোর্ট)
   - ডেস্কটপে: স্মুথ হরাইজন্টাল স্লাইডার উইথ লেফট ও রাইট অ্যারো + ক্যাসকেডিং ৩-লেভেল মেনু
   - মোবাইলে: রেসপনসিভ ক্যাটেগরি ড্রয়ার
   ========================================================================== */
export default function CategoriesSidebar() {
  return (
    <>
      {/* Desktop view */}
      <div className="hidden w-full min-w-0 items-center md:flex">
        <DesktopCategoryNav />
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        <MobileCategoryNav />
      </div>
    </>
  )
}
