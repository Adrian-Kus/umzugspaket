import "./globals.css";
import Navbar from "@/app/components/Navbar.js";
import Footer from "@/app/components/Footer.js";

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
