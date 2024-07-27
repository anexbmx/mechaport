import { Roboto } from "next/font/google";
import "./styles/globals.css";
import "./styles/theme.light.css";
import "./styles/typography.css";
import "./styles/utils.css";

const roboto = Roboto({
    weight: ['300','400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  })




//   <!-- Twitter Card -->
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:site" content="@anas" />
//   <meta name="twitter:url" content="https://mechaport.vercel.app/" />
//   <meta name="twitter:title" content="Machaport" />
//   <meta name="twitter:description" content="Erleben Sie Ihre Räume neu mit 3D-Touren in Düsseldorf. Wir bieten modernste 3D-Touren für Restaurants, Immobilien und Ferienwohnungen, um Ihren Kunden ein immersives und interaktives Erlebnis zu bieten" />
//   <meta name="twitter:image" content="" />


export const metadata = {
  title: "MachaPort",
  description: "Erleben Sie Ihre Räume neu mit 3D-Touren in Düsseldorf. Wir bieten modernste 3D-Touren für Restaurants, Immobilien und Ferienwohnungen, um Ihren Kunden ein immersives und interaktives Erlebnis zu bieten",
  openGraph: {
    type: 'website',
    title: 'Machaport',
    description:  'Erleben Sie Ihre Räume neu mit 3D-Touren in Düsseldorf. Wir bieten modernste 3D-Touren für Restaurants, Immobilien und Ferienwohnungen, um Ihren Kunden ein immersives und interaktives Erlebnis zu bieten',
    site_name: 'Machaport',
    url: 'https://mechaport.vercel.app/'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
