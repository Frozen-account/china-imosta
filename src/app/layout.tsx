import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// Latin only: Chinese text uses the system CJK font (see --font-sans), which keeps the page light for WeChat.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

const title = "IMOSTA China Desk · 波兰华沙中文会计与税务服务";
const description =
  "华沙实体办公的会计与法律事务所，母语级中文团队。专注进口增值税 Art. 33a 递延、KSeF 电子发票、收银机合规、公司账务与居留卡财税支持。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: SITE_URL, siteName: "IMOSTA Group China Desk", title, description, locale: "zh_CN" },
  formatDetection: { telephone: false }, // phone links are explicit; stops iOS/WeChat from linking NIP/KRS numbers
};

export const viewport: Viewport = {
  themeColor: "#0b1120",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className={`${montserrat.variable} antialiased`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
