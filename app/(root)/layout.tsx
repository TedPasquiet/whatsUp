
// Suivant les routes nous n'avons pas le même layout 

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

// Nécésitté layout Alternatif
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header/>
      <main className="flex-1">{children}</main>
      <Footer/>
    </div>
  );
}
