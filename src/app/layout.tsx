import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "DefectRail",
  description: "Inspection AI lot quality dashboard",
};

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/lots/lot-2407-a", label: "Lot Detail" },
  { href: "/review-queue", label: "Review Queue" },
  { href: "/performance-lab", label: "Performance Lab" },
];

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <Link className="brand" href="/dashboard">
            DefectRail
          </Link>
          <nav>
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
