// import { Footer, Navbar } from '@/components';
import './globals.css';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('../components/Navbar'), {loading: () => <p>Loading...</p>,});
const Footer = dynamic(() => import('../components/Footer'), {loading: () => <p>Loading...</p>,})
// import { NextSeo } from 'next-seo';
export const metadata = {
  title: "Car Hub",
  description: "Discoverd the best cars in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative' >
      {/* <NextSeo
          title={metadata.title}
          description={metadata.description}
          openGraph={{
            title: metadata.title,
            description: metadata.description,
            url: 'https://car-hub-kk.vercel.app/', // Replace with your website URL
            type: 'website',
            images: [
              {
                url: '/logo.svg', // Replace with your image URL
                width: 800,
                height: 600,
                alt: 'Car Hub - Discover the best cars',
              },
            ],
          }}
        /> */}
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
