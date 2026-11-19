import {
  FaLaptop,
  FaDesktop,
  FaGamepad,
  FaMicrochip,
  FaHdd,
  FaTv,
  FaHeadphones,
  FaKeyboard,
  FaBolt,
  FaMemory,
  FaMobileAlt,
  FaWifi,
  FaPrint,
  FaCamera,
} from "react-icons/fa"
import type { IconType } from "react-icons"

export interface Category {
  id: string
  name: string
  slug: string
  icon: IconType
  productCount?: number
  image?: string
  children?: Category[]
}

export const categories: Category[] = [
  {
    id: "laptops",
    name: "Laptop",
    icon: FaLaptop,
    slug: "laptops",
    productCount: 412,
    image: "/products/macbook-air-m5.webp",
    children: [
      {
        id: "laptops-gaming",
        name: "Gaming Laptops",
        icon: FaLaptop,
        slug: "gaming",
        children: [
          {
            id: "laptops-gaming-brand",
            name: "By Brand",
            icon: FaLaptop,
            slug: "brand",
            children: [
              {
                id: "laptops-gaming-brand-asus",
                name: "ASUS ROG",
                icon: FaLaptop,
                slug: "asus-rog",
              },
              {
                id: "laptops-gaming-brand-msi",
                name: "MSI",
                icon: FaLaptop,
                slug: "msi",
              },
              {
                id: "laptops-gaming-brand-lenovo",
                name: "Lenovo Legion",
                icon: FaLaptop,
                slug: "lenovo-legion",
              },
            ],
          },
          {
            id: "laptops-gaming-processor",
            name: "By Processor",
            icon: FaLaptop,
            slug: "processor",
            children: [
              {
                id: "laptops-gaming-processor-intel",
                name: "Intel",
                icon: FaLaptop,
                slug: "intel",
              },
              {
                id: "laptops-gaming-processor-amd",
                name: "AMD",
                icon: FaLaptop,
                slug: "amd",
              },
            ],
          },
        ],
      },
      {
        id: "laptops-business",
        name: "Business Laptops",
        icon: FaLaptop,
        slug: "business",
        children: [
          {
            id: "laptops-business-thinkpad",
            name: "Lenovo ThinkPad",
            icon: FaLaptop,
            slug: "thinkpad",
          },
          {
            id: "laptops-business-elitebook",
            name: "HP EliteBook",
            icon: FaLaptop,
            slug: "elitebook",
          },
          {
            id: "laptops-business-latitude",
            name: "Dell Latitude",
            icon: FaLaptop,
            slug: "latitude",
          },
        ],
      },
      {
        id: "laptops-ultrabooks",
        name: "Ultrabooks",
        icon: FaLaptop,
        slug: "ultrabooks",
        children: [
          {
            id: "laptops-ultrabooks-macbook",
            name: "Apple MacBook",
            icon: FaLaptop,
            slug: "macbook",
          },
          {
            id: "laptops-ultrabooks-xps",
            name: "Dell XPS",
            icon: FaLaptop,
            slug: "xps",
          },
          {
            id: "laptops-ultrabooks-lg-gram",
            name: "LG Gram",
            icon: FaLaptop,
            slug: "lg-gram",
          },
        ],
      },
      {
        id: "laptops-2-in-1",
        name: "2-in-1 Convertibles",
        icon: FaLaptop,
        slug: "2-in-1",
        children: [
          {
            id: "laptops-2-in-1-hp-x360",
            name: "HP x360",
            icon: FaLaptop,
            slug: "hp-x360",
          },
          {
            id: "laptops-2-in-1-yoga",
            name: "Lenovo Yoga",
            icon: FaLaptop,
            slug: "lenovo-yoga",
          },
        ],
      },
    ],
  },
  {
    id: "desktop-pc",
    name: "Desktop",
    icon: FaDesktop,
    slug: "desktop-pc",
    productCount: 168,
    children: [
      {
        id: "desktop-pc-gaming",
        name: "Gaming PCs",
        icon: FaDesktop,
        slug: "gaming",
        children: [
          {
            id: "desktop-pc-gaming-ready",
            name: "Ready-to-Ship",
            icon: FaDesktop,
            slug: "ready-to-ship",
            children: [
              {
                id: "desktop-pc-gaming-ready-intel",
                name: "Intel Builds",
                icon: FaDesktop,
                slug: "intel",
              },
              {
                id: "desktop-pc-gaming-ready-amd",
                name: "AMD Builds",
                icon: FaDesktop,
                slug: "amd",
              },
            ],
          },
          {
            id: "desktop-pc-gaming-custom",
            name: "Custom Build",
            icon: FaDesktop,
            slug: "custom",
          },
        ],
      },
      {
        id: "desktop-pc-office",
        name: "Office PCs",
        icon: FaDesktop,
        slug: "office",
        children: [
          {
            id: "desktop-pc-office-mini",
            name: "Mini PCs",
            icon: FaDesktop,
            slug: "mini",
          },
          {
            id: "desktop-pc-office-tower",
            name: "Tower PCs",
            icon: FaDesktop,
            slug: "tower",
          },
        ],
      },
      {
        id: "desktop-pc-all-in-one",
        name: "All-in-One PCs",
        icon: FaDesktop,
        slug: "all-in-one",
        children: [
          {
            id: "desktop-pc-all-in-one-imac",
            name: "Apple iMac",
            icon: FaDesktop,
            slug: "imac",
          },
          {
            id: "desktop-pc-all-in-one-windows",
            name: "Windows AIO",
            icon: FaDesktop,
            slug: "windows",
          },
        ],
      },
    ],
  },
  {
    id: "gaming-console",
    name: "Gaming Console",
    icon: FaGamepad,
    slug: "gaming-console",
    productCount: 54,
    children: [
      {
        id: "gaming-console-playstation",
        name: "PlayStation",
        icon: FaGamepad,
        slug: "playstation",
        children: [
          {
            id: "gaming-console-playstation-ps5",
            name: "PS5",
            icon: FaGamepad,
            slug: "ps5",
          },
          {
            id: "gaming-console-playstation-ps4",
            name: "PS4",
            icon: FaGamepad,
            slug: "ps4",
          },
        ],
      },
      {
        id: "gaming-console-xbox",
        name: "Xbox",
        icon: FaGamepad,
        slug: "xbox",
        children: [
          {
            id: "gaming-console-xbox-series-x",
            name: "Series X",
            icon: FaGamepad,
            slug: "series-x",
          },
          {
            id: "gaming-console-xbox-series-s",
            name: "Series S",
            icon: FaGamepad,
            slug: "series-s",
          },
        ],
      },
      {
        id: "gaming-console-nintendo",
        name: "Nintendo",
        icon: FaGamepad,
        slug: "nintendo",
        children: [
          {
            id: "gaming-console-nintendo-switch-oled",
            name: "Switch OLED",
            icon: FaGamepad,
            slug: "switch-oled",
          },
          {
            id: "gaming-console-nintendo-switch-lite",
            name: "Switch Lite",
            icon: FaGamepad,
            slug: "switch-lite",
          },
        ],
      },
      {
        id: "gaming-console-handheld",
        name: "Handheld Consoles",
        icon: FaGamepad,
        slug: "handheld",
        children: [
          {
            id: "gaming-console-handheld-steam-deck",
            name: "Steam Deck",
            icon: FaGamepad,
            slug: "steam-deck",
          },
          {
            id: "gaming-console-handheld-rog-ally",
            name: "ROG Ally",
            icon: FaGamepad,
            slug: "rog-ally",
          },
        ],
      },
    ],
  },
  {
    id: "computer-components",
    name: "Components",
    icon: FaMicrochip,
    slug: "computer-components",
    productCount: 921,
    image: "/products/zotac-rtx-5060-amp.webp",
    children: [
      {
        id: "computer-components-processors",
        name: "Processors",
        icon: FaMicrochip,
        slug: "processors",
        children: [
          {
            id: "computer-components-processors-intel",
            name: "Intel",
            icon: FaMicrochip,
            slug: "intel",
            children: [
              {
                id: "computer-components-processors-intel-i9",
                name: "Core i9",
                icon: FaMicrochip,
                slug: "core-i9",
              },
              {
                id: "computer-components-processors-intel-i7",
                name: "Core i7",
                icon: FaMicrochip,
                slug: "core-i7",
              },
              {
                id: "computer-components-processors-intel-i5",
                name: "Core i5",
                icon: FaMicrochip,
                slug: "core-i5",
              },
            ],
          },
          {
            id: "computer-components-processors-amd",
            name: "AMD",
            icon: FaMicrochip,
            slug: "amd",
            children: [
              {
                id: "computer-components-processors-amd-ryzen9",
                name: "Ryzen 9",
                icon: FaMicrochip,
                slug: "ryzen-9",
              },
              {
                id: "computer-components-processors-amd-ryzen7",
                name: "Ryzen 7",
                icon: FaMicrochip,
                slug: "ryzen-7",
              },
              {
                id: "computer-components-processors-amd-ryzen5",
                name: "Ryzen 5",
                icon: FaMicrochip,
                slug: "ryzen-5",
              },
            ],
          },
        ],
      },
      {
        id: "computer-components-motherboards",
        name: "Motherboards",
        icon: FaMicrochip,
        slug: "motherboards",
        children: [
          {
            id: "computer-components-motherboards-intel",
            name: "Intel Chipsets",
            icon: FaMicrochip,
            slug: "intel",
          },
          {
            id: "computer-components-motherboards-amd",
            name: "AMD Chipsets",
            icon: FaMicrochip,
            slug: "amd",
          },
        ],
      },
      {
        id: "computer-components-graphics-cards",
        name: "Graphics Cards",
        icon: FaMicrochip,
        slug: "graphics-cards",
        children: [
          {
            id: "computer-components-graphics-cards-nvidia",
            name: "NVIDIA",
            icon: FaMicrochip,
            slug: "nvidia",
            children: [
              {
                id: "computer-components-graphics-cards-nvidia-rtx40",
                name: "RTX 40 Series",
                icon: FaMicrochip,
                slug: "rtx-40",
              },
              {
                id: "computer-components-graphics-cards-nvidia-rtx30",
                name: "RTX 30 Series",
                icon: FaMicrochip,
                slug: "rtx-30",
              },
            ],
          },
          {
            id: "computer-components-graphics-cards-amd",
            name: "AMD Radeon",
            icon: FaMicrochip,
            slug: "amd",
            children: [
              {
                id: "computer-components-graphics-cards-amd-rx7000",
                name: "RX 7000 Series",
                icon: FaMicrochip,
                slug: "rx-7000",
              },
              {
                id: "computer-components-graphics-cards-amd-rx6000",
                name: "RX 6000 Series",
                icon: FaMicrochip,
                slug: "rx-6000",
              },
            ],
          },
        ],
      },
      {
        id: "computer-components-ram",
        name: "Memory (RAM)",
        icon: FaMicrochip,
        slug: "ram",
        children: [
          {
            id: "computer-components-ram-ddr5",
            name: "DDR5",
            icon: FaMicrochip,
            slug: "ddr5",
          },
          {
            id: "computer-components-ram-ddr4",
            name: "DDR4",
            icon: FaMicrochip,
            slug: "ddr4",
          },
        ],
      },
      {
        id: "computer-components-power-supplies",
        name: "Power Supplies",
        icon: FaMicrochip,
        slug: "power-supplies",
        children: [
          {
            id: "computer-components-power-supplies-modular",
            name: "Modular",
            icon: FaMicrochip,
            slug: "modular",
          },
          {
            id: "computer-components-power-supplies-non-modular",
            name: "Non-Modular",
            icon: FaMicrochip,
            slug: "non-modular",
          },
        ],
      },
      {
        id: "computer-components-casing-cooling",
        name: "Casing & Cooling",
        icon: FaMicrochip,
        slug: "casing-cooling",
        children: [
          {
            id: "computer-components-casing-cooling-cases",
            name: "PC Cases",
            icon: FaMicrochip,
            slug: "cases",
          },
          {
            id: "computer-components-casing-cooling-cpu-coolers",
            name: "CPU Coolers",
            icon: FaMicrochip,
            slug: "cpu-coolers",
          },
          {
            id: "computer-components-casing-cooling-fans",
            name: "Case Fans",
            icon: FaMicrochip,
            slug: "case-fans",
          },
        ],
      },
    ],
  },
  {
    id: "storage-devices",
    name: "Storage Devices",
    icon: FaHdd,
    slug: "storage-devices",
    productCount: 388,
    image: "/products/silicon-power-us75-1tb.webp",
    children: [
      {
        id: "storage-devices-ssd",
        name: "SSD",
        icon: FaHdd,
        slug: "ssd",
        children: [
          {
            id: "storage-devices-ssd-nvme",
            name: "NVMe",
            icon: FaHdd,
            slug: "nvme",
          },
          {
            id: "storage-devices-ssd-sata",
            name: "SATA",
            icon: FaHdd,
            slug: "sata",
          },
        ],
      },
      {
        id: "storage-devices-hdd",
        name: "HDD",
        icon: FaHdd,
        slug: "hdd",
        children: [
          {
            id: "storage-devices-hdd-internal",
            name: "Internal",
            icon: FaHdd,
            slug: "internal",
          },
          {
            id: "storage-devices-hdd-external",
            name: "External",
            icon: FaHdd,
            slug: "external",
          },
        ],
      },
      {
        id: "storage-devices-external",
        name: "External Drives",
        icon: FaHdd,
        slug: "external",
        children: [
          {
            id: "storage-devices-external-portable-ssd",
            name: "Portable SSD",
            icon: FaHdd,
            slug: "portable-ssd",
          },
          {
            id: "storage-devices-external-portable-hdd",
            name: "Portable HDD",
            icon: FaHdd,
            slug: "portable-hdd",
          },
        ],
      },
      {
        id: "storage-devices-memory-cards",
        name: "Memory Cards",
        icon: FaHdd,
        slug: "memory-cards",
        children: [
          {
            id: "storage-devices-memory-cards-microsd",
            name: "microSD",
            icon: FaHdd,
            slug: "microsd",
          },
          {
            id: "storage-devices-memory-cards-sd",
            name: "SD",
            icon: FaHdd,
            slug: "sd",
          },
        ],
      },
      {
        id: "storage-devices-flash-drives",
        name: "Flash Drives",
        icon: FaHdd,
        slug: "flash-drives",
        children: [
          {
            id: "storage-devices-flash-drives-usb3",
            name: "USB 3.0",
            icon: FaHdd,
            slug: "usb-3",
          },
          {
            id: "storage-devices-flash-drives-usbc",
            name: "USB-C",
            icon: FaHdd,
            slug: "usb-c",
          },
        ],
      },
    ],
  },
  {
    id: "monitors",
    name: "Monitor",
    icon: FaTv,
    slug: "monitors",
    productCount: 297,
    image: "/products/gigabyte-gs27qa.webp",
    children: [
      {
        id: "monitors-brand",
        name: "Shop by Brand",
        icon: FaTv,
        slug: "brand",
        children: [
          {
            id: "monitors-brand-gigabyte",
            name: "Gigabyte",
            icon: FaTv,
            slug: "gigabyte",
          },
          {
            id: "monitors-brand-dell",
            name: "Dell",
            icon: FaTv,
            slug: "dell",
          },
          {
            id: "monitors-brand-hp",
            name: "HP",
            icon: FaTv,
            slug: "hp",
          },
          {
            id: "monitors-brand-lenovo",
            name: "Lenovo",
            icon: FaTv,
            slug: "lenovo",
          },
          {
            id: "monitors-brand-value-top",
            name: "Value-Top",
            icon: FaTv,
            slug: "value-top",
          },
          {
            id: "monitors-brand-walton",
            name: "Walton",
            icon: FaTv,
            slug: "walton",
          },
        ],
      },
      {
        id: "monitors-gaming",
        name: "Gaming Monitors",
        icon: FaTv,
        slug: "gaming",
        children: [
          {
            id: "monitors-gaming-144hz",
            name: "144Hz",
            icon: FaTv,
            slug: "144hz",
          },
          {
            id: "monitors-gaming-240hz",
            name: "240Hz+",
            icon: FaTv,
            slug: "240hz-plus",
          },
        ],
      },
      {
        id: "monitors-office",
        name: "Office Monitors",
        icon: FaTv,
        slug: "office",
        children: [
          {
            id: "monitors-office-24",
            name: "24-inch",
            icon: FaTv,
            slug: "24-inch",
          },
          {
            id: "monitors-office-27",
            name: "27-inch",
            icon: FaTv,
            slug: "27-inch",
          },
        ],
      },
      {
        id: "monitors-curved",
        name: "Curved Monitors",
        icon: FaTv,
        slug: "curved",
        children: [
          {
            id: "monitors-curved-ultrawide",
            name: "Ultrawide",
            icon: FaTv,
            slug: "ultrawide",
          },
          {
            id: "monitors-curved-standard",
            name: "Standard",
            icon: FaTv,
            slug: "standard",
          },
        ],
      },
      {
        id: "monitors-4k-ultrawide",
        name: "4K & Ultrawide",
        icon: FaTv,
        slug: "4k-ultrawide",
        children: [
          {
            id: "monitors-4k-ultrawide-4k",
            name: "4K UHD",
            icon: FaTv,
            slug: "4k-uhd",
          },
          {
            id: "monitors-4k-ultrawide-qhd",
            name: "QHD",
            icon: FaTv,
            slug: "qhd",
          },
        ],
      },
    ],
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: FaKeyboard,
    slug: "accessories",
    productCount: 850,
    children: [
      {
        id: "accessories-headphone-headsets",
        name: "Headphone & Headsets",
        icon: FaHeadphones,
        slug: "headphone-headsets",
        children: [
          {
            id: "accessories-headphones",
            name: "Headphones",
            icon: FaHeadphones,
            slug: "headphones",
            children: [
              {
                id: "accessories-cable",
                name: "Cable",
                icon: FaBolt,
                slug: "cable",
              },
              {
                id: "accessories-converter",
                name: "Converter",
                icon: FaBolt,
                slug: "converter",
              },
              {
                id: "accessories-combo",
                name: "Accessories Combo",
                icon: FaBolt,
                slug: "accessories-combo",
              },
              {
                id: "accessories-bt-receiver",
                name: "Bluetooth Receiver",
                icon: FaBolt,
                slug: "bluetooth-receiver",
              },
              {
                id: "accessories-rgb-strip",
                name: "RGB Strip & Controller",
                icon: FaBolt,
                slug: "rgb-strip-controller",
              },
              {
                id: "accessories-vga-holder",
                name: "VGA Holder & Mounts",
                icon: FaBolt,
                slug: "vga-holder-mounts",
              },
              {
                id: "accessories-mouse-bungee",
                name: "Mouse Bungee",
                icon: FaBolt,
                slug: "mouse-bungee",
              },
              {
                id: "accessories-console-converter",
                name: "Console Converter",
                icon: FaBolt,
                slug: "console-converter",
              },
              {
                id: "accessories-card-reader",
                name: "Card Reader",
                icon: FaBolt,
                slug: "card-reader",
              },
            ],
          },
          {
            id: "accessories-earphone",
            name: "Earphone",
            icon: FaHeadphones,
            slug: "earphone",
            children: [
              {
                id: "accessories-wired-earphone",
                name: "Wired Earphone",
                icon: FaHeadphones,
                slug: "wired-earphone",
              },
              {
                id: "accessories-typec-earphone",
                name: "Type-C Earphone",
                icon: FaHeadphones,
                slug: "type-c-earphone",
              },
              {
                id: "accessories-lightning-earphone",
                name: "Lightning Earphone",
                icon: FaHeadphones,
                slug: "lightning-earphone",
              },
            ],
          },
          {
            id: "accessories-earbuds",
            name: "Earbuds",
            icon: FaHeadphones,
            slug: "earbuds",
            children: [
              {
                id: "accessories-tws-earbuds",
                name: "TWS Earbuds",
                icon: FaHeadphones,
                slug: "tws-earbuds",
              },
              {
                id: "accessories-anc-earbuds",
                name: "ANC Earbuds",
                icon: FaHeadphones,
                slug: "anc-earbuds",
              },
              {
                id: "accessories-gaming-earbuds",
                name: "Gaming Earbuds",
                icon: FaHeadphones,
                slug: "gaming-earbuds",
              },
            ],
          },
          {
            id: "accessories-neckband",
            name: "Neckband",
            icon: FaHeadphones,
            slug: "neckband",
            children: [
              {
                id: "accessories-bt-neckband",
                name: "Bluetooth Neckband",
                icon: FaHeadphones,
                slug: "bluetooth-neckband",
              },
              {
                id: "accessories-sports-neckband",
                name: "Sports Neckband",
                icon: FaHeadphones,
                slug: "sports-neckband",
              },
            ],
          },
          {
            id: "accessories-headset-stand",
            name: "Headset Stand",
            icon: FaHeadphones,
            slug: "headset-stand",
          },
          {
            id: "accessories-hubs-docks",
            name: "Hubs & Docks",
            icon: FaHdd,
            slug: "hubs-docks",
            children: [
              {
                id: "accessories-usb-hub",
                name: "USB Hub",
                icon: FaHdd,
                slug: "usb-hub",
              },
              {
                id: "accessories-typec-hub",
                name: "Type-C Hub",
                icon: FaHdd,
                slug: "type-c-hub",
              },
              {
                id: "accessories-tb-dock",
                name: "Thunderbolt Dock",
                icon: FaHdd,
                slug: "thunderbolt-dock",
              },
            ],
          },
          {
            id: "accessories-drive-enclosures",
            name: "Drive & Enclosures",
            icon: FaHdd,
            slug: "drive-enclosures",
            children: [
              {
                id: "accessories-m2-enclosure",
                name: "M.2 NVMe Enclosure",
                icon: FaHdd,
                slug: "m2-nvme-enclosure",
              },
              {
                id: "accessories-sata-enclosure",
                name: "2.5 Inch SATA Enclosure",
                icon: FaHdd,
                slug: "sata-enclosure",
              },
            ],
          },
          {
            id: "accessories-wrist-pad",
            name: "Wrist Pad",
            icon: FaKeyboard,
            slug: "wrist-pad",
          },
          {
            id: "accessories-keycaps",
            name: "Keycaps",
            icon: FaKeyboard,
            slug: "keycaps",
          },
        ],
      },
      {
        id: "accessories-mouse",
        name: "Mouse",
        icon: FaKeyboard,
        slug: "mouse",
        children: [
          {
            id: "accessories-wired-mouse",
            name: "Wired Mouse",
            icon: FaKeyboard,
            slug: "wired-mouse",
          },
          {
            id: "accessories-wireless-mouse",
            name: "Wireless Mouse",
            icon: FaKeyboard,
            slug: "wireless-mouse",
          },
          {
            id: "accessories-gaming-mouse",
            name: "Gaming Mouse",
            icon: FaKeyboard,
            slug: "gaming-mouse",
          },
          {
            id: "accessories-bluetooth-mouse",
            name: "Bluetooth Mouse",
            icon: FaKeyboard,
            slug: "bluetooth-mouse",
          },
        ],
      },
      {
        id: "accessories-keyboard",
        name: "Keyboard",
        icon: FaKeyboard,
        slug: "keyboard",
        children: [
          {
            id: "accessories-mechanical-keyboard",
            name: "Mechanical Keyboard",
            icon: FaKeyboard,
            slug: "mechanical-keyboard",
          },
          {
            id: "accessories-wireless-keyboard",
            name: "Wireless Keyboard",
            icon: FaKeyboard,
            slug: "wireless-keyboard",
          },
          {
            id: "accessories-gaming-keyboard",
            name: "Gaming Keyboard",
            icon: FaKeyboard,
            slug: "gaming-keyboard",
          },
          {
            id: "accessories-custom-keyboards",
            name: "Custom Keyboards",
            icon: FaKeyboard,
            slug: "custom-keyboards",
          },
        ],
      },
      {
        id: "accessories-webcam",
        name: "WebCam",
        icon: FaCamera,
        slug: "webcam",
        children: [
          {
            id: "accessories-1080p-webcam",
            name: "1080p Webcams",
            icon: FaCamera,
            slug: "1080p-webcam",
          },
          {
            id: "accessories-4k-webcam",
            name: "4K Webcams",
            icon: FaCamera,
            slug: "4k-webcam",
          },
        ],
      },
      {
        id: "accessories-microphone",
        name: "Microphone",
        icon: FaHeadphones,
        slug: "microphone",
        children: [
          {
            id: "accessories-usb-microphone",
            name: "USB Microphone",
            icon: FaHeadphones,
            slug: "usb-microphone",
          },
          {
            id: "accessories-condenser-microphone",
            name: "Condenser Microphone",
            icon: FaHeadphones,
            slug: "condenser-microphone",
          },
        ],
      },
      {
        id: "accessories-mousepad",
        name: "Mouse pad",
        icon: FaKeyboard,
        slug: "mouse-pad",
        children: [
          {
            id: "accessories-gaming-mousepad",
            name: "Gaming Mousepad",
            icon: FaKeyboard,
            slug: "gaming-mousepad",
          },
          {
            id: "accessories-extended-desk-mat",
            name: "Extended Desk Mat",
            icon: FaKeyboard,
            slug: "extended-desk-mat",
          },
          {
            id: "accessories-rgb-mousepad",
            name: "RGB Mousepad",
            icon: FaKeyboard,
            slug: "rgb-mousepad",
          },
        ],
      },
      {
        id: "accessories-gamepad",
        name: "Gamepad",
        icon: FaGamepad,
        slug: "gamepad",
        children: [
          {
            id: "accessories-pc-gamepad",
            name: "PC Gamepad",
            icon: FaGamepad,
            slug: "pc-gamepad",
          },
          {
            id: "accessories-wireless-controller",
            name: "Wireless Controller",
            icon: FaGamepad,
            slug: "wireless-controller",
          },
        ],
      },
      {
        id: "accessories-pendrive",
        name: "Pen Drive",
        icon: FaHdd,
        slug: "pen-drive",
        children: [
          {
            id: "accessories-usb3-pendrive",
            name: "USB 3.0 Pen Drive",
            icon: FaHdd,
            slug: "usb-3-pen-drive",
          },
          {
            id: "accessories-typec-pendrive",
            name: "Type-C Dual Drive",
            icon: FaHdd,
            slug: "type-c-dual-drive",
          },
        ],
      },
      {
        id: "accessories-memorycard",
        name: "Memory Card",
        icon: FaMemory,
        slug: "memory-card",
        children: [
          {
            id: "accessories-micro-sd",
            name: "Micro SD Card",
            icon: FaMemory,
            slug: "micro-sd-card",
          },
          {
            id: "accessories-sd-card",
            name: "SD Card",
            icon: FaMemory,
            slug: "sd-card",
          },
        ],
      },
    ],
  },
  {
    id: "phone-tab",
    name: "Phone & Tab",
    icon: FaMobileAlt,
    slug: "phone-tab",
    productCount: 420,
    children: [
      {
        id: "phone-tab-smartphones",
        name: "Smartphones",
        icon: FaMobileAlt,
        slug: "smartphones",
        children: [
          {
            id: "phone-apple",
            name: "Apple iPhone",
            icon: FaMobileAlt,
            slug: "apple-iphone",
          },
          {
            id: "phone-samsung",
            name: "Samsung Galaxy",
            icon: FaMobileAlt,
            slug: "samsung-galaxy",
          },
          {
            id: "phone-xiaomi",
            name: "Xiaomi",
            icon: FaMobileAlt,
            slug: "xiaomi",
          },
          {
            id: "phone-google",
            name: "Google Pixel",
            icon: FaMobileAlt,
            slug: "google-pixel",
          },
        ],
      },
      {
        id: "phone-tab-tablets",
        name: "Tablets",
        icon: FaMobileAlt,
        slug: "tablets",
        children: [
          {
            id: "tab-ipad",
            name: "Apple iPad",
            icon: FaMobileAlt,
            slug: "apple-ipad",
          },
          {
            id: "tab-samsung",
            name: "Samsung Tab",
            icon: FaMobileAlt,
            slug: "samsung-tab",
          },
          {
            id: "tab-graphics",
            name: "Drawing Tablets",
            icon: FaMobileAlt,
            slug: "drawing-tablets",
          },
        ],
      },
      {
        id: "phone-tab-accessories",
        name: "Mobile Accessories",
        icon: FaMobileAlt,
        slug: "mobile-accessories",
        children: [
          {
            id: "phone-cases",
            name: "Cases & Covers",
            icon: FaMobileAlt,
            slug: "cases-covers",
          },
          {
            id: "phone-chargers",
            name: "Fast Chargers",
            icon: FaBolt,
            slug: "fast-chargers",
          },
          {
            id: "phone-powerbanks",
            name: "Power Banks",
            icon: FaBolt,
            slug: "power-banks",
          },
        ],
      },
    ],
  },
  {
    id: "networking",
    name: "Networking",
    icon: FaWifi,
    slug: "networking",
    productCount: 290,
    children: [
      {
        id: "networking-routers",
        name: "Routers",
        icon: FaWifi,
        slug: "routers",
        children: [
          {
            id: "router-wifi6",
            name: "Wi-Fi 6 Routers",
            icon: FaWifi,
            slug: "wifi-6-routers",
          },
          {
            id: "router-mesh",
            name: "Mesh Wi-Fi Systems",
            icon: FaWifi,
            slug: "mesh-wifi",
          },
          {
            id: "router-gaming",
            name: "Gaming Routers",
            icon: FaWifi,
            slug: "gaming-routers",
          },
        ],
      },
      {
        id: "networking-switches",
        name: "Network Switches",
        icon: FaWifi,
        slug: "network-switches",
        children: [
          {
            id: "switch-gigabit",
            name: "Gigabit Switches",
            icon: FaWifi,
            slug: "gigabit-switches",
          },
          {
            id: "switch-poe",
            name: "PoE Switches",
            icon: FaWifi,
            slug: "poe-switches",
          },
        ],
      },
      {
        id: "networking-adapters",
        name: "Network Adapters",
        icon: FaWifi,
        slug: "network-adapters",
        children: [
          {
            id: "adapter-pcie",
            name: "PCIe Wi-Fi Cards",
            icon: FaWifi,
            slug: "pcie-wifi-cards",
          },
          {
            id: "adapter-usb",
            name: "USB Wi-Fi Adapters",
            icon: FaWifi,
            slug: "usb-wifi-adapters",
          },
        ],
      },
    ],
  },
  {
    id: "office-equipments",
    name: "Office Equipments",
    icon: FaPrint,
    slug: "office-equipments",
    productCount: 180,
    children: [
      {
        id: "office-printers",
        name: "Printers",
        icon: FaPrint,
        slug: "printers",
        children: [
          {
            id: "printer-laser",
            name: "Laser Printers",
            icon: FaPrint,
            slug: "laser-printers",
          },
          {
            id: "printer-inktank",
            name: "All-in-One Ink Tank",
            icon: FaPrint,
            slug: "ink-tank-printers",
          },
        ],
      },
      {
        id: "office-scanners",
        name: "Scanners",
        icon: FaPrint,
        slug: "scanners",
        children: [
          {
            id: "scanner-flatbed",
            name: "Flatbed Scanners",
            icon: FaPrint,
            slug: "flatbed-scanners",
          },
          {
            id: "scanner-document",
            name: "Document Scanners",
            icon: FaPrint,
            slug: "document-scanners",
          },
        ],
      },
      {
        id: "office-projectors",
        name: "Projectors",
        icon: FaTv,
        slug: "projectors",
        children: [
          {
            id: "projector-home",
            name: "Home Cinema Projectors",
            icon: FaTv,
            slug: "home-cinema-projectors",
          },
          {
            id: "projector-portable",
            name: "Portable Mini Projectors",
            icon: FaTv,
            slug: "portable-projectors",
          },
        ],
      },
    ],
  },
  {
    id: "gadgets",
    name: "Gadgets",
    icon: FaBolt,
    slug: "gadgets",
    productCount: 310,
    children: [
      {
        id: "gadgets-smartwatch",
        name: "Smart Watch",
        icon: FaBolt,
        slug: "smart-watch",
        children: [
          {
            id: "watch-apple",
            name: "Apple Watch",
            icon: FaBolt,
            slug: "apple-watch",
          },
          {
            id: "watch-samsung",
            name: "Galaxy Watch",
            icon: FaBolt,
            slug: "galaxy-watch",
          },
          {
            id: "watch-fitness",
            name: "Fitness Trackers",
            icon: FaBolt,
            slug: "fitness-trackers",
          },
        ],
      },
      {
        id: "gadgets-tvbox",
        name: "TV Box & Streaming",
        icon: FaTv,
        slug: "tv-box-streaming",
        children: [
          {
            id: "gadget-appletv",
            name: "Apple TV 4K",
            icon: FaTv,
            slug: "apple-tv",
          },
          {
            id: "gadget-chromecast",
            name: "Google TV / Chromecast",
            icon: FaTv,
            slug: "chromecast",
          },
          {
            id: "gadget-mibox",
            name: "Xiaomi Mi Box",
            icon: FaTv,
            slug: "mi-box",
          },
        ],
      },
    ],
  },
  {
    id: "cameras",
    name: "Cameras",
    icon: FaCamera,
    slug: "cameras",
    productCount: 140,
    children: [
      {
        id: "cameras-dslr-mirrorless",
        name: "DSLR & Mirrorless",
        icon: FaCamera,
        slug: "dslr-mirrorless",
        children: [
          {
            id: "cam-sony",
            name: "Sony Alpha",
            icon: FaCamera,
            slug: "sony-alpha",
          },
          {
            id: "cam-canon",
            name: "Canon EOS",
            icon: FaCamera,
            slug: "canon-eos",
          },
          {
            id: "cam-fuji",
            name: "Fujifilm X",
            icon: FaCamera,
            slug: "fujifilm-x",
          },
        ],
      },
      {
        id: "cameras-action",
        name: "Action Cameras",
        icon: FaCamera,
        slug: "action-cameras",
        children: [
          {
            id: "cam-gopro",
            name: "GoPro HERO",
            icon: FaCamera,
            slug: "gopro-hero",
          },
          {
            id: "cam-dji",
            name: "DJI Osmo Action",
            icon: FaCamera,
            slug: "dji-osmo-action",
          },
          {
            id: "cam-insta360",
            name: "Insta360",
            icon: FaCamera,
            slug: "insta360",
          },
        ],
      },
      {
        id: "cameras-security",
        name: "Security & IP Cameras",
        icon: FaCamera,
        slug: "security-cameras",
        children: [
          {
            id: "cam-wifi-cctv",
            name: "360° Wi-Fi IP Camera",
            icon: FaCamera,
            slug: "wifi-ip-camera",
          },
          {
            id: "cam-outdoor-cctv",
            name: "Outdoor CCTV Bullet",
            icon: FaCamera,
            slug: "outdoor-cctv",
          },
        ],
      },
    ],
  },
]

interface PcCategory {
  id: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  required: boolean
}

export const PC_CATEGORIES: PcCategory[] = [
  {
    id: "processors",
    name: "Processor (CPU)",
    icon: FaMicrochip,
    required: true,
  },
  { id: "CPU-Cooler", name: "CPU Cooler", icon: FaBolt, required: false },
  { id: "motherboard", name: "Motherboard", icon: FaDesktop, required: true },
  { id: "ram", name: "RAM (Memory)", icon: FaMemory, required: true },
  { id: "ssd", name: "Storage (SSD/HDD)", icon: FaHdd, required: true },
  { id: "gpus", name: "Graphics Card (GPU)", icon: FaDesktop, required: false },
  { id: "psus", name: "Power Supply (PSU)", icon: FaBolt, required: true },
  { id: "casings", name: "Casing", icon: FaDesktop, required: true },
]
