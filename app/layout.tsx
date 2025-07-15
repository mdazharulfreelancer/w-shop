import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from "@/lib/constants";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME}. ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
};

export const viewport: Viewport = {
  themeColor: "oklch(64.8% 0.2 131.684)",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <div className=" relative flex flex-col h-screen w-full overflow-y-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
