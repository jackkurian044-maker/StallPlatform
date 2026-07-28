import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STALL | Discover Local Businesses",
  description:
    "Find trusted local businesses near you. Explore salons, flower shops, restaurants, tailors, grocery stores and much more with STALL.",
  keywords: [
    "STALL",
    "Local Business",
    "Marketplace",
    "Nearby Shops",
    "Business Directory",
    "Bangalore",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
