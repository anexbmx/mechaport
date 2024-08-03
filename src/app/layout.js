import { Roboto } from "next/font/google";
import "./styles/globals.css";
import "./styles/theme.light.css";
import "./styles/typography.css";
import "./styles/utils.css";

const roboto = Roboto({
    weight: ['300','400', '500', '700', '900'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',

  })




export const metadata = {
  title: "MachaPort",
  description: "Erleben Sie Ihre Räume neu mit 3D-Touren in Düsseldorf. Wir bieten modernste 3D-Touren für Restaurants, Immobilien und Ferienwohnungen, um Ihren Kunden ein immersives und interaktives Erlebnis zu bieten",
  openGraph: {
    type: 'website',
    title: 'Machaport',
    description:  'Erleben Sie Ihre Räume neu mit 3D-Touren in Düsseldorf. Wir bieten modernste 3D-Touren für Restaurants, Immobilien und Ferienwohnungen, um Ihren Kunden ein immersives und interaktives Erlebnis zu bieten',
    siteName: 'Machaport',
    url: 'https://mechaport.vercel.app/',
    images: [
        {
          url: 'https://nextjs.org/og.png', // Must be an absolute URL
          width: 800,
          height: 600,
        }]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
