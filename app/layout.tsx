import type { Metadata } from "next";
import { Schibsted_Grotesk, Newsreader } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cannaidpr.com"),
  title: {
    default: "CannaID — Tu licencia de cannabis medicinal en Puerto Rico",
    template: "%s · CannaID",
  },
  description:
    "Evaluación médica por telemedicina y gestoría completa de tu licencia de cannabis medicinal ante el Departamento de Salud de Puerto Rico, por $39.",
  openGraph: {
    title: "CannaID — Cannabis medicinal en Puerto Rico",
    description:
      "Renueva o saca tu licencia de cannabis medicinal por $39. Telemedicina, gestoría incluida.",
    url: "https://cannaidpr.com",
    siteName: "CannaID",
    locale: "es_PR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-PR" className={`${schibsted.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
