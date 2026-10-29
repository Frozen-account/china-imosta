// Single place for contact details and links used across the page.
// TODO before launch: set WECHAT_ID and add the real QR image (see WeChatQr).
export const SITE_URL = "https://china.imosta.pl";

export const CONTACT = {
  wechatId: "", // Victoria's WeChat ID — empty shows a "待补充" placeholder
  wechatName: "Victoria",
  phone: "+48 573 581 162",
  phoneHref: "tel:+48573581162",
  email: "info@imosta.pl",
  address: "ul. Ostrobramska 101 lok. 336, 04-041 Warszawa",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Ostrobramska+101,+04-041+Warszawa",
  nip: "1133089152",
  krs: "0001025586",
  regon: "524697797",
  privacyHref: "https://imosta.pl/ru/privacy-policy/",
} as const;

// Labels come from the dictionaries (src/i18n) under nav.<key>.
export const NAV = [
  { href: "#services", key: "services" },
  { href: "#tax-import", key: "taxImport" },
  { href: "#pricing", key: "pricing" },
  { href: "#about", key: "about" },
  { href: "#contact", key: "contact" },
] as const;
