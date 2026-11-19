type SocialLinkKey = "facebook" | "youtube" | "instagram" | "linkedin"

interface SocialLink {
  key: SocialLinkKey
  label: string
  href: string
}

interface LegalLink {
  label: string
  href: string
}

interface StoreLocation {
  id: string
  name: string
  placeId: string
  address: string
  phone: string
  hours: string
  area: string
  image: string
  features: readonly string[]
}

interface SiteConfig {
  name: string
  shortName: string
  legalName: string
  url: string
  contact: {
    phones: readonly string[]
    hotlineShort: string
    email: string
    careersEmail: string
    privacyEmail: string
    hours: string
    address: {
      line1: string
      line2: string
      full: string
      store: string
    }
  }
  socialLinks: readonly SocialLink[]
  legal: {
    privacy: LegalLink
    terms: LegalLink
  }
  currency: {
    code: string
    symbol: string
    locale: string
  }
  shipping: {
    freeShippingThreshold: number
    insideDhaka: number
    outsideDhaka: number
  }
  storageKeyPrefix: string
  stores: readonly StoreLocation[]
}

export const SITE_CONFIG = {
  name: "JH International",
  shortName: "JH International",
  legalName: "JH International",
  url: "https://jhinternationalbd.com.",
  contact: {
    phones: ["01711976179", "01758714353"],
    hotlineShort: "01711976179",
    email: "jhinternational786@gmail.com",
    careersEmail: "careers@jhinternational786.com.bd",
    privacyEmail: "privacy@jhinternational786.com.bd",
    hours: "Sat -Thu : 9 :00  AM - 8: 00 PM",
    address: {
      line1: "51,51/A Resourceful Paltan City (Ground Floor)",
      line2: "Purana Paltan, Dhaka-1000",
      full: "51,51/A Resourceful Paltan City (Ground Floor), Purana Paltan, Dhaka-1000",
      store:
        "Shop No-16, 51, 51/A, Resourceful Paltan City, Purana Paltan, Dhaka 1000, Bangladesh",
    },
  },
  socialLinks: [
    { key: "facebook", label: "Facebook", href: "#" },
    { key: "youtube", label: "YouTube", href: "#" },
    { key: "instagram", label: "Instagram", href: "#" },
    { key: "linkedin", label: "LinkedIn", href: "#" },
  ],
  legal: {
    privacy: { label: "Privacy Policy", href: "/privacy" },
    terms: { label: "Terms & Conditions", href: "/terms" },
  },
  currency: {
    code: "BDT",
    symbol: "৳",
    locale: "EN",
  },
  shipping: {
    freeShippingThreshold: 2000,
    insideDhaka: 79,
    outsideDhaka: 119,
  },
  storageKeyPrefix: "jhinternational",
  stores: [
    {
      id: "multiplan",
      name: "JH International",
      placeId: "ChIJc-zbise4VTcRA3uOHA_suRI",
      address:
        "Shop No-16, 51, 51/A, Resourceful Paltan City, Purana Paltan, Dhaka 1000, Bangladesh",
      phone: "01711976179",
      hours: "Sat -Thu : 9 :00  AM - 8: 00 PM",
      area: "Resourceful Paltan City",
      image: "/latest-products/zotac-rtx-5060-amp.webp",
      features: [
        "Flagship Showroom",
        "PC Building & Testing",
        "Official Warranty Point",
      ],
    },
  ],
} as const satisfies SiteConfig
