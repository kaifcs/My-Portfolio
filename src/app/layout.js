import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import MovingGlowBackground from "@/components/MovingGlowBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Kaif Khan | Portfolio",
  description:
    "Kaif Khan's developer portfolio showcasing projects, skills, and achievements.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#020617] text-white relative">
        <MovingGlowBackground />
        {children}
      </body>
      
    </html>
  );
}
