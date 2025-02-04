import "@/app/globals.css";
import { Mohave, DM_Sans } from "next/font/google";

const mohave = Mohave({
  subsets: ["latin"],
  display: "swap",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html className={`${mohave.className} ${dm_sans.className}`}>
      <body>{children}</body>
    </html>
  );
}
