import Script from 'next/script';

import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        {/* Google tag (gtag.js) */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-DGTRLWXF44'
          strategy='afterInteractive'
        />

        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;

              gtag('js', new Date());
              gtag('config', 'G-DGTRLWXF44');
            }
          `}
        </Script>
        <meta
          name='keywords'
          content='Landscaping company, Denver Landscaper, Local Landscaper, Local Landscaping company, Landscape design company, Landscaping services, Outdoor Living installation, Outdoor Living services, Landscape company, Landscape remodeling company, Landscape water installation, Irrigation installation, Irrigation landscaping company, Outdoor Drainage installation, Drainage landscaping company, Landscape maintenance company, Landscape maintenance services, Lawn maintenance company, Lawn maintenance services, Lawn installation company, Commercial landscaping company, Corporate landscaping company, Residential Landscaping, Complete Landscaping services, Outdoor living home design, Backyard Remodel company, Home water feature installation, Fountain installation, Deck installation company, Deck deign company, Residential Deck company, Residential patio company, Backyard deck installation, Backyard patio installation, Custom build deck, Custom build patio, Patio installation, Patio design company, front garden landscaping ideas'
        />
        <meta
          name='description'
          content='Stix & Stonz Landscaping provides reliable residential and commercial landscaping, lawn care, and hardscaping services. Free estimates available.'
        />
        <link rel='shortlink' href='https://www.stixandstonzlandscaping.com/' />
        <link rel='canonical' href='https://www.stixandstonzlandscaping.com/' />
        <title>Home | Stix &amp; Stonz Landscaping - 303-906-7656</title>
      </head>
      <body className='bg-white text-gray-900'>
        <Header />
        <main className='pt-[110px]'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
