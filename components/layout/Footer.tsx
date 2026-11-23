import { SITE_CONFIG } from "@/lib/config/site.config"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAndroid,
} from "react-icons/fa"
import Image from "next/image"
import LogoImage from "@/public/images/logo.png"

const socialIcons = {
  facebook: FaFacebookF,
  youtube: FaYoutube,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
}

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-foreground pt-12 pb-8 text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter & Experience Banner */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-surface-container p-6 sm:p-8 lg:flex-row">
          <div className="max-w-lg">
            <h3 className="font-heading text-sm font-bold tracking-tight sm:text-base">
              Stay Updated with Latest Tech Drops &amp; Deals
            </h3>
            <p className="mt-1 text-sm">
              Subscribe to our weekly newsletter for exclusive discounts on RTX
              40-series cards, prebuilts, and flash sales.f
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="placeholder min-w-70 rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <Button className="bg-primary px-6 py-2.5 font-bold text-primary-foreground hover:bg-primary/90">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="border-b border-border pb-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Col 1: About & Hotline */}
            <div className="flex flex-col gap-4 lg:col-span-1">
              <Link href="/" className="flex flex-col">
                <Image src={LogoImage} alt="Logo" width={200} height={200} />
              </Link>
              <p className="text-xs leading-relaxed text-background">
                Bangladesh&apos;s premier retail destination for high-end gaming
                Devices and Computer Accessories.
              </p>
              <div className="flex flex-col gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="shrink-0 text-primary" />
                  <span>
                    Hotline:{" "}
                    <strong className="text-background">
                      {SITE_CONFIG.contact.phones.join(",")}
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="shrink-0 text-primary" />
                  <span>Support: {SITE_CONFIG.contact.email}</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="mt-0.5 shrink-0 text-primary" />
                  <span>{SITE_CONFIG.contact.address.full}</span>
                </div>
              </div>
            </div>

            {/* Col 2: Useful Links */}
            <div>
              <h4 className="mb-4 font-heading text-sm font-bold tracking-wider uppercase">
                Useful Links
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs">
                <li>
                  <Link
                    href="/about"
                    className="transition-colors hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="transition-colors hover:text-primary"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/career"
                    className="transition-colors hover:text-primary"
                  >
                    Career Opportunities
                  </Link>
                </li>
                <li>
                  <Link
                    href={SITE_CONFIG.legal.privacy.href}
                    className="transition-colors hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href={SITE_CONFIG.legal.terms.href}
                    className="transition-colors hover:text-primary"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="transition-colors hover:text-primary"
                  >
                    Tech Blog &amp; Reviews
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Hardware Categories */}
            <div>
              <h4 className="mb-4 font-heading text-sm font-bold tracking-wider uppercase">
                Top Categories
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs">
                <li>
                  <Link
                    href="/category/processors"
                    className="transition-colors hover:text-primary"
                  >
                    Desktop Processors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/graphics-cards"
                    className="transition-colors hover:text-primary"
                  >
                    Graphics Cards (GPU)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/motherboards"
                    className="transition-colors hover:text-primary"
                  >
                    Motherboards
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/ram"
                    className="transition-colors hover:text-primary"
                  >
                    RAM &amp; Memory
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/laptops"
                    className="transition-colors hover:text-primary"
                  >
                    Gaming Laptops
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/monitors"
                    className="transition-colors hover:text-primary"
                  >
                    OLED &amp; IPS Monitors
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Customer Services */}
            <div>
              <h4 className="mb-4 font-heading text-sm font-bold tracking-wider uppercase">
                Customer Service
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs">
                <li>
                  <Link
                    href="/track-order"
                    className="transition-colors hover:text-primary"
                  >
                    Track Your Order
                  </Link>
                </li>
                <li>
                  <Link
                    href="/emi-policy"
                    className="transition-colors hover:text-primary"
                  >
                    0% EMI Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/warranty"
                    className="transition-colors hover:text-primary"
                  >
                    Warranty Claim Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="transition-colors hover:text-primary"
                  >
                    Returns &amp; Refunds
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stores"
                    className="transition-colors hover:text-primary"
                  >
                    Store Locator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="transition-colors hover:text-primary"
                  >
                    Frequently Asked Questions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 5: Stay Connected & Download App */}
            <div className="flex flex-col gap-4">
              <h4 className="font-heading text-sm font-bold tracking-wider uppercase">
                Stay Connected
              </h4>
              <div className="flex items-center gap-2">
                {SITE_CONFIG.socialLinks.map((social) => {
                  const Icon = socialIcons[social.key]
                  return (
                    <a
                      key={social.key}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-lg transition-all hover:bg-primary hover:text-primary-foreground"
                    >
                      <Icon className="text-sm" />
                    </a>
                  )
                })}
              </div>

              <h4 className="mt-2 font-heading text-sm font-bold tracking-wider uppercase">
                Experience {SITE_CONFIG.name} App
              </h4>
              <div className="flex flex-col gap-2">
                <div className="flex cursor-pointer items-center gap-3 rounded-lg border border-border p-2 transition-colors hover:bg-primary">
                  <FaAndroid />
                  <div>
                    <span className="block text-[10px] leading-none uppercase">
                      Download on
                    </span>
                    <span className="text-xs font-bold">Google Play Store</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* payment method */}
          <div className="flex w-fit items-center gap-3 place-self-center text-xs">
            <span className="font-semibold">Accepted Payments:</span>
            <span className="rounded bg-surface-container px-2.5 py-1 text-xs font-semibold text-foreground">
              bKash
            </span>
            <span className="rounded bg-surface-container px-2.5 py-1 text-xs font-semibold text-foreground">
              Nagad
            </span>
            <span className="rounded bg-surface-container px-2.5 py-1 text-xs font-semibold text-foreground">
              Visa
            </span>
            <span className="rounded bg-surface-container px-2.5 py-1 text-xs font-semibold text-foreground">
              Mastercard
            </span>
            <span className="rounded bg-surface-container px-2.5 py-1 text-xs font-semibold text-foreground">
              SSLCommerz
            </span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Partners */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs md:flex-row">
          <p className="text-background">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.legalName}. All
            rights reserved.
          </p>
          <a href="https://zerodegree.com.bd/">Developed By Zero Degree</a>
        </div>
      </div>
    </footer>
  )
}
