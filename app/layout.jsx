import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Borracharia 24h Só Chamar — Osasco',
  description: 'Atendimento rápido, preço justo e resultado com garantia. A Borracharia 24h Só Chamar em Osasco resolve para você hoje mesmo.',
  keywords: 'Borracharia 24h Só Chamar, Borracharia, Borracharia Osasco, Osasco, melhor Borracharia, Borracharia profissional',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Borracharia 24h Só Chamar',
    description: 'Borracharia 24h Só Chamar — Borracharia em Osasco. Atendimento rápido, preço justo e resultado com garantia. A Borracharia 24h Só Chamar em Osasco resolve para você hoje mesmo.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Borracharia 24h Só Chamar',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
