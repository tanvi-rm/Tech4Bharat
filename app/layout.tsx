import "./globals.css";
import { Poppins } from "next/font/google";

/* ===============================
   FONT SETUP
================================ */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* ===============================
   METADATA
================================ */
export const metadata = {
  title: "Tech For Bharat",
  description: "Empowering India’s youth with cutting-edge technology skills",
};

/* ===============================
   ROOT LAYOUT
================================ */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>

      
      <body className={poppins.className}>
        {/* Full-page gradient wrapper */}
        <div className="min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}

