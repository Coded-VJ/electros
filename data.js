const PRODUCT_IMAGE_FALLBACK = "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=88";

const productImage = (id, name, category, colorName, color) => {
  const seed = Array.from(id).reduce((value, character) => (value * 31 + character.charCodeAt(0)) % 360, 0);
  const label = name.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const colorLabel = colorName.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const darkProduct = color.toLowerCase() === "#111827";
  const body = darkProduct ? "#303741" : color;
  const trim = darkProduct ? "#7f8996" : "#c5ced8";
  let illustration;

  if (category === "Smartwatches") {
    illustration = `
      <rect x="282" y="106" width="76" height="428" rx="36" fill="${body}" stroke="${trim}" stroke-width="8"/>
      <rect x="239" y="205" width="162" height="230" rx="43" fill="${trim}"/>
      <rect x="253" y="219" width="134" height="202" rx="32" fill="#111923"/>
      <circle cx="320" cy="320" r="${53 + seed % 13}" fill="none" stroke="hsl(${seed} 68% 64%)" stroke-width="12"/>
      <path d="M320 276v48l34 19" fill="none" stroke="#f8fafc" stroke-width="8" stroke-linecap="round"/>
      <circle cx="320" cy="324" r="7" fill="#f8fafc"/>
      <circle cx="408" cy="270" r="8" fill="${body}"/>
    `;
  } else if (category === "Earbuds") {
    illustration = `
      <rect x="176" y="304" width="288" height="182" rx="75" fill="${body}" stroke="${trim}" stroke-width="8"/>
      <path d="M184 355q136 76 272 0" fill="none" stroke="${trim}" stroke-width="7"/>
      <path d="M242 238a46 46 0 0 1 92 0v92h-54a38 38 0 0 1-38-38z" fill="${body}" stroke="${trim}" stroke-width="8"/>
      <path d="M306 330v36" stroke="${trim}" stroke-width="14" stroke-linecap="round"/>
      <path d="M342 238a46 46 0 0 1 92 0v54a38 38 0 0 1-38 38h-54z" fill="${body}" stroke="${trim}" stroke-width="8"/>
      <path d="M388 330v36" stroke="${trim}" stroke-width="14" stroke-linecap="round"/>
      <circle cx="${230 + seed % 180}" cy="395" r="9" fill="hsl(${seed} 68% 64%)"/>
    `;
  } else if (category === "Headphones") {
    illustration = `
      <path d="M190 348v-48a130 130 0 0 1 260 0v48" fill="none" stroke="${body}" stroke-width="42" stroke-linecap="round"/>
      <path d="M190 348v-48a130 130 0 0 1 260 0v48" fill="none" stroke="${trim}" stroke-width="8" stroke-linecap="round"/>
      <rect x="154" y="318" width="102" height="190" rx="42" fill="${body}" stroke="${trim}" stroke-width="9"/>
      <rect x="384" y="318" width="102" height="190" rx="42" fill="${body}" stroke="${trim}" stroke-width="9"/>
      <rect x="177" y="344" width="57" height="138" rx="28" fill="#151a20"/>
      <rect x="407" y="344" width="57" height="138" rx="28" fill="#151a20"/>
      <path d="M${205 + seed % 12} 364v96M${435 - seed % 12} 364v96" stroke="hsl(${seed} 68% 64%)" stroke-width="7" stroke-linecap="round"/>
    `;
  } else if (category === "Monitors") {
    illustration = `
      <rect x="112" y="142" width="416" height="294" rx="24" fill="${body}" stroke="${trim}" stroke-width="10"/>
      <rect x="132" y="162" width="376" height="254" rx="12" fill="#101820"/>
      <path d="M152 360q68-${30 + seed % 36} 136-4t136-${34 + seed % 28}v48H152z" fill="hsl(${seed} 65% 48%)" opacity=".8"/>
      <path d="M152 386q92-${20 + seed % 20} 184 4t172-${28 + seed % 20}v26H152z" fill="hsl(${(seed + 82) % 360} 70% 66%)" opacity=".85"/>
      <path d="M288 438v72h64v-72M250 512h140" fill="none" stroke="${trim}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="${180 + seed % 280}" cy="220" r="18" fill="hsl(${seed} 70% 70%)" opacity=".8"/>
    `;
  } else if (category === "Laptop Accessories" && name.toLowerCase().includes("mouse")) {
    illustration = `
      <path d="M320 150c-91 0-142 66-142 168v92c0 81 62 132 142 132s142-51 142-132v-92c0-102-51-168-142-168z" fill="${body}" stroke="${trim}" stroke-width="10"/>
      <path d="M320 160v144M178 306h284" fill="none" stroke="${trim}" stroke-width="8"/>
      <rect x="298" y="202" width="44" height="62" rx="20" fill="hsl(${seed} 68% 64%)"/>
      <path d="M${250 + seed % 40} 374v110" stroke="${trim}" stroke-width="5" stroke-linecap="round"/>
    `;
  } else if (category === "Laptop Accessories" && name.toLowerCase().includes("stand")) {
    illustration = `
      <path d="M150 225h340l-40 42H190z" fill="${body}" stroke="${trim}" stroke-width="8" stroke-linejoin="round"/>
      <path d="M205 275h230l65 230H150z" fill="${body}" stroke="${trim}" stroke-width="10" stroke-linejoin="round"/>
      <path d="M270 304h100l-34 154h-32z" fill="#151a20"/>
      <path d="M155 514h330" stroke="${trim}" stroke-width="18" stroke-linecap="round"/>
      <circle cx="${220 + seed % 190}" cy="251" r="8" fill="hsl(${seed} 68% 64%)"/>
    `;
  } else if (category === "Laptop Accessories" && name.toLowerCase().includes("dock")) {
    illustration = `
      <path d="M176 248h288q30 0 30 30v142q0 30-30 30H176q-30 0-30-30V278q0-30 30-30z" fill="${body}" stroke="${trim}" stroke-width="10"/>
      <path d="M190 293h74v110h-74zM287 293h64v110h-64zM374 293h92v110h-92z" fill="#151a20" stroke="${trim}" stroke-width="5"/>
      <circle cx="201" cy="342" r="9" fill="hsl(${seed} 68% 64%)"/>
      <path d="M222 458v52m196-52v52M194 512h252" stroke="${trim}" stroke-width="12" stroke-linecap="round"/>
    `;
  } else if (category === "Laptop Accessories") {
    illustration = `
      <rect x="108" y="226" width="424" height="246" rx="24" fill="${body}" stroke="${trim}" stroke-width="10"/>
      <rect x="126" y="244" width="388" height="186" rx="14" fill="#222a33"/>
      ${Array.from({ length: 5 }, (_, row) => Array.from({ length: 13 }, (_, column) => {
        const x = 145 + column * 27;
        const y = 262 + row * 30;
        const keyColor = (row * 13 + column + seed) % 7 === 0 ? `hsl(${seed} 68% 64%)` : "#727d89";
        return `<rect x="${x}" y="${y}" width="20" height="19" rx="4" fill="${keyColor}"/>`;
      }).join("")).join("")}
      <rect x="246" y="443" width="148" height="12" rx="6" fill="${trim}"/>
    `;
  } else if (category === "Mobile Accessories" && name.toLowerCase().includes("cable")) {
    illustration = `
      <path d="M190 370c0-102 260-102 260 0v77c0 48-40 87-88 87h-84c-48 0-88-39-88-87z" fill="none" stroke="${body}" stroke-width="32"/>
      <path d="M190 370c0-102 260-102 260 0v77c0 48-40 87-88 87h-84c-48 0-88-39-88-87z" fill="none" stroke="${trim}" stroke-width="5"/>
      <path d="M190 370v-62h-38v-35h70v97M450 370v-62h38v-35h-70v97" fill="none" stroke="${trim}" stroke-width="12" stroke-linejoin="round"/>
      <circle cx="320" cy="434" r="${28 + seed % 10}" fill="hsl(${seed} 68% 64%)"/>
    `;
  } else if (category === "Mobile Accessories" && name.toLowerCase().includes("glass")) {
    illustration = `
      <rect x="175" y="130" width="178" height="378" rx="28" fill="${body}" stroke="${trim}" stroke-width="8"/>
      <rect x="287" y="164" width="178" height="378" rx="28" fill="#d9e3ed" fill-opacity=".12" stroke="hsl(${seed} 68% 72%)" stroke-width="8"/>
      <path d="M310 196l132 286M340 184l112 242" stroke="#ffffff" stroke-opacity=".42" stroke-width="8"/>
      <circle cx="264" cy="488" r="8" fill="hsl(${seed} 68% 64%)"/>
    `;
  } else if (category === "Mobile Accessories" && name.toLowerCase().includes("cable") === false && name.toLowerCase().includes("wireless")) {
    illustration = `
      <rect x="176" y="228" width="288" height="184" rx="48" fill="${body}" stroke="${trim}" stroke-width="10"/>
      <circle cx="320" cy="320" r="55" fill="none" stroke="hsl(${seed} 68% 64%)" stroke-width="10"/>
      <circle cx="320" cy="320" r="27" fill="none" stroke="${trim}" stroke-width="7"/>
      <path d="M320 412v45q0 35 35 35h46" fill="none" stroke="${trim}" stroke-width="12" stroke-linecap="round"/>
      <path d="M398 478h30v30h-30z" fill="${body}" stroke="${trim}" stroke-width="6"/>
    `;
  } else if (category === "Mobile Accessories" && name.toLowerCase().includes("charger")) {
    illustration = `
      <rect x="208" y="190" width="224" height="270" rx="48" fill="${body}" stroke="${trim}" stroke-width="10"/>
      <path d="M268 190v-58m104 58v-58" stroke="${trim}" stroke-width="20" stroke-linecap="round"/>
      <rect x="278" y="268" width="84" height="14" rx="7" fill="hsl(${seed} 68% 64%)"/>
      <rect x="278" y="310" width="84" height="14" rx="7" fill="${trim}"/>
      <path d="M280 384h80" stroke="${trim}" stroke-width="12" stroke-linecap="round"/>
    `;
  } else {
    illustration = `
      <rect x="184" y="196" width="272" height="292" rx="38" fill="${body}" stroke="${trim}" stroke-width="10"/>
      <rect x="218" y="236" width="204" height="128" rx="20" fill="#151a20"/>
      <path d="M248 300h144" stroke="hsl(${seed} 68% 64%)" stroke-width="12" stroke-linecap="round"/>
      <circle cx="320" cy="425" r="16" fill="${trim}"/>
      <rect x="286" y="456" width="68" height="10" rx="5" fill="hsl(${seed} 68% 64%)"/>
    `;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" role="img" aria-label="${label} in ${colorLabel}">
    <defs><linearGradient id="background" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#202731"/><stop offset="1" stop-color="#11161d"/></linearGradient><radialGradient id="glow"><stop stop-color="hsl(${seed} 45% 34%)" stop-opacity=".48"/><stop offset="1" stop-color="#11161d" stop-opacity="0"/></radialGradient></defs>
    <rect width="640" height="640" fill="url(#background)"/><circle cx="${320 + (seed % 31) - 15}" cy="300" r="270" fill="url(#glow)"/>
    <circle cx="${80 + seed % 480}" cy="100" r="2" fill="#ffffff" opacity=".3"/><circle cx="${100 + (seed * 7) % 450}" cy="540" r="3" fill="hsl(${seed} 68% 72%)" opacity=".5"/>
    ${illustration}
    <text x="320" y="590" text-anchor="middle" fill="#f1f3f5" font-family="Arial,sans-serif" font-size="16" letter-spacing="3">${label.toUpperCase()}</text>
    <text x="320" y="616" text-anchor="middle" fill="#aeb7c2" font-family="Arial,sans-serif" font-size="12" letter-spacing="2">${colorLabel.toUpperCase()} · ${id.toUpperCase()}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const categoryData = [
  {
    category: "Smartwatches",
    products: [
      ["Pulse Pro Watch", "AMOLED · 7-day battery · GPS", 3499, 4.8, 2840, "Bestseller", 18,
        [["Pure White", "#f8fafc"]],
        { Display: "1.9″ AMOLED", Battery: "7 days", Connectivity: "Bluetooth 5.3 · GPS", Water: "5 ATM" }],
      ["Active Fit 2", "1.96″ display · 100+ sport modes", 1999, 4.6, 3460, "Just dropped", 3,
        [["Pure White", "#f8fafc"]],
        { Display: "1.96″ HD", Battery: "8 days", Connectivity: "Bluetooth 5.2", Water: "IP68" }],
      ["Pulse Mini Watch", "Always-on display · 5-day battery", 2799, 4.6, 1530, "New colour", 11,
        [["Pure White", "#f8fafc"]],
        { Display: "1.7″ AMOLED", Battery: "5 days", Connectivity: "Bluetooth 5.2", Water: "3 ATM" }],
      ["Trail Mate GPS", "Built-in GPS · 10-day battery", 5999, 4.7, 912, "Adventure ready", 6,
        [["Pure White", "#f8fafc"]],
        { Display: "1.5″ transflective", Battery: "10 days", Connectivity: "GPS · Bluetooth", Water: "5 ATM" }],
      ["Luna Active", "Sleep tracking · Water resistant", 2299, 4.5, 1380, "Everyday pick", 0,
        [["Pure White", "#f8fafc"]],
        { Display: "1.8″ LCD", Battery: "6 days", Connectivity: "Bluetooth 5.1", Water: "IP68" }]
    ]
  },
  {
    category: "Earbuds",
    products: [
      ["Aero Buds Max", "Adaptive ANC · 42h playtime", 2499, 4.7, 1920, "Fan favourite", 24,
        [["Midnight Black", "#111827"]],
        { Audio: "12 mm drivers", Battery: "42 hours", Connectivity: "Bluetooth 5.3", Noise: "Adaptive ANC" }],
      ["Aero Buds Lite", "Deep bass · 30h playtime · IPX5", 1299, 4.5, 5170, "Under ₹1,500", 0,
        [["Midnight Black", "#111827"]],
        { Audio: "10 mm drivers", Battery: "30 hours", Connectivity: "Bluetooth 5.3", Water: "IPX5" }],
      ["Studio Buds Pro", "Hybrid ANC · Spatial audio", 3999, 4.8, 1240, "Editor's pick", 14,
        [["Midnight Black", "#111827"]],
        { Audio: "12 mm drivers", Battery: "38 hours", Connectivity: "Bluetooth 5.3", Noise: "Hybrid ANC" }],
      ["Beat Pods Go", "Low-latency mode · 36h battery", 1799, 4.6, 2240, "Game on", 3,
        [["Midnight Black", "#111827"]],
        { Audio: "10 mm drivers", Battery: "36 hours", Connectivity: "Bluetooth 5.2", Latency: "Low-latency mode" }],
      ["Aero Buds Neo", "Clear calls · Fast USB-C charge", 999, 4.4, 3210, "Great value", 19,
        [["Midnight Black", "#111827"]],
        { Audio: "10 mm drivers", Battery: "28 hours", Connectivity: "Bluetooth 5.2", Charging: "USB-C fast charge" }]
    ]
  },
  {
    category: "Headphones",
    products: [
      ["Studio One", "Wireless · Hi-res audio · ANC", 4999, 4.9, 876, "Editor's pick", 9,
        [["Midnight Black", "#111827"]],
        { Audio: "40 mm Hi-res drivers", Battery: "36 hours", Connectivity: "Bluetooth 5.3", Noise: "Hybrid ANC" }],
      ["Studio Go", "40mm drivers · 50h battery", 2999, 4.7, 1240, "Fan favourite", 0,
        [["Midnight Black", "#111827"]],
        { Audio: "40 mm drivers", Battery: "50 hours", Connectivity: "Bluetooth 5.2", Weight: "238 g" }],
      ["Bassline Wireless", "Extra bass · Foldable design", 1999, 4.5, 1850, "Big sound", 16,
        [["Midnight Black", "#111827"]],
        { Audio: "40 mm bass drivers", Battery: "32 hours", Connectivity: "Bluetooth 5.2", Design: "Foldable" }],
      ["Cloud Comfort", "Memory foam · 45h playtime", 3499, 4.6, 947, "All-day comfort", 7,
        [["Midnight Black", "#111827"]],
        { Audio: "40 mm drivers", Battery: "45 hours", Connectivity: "Bluetooth 5.3", Cushions: "Memory foam" }],
      ["Studio Classic", "Over-ear · 3.5mm + Bluetooth", 2599, 4.5, 1320, "Classic sound", 12,
        [["Midnight Black", "#111827"]],
        { Audio: "40 mm drivers", Battery: "30 hours", Connectivity: "Bluetooth · 3.5 mm", Design: "Over-ear" }]
    ]
  },
  {
    category: "Monitors",
    products: [
      ["ViewPro 27", "27″ QHD · 165Hz · IPS panel", 18999, 4.8, 742, "Smooth visuals", 6,
        [["Pure White", "#f8fafc"]],
        { Resolution: "2560 × 1440", Refresh: "165 Hz", Panel: "IPS · 1 ms", Ports: "HDMI · DisplayPort" }],
      ["Studio Display 24", "24″ FHD · 100Hz · Eye-care", 9999, 4.6, 1130, "Desk upgrade", 3,
        [["Pure White", "#f8fafc"]],
        { Resolution: "1920 × 1080", Refresh: "100 Hz", Panel: "IPS · Eye-care", Ports: "HDMI · VGA" }],
      ["Creator QHD 32", "32″ 4K · 99% sRGB · USB-C", 32999, 4.8, 438, "Creator ready", 5,
        [["Pure White", "#f8fafc"]],
        { Resolution: "3840 × 2160", Refresh: "75 Hz", Panel: "IPS · 99% sRGB", Ports: "USB-C · HDMI" }],
      ["GameEdge 24", "24″ FHD · 180Hz · 1ms response", 13999, 4.7, 864, "Game on", 8,
        [["Pure White", "#f8fafc"]],
        { Resolution: "1920 × 1080", Refresh: "180 Hz", Panel: "IPS · 1 ms", Ports: "HDMI · DisplayPort" }],
      ["ViewLite 22", "22″ FHD · 75Hz · Slim bezel", 7499, 4.4, 1206, "Great value", 0,
        [["Pure White", "#f8fafc"]],
        { Resolution: "1920 × 1080", Refresh: "75 Hz", Panel: "VA · Slim bezel", Ports: "HDMI · VGA" }]
    ]
  },
  {
    category: "Laptop Accessories",
    products: [
      ["Keychron K2", "Wireless mechanical keyboard · 75%", 7499, 4.8, 624, "Work smarter", 12,
        [["Midnight Black", "#111827"]],
        { Layout: "75% · 84 keys", Switches: "Hot-swappable", Connectivity: "Bluetooth · USB-C", Battery: "4000 mAh" }],
      ["Swift Wireless Mouse", "Silent clicks · Adjustable 2400 DPI", 1499, 4.5, 1480, "All-day comfort", 15,
        [["Midnight Black", "#111827"]],
        { Sensor: "Up to 2400 DPI", Buttons: "6 silent buttons", Connectivity: "2.4 GHz wireless", Battery: "18 months" }],
      ["FlexBook Stand", "Aluminium laptop stand · 6 angles", 1899, 4.6, 952, "Better posture", 8,
        [["Pure White", "#f8fafc"]],
        { Material: "Aluminium alloy", Angles: "6 positions", Compatibility: "11–16″ laptops", Design: "Foldable" }],
      ["TypePro Wireless", "Multi-device keyboard · USB-C", 2499, 4.5, 1184, "Desk essential", 4,
        [["Midnight Black", "#111827"]],
        { Layout: "Full size · 104 keys", Connectivity: "Bluetooth · 2.4 GHz", Battery: "Rechargeable", Compatibility: "Mac · Windows" }],
      ["DockMate 7-in-1", "USB-C hub · 4K HDMI · 100W PD", 3299, 4.7, 706, "One hub, more", 0,
        [["Midnight Black", "#111827"]],
        { Ports: "7-in-1 USB-C", Display: "4K HDMI", Power: "100 W pass-through", Data: "USB 3.0" }]
    ]
  },
  {
    category: "Mobile Accessories",
    products: [
      ["SnapCharge 20K", "20,000mAh · 22.5W fast charge", 1999, 4.7, 2480, "Bestseller", 21,
        [["Pure White", "#f8fafc"]],
        { Capacity: "20,000 mAh", Output: "22.5 W", Ports: "USB-C · 2 × USB-A", Charging: "Fast charge" }],
      ["Arc USB-C Charger", "Compact 30W GaN · Foldable plug", 1799, 4.6, 936, "Travel ready", 8,
        [["Pure White", "#f8fafc"]],
        { Output: "30 W USB-C PD", Design: "GaN · foldable plug", Protection: "Over-current", Compatibility: "USB-C devices" }],
      ["Flexi USB-C Cable", "2m braided cable · 100W charge", 699, 4.5, 1640, "Tangle free", 26,
        [["Midnight Black", "#111827"]],
        { Length: "2 metres", Output: "100 W PD", Connector: "USB-C to USB-C", Build: "Braided nylon" }],
      ["SnapMag Wireless", "Magnetic wireless charger · 15W", 2299, 4.6, 716, "Snap & charge", 5,
        [["Midnight Black", "#111827"]],
        { Output: "15 W wireless", Input: "USB-C", Mount: "Magnetic alignment", Compatibility: "Qi-enabled phones" }],
      ["Shield Glass Duo", "Tempered glass · 2-screen protector pack", 499, 4.4, 1936, "Everyday shield", 3,
        [["Pure White", "#f8fafc"]],
        { Pack: "2 screen protectors", Material: "Tempered glass", Hardness: "9H", Fit: "Edge-to-edge" }]
    ]
  }
];

const products = categoryData.flatMap(({ category, products: items }) =>
  items.map(([name, description, price, rating, reviews, badge, stockCount, variants, specs]) => {
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const colors = variants.map(([colorName, hex]) => ({ name: colorName, hex }));
    const realProductPhotos = {
      "Smartwatches": [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=88"
      ],
      "Earbuds": [
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=900&q=88"
      ],
      "Headphones": [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=88"
      ],
      "Monitors": [
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=88"
      ],
      "Laptop Accessories": [
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=88"
      ],
      "Mobile Accessories": [
        "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=88",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=88"
      ]
    };
    const photoList = realProductPhotos[category] || realProductPhotos["Laptop Accessories"];
    const itemIndex = items.findIndex((item) => item[0] === name);
    let photo = photoList[itemIndex] || photoList[0];
    if (photo.startsWith("photo-")) {
      photo = `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=900&q=88`;
    }
    const images = Object.fromEntries(colors.map(({ name: colorName, hex }) => [
      colorName,
      photo
    ]));
    return {
      id,
      name,
      category,
      description,
      price,
      rating,
      reviews,
      badge,
      image: images[colors[0].name],
      images,
      stockCount,
      colors,
      specs
    };
  })
);
