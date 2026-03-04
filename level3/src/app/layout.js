//import { Poppins } from "next/font/google";
import { Inter } from 'next/font/google';
import "./globals.css";

// const poppins = Poppins({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-poppins', // Assign a CSS variable name
// });

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {

  console.log("inter", inter);
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
