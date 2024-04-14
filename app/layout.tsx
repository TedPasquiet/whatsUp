import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Management de la police d'écriture
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "WhatsUp",
  description: "Plateforme de gestion d'évènement",
  // TODO Régler problème logo
  icons: {
    icon: '/assets/images/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {/* Injection police d'écriture */}
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
