import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children, parallel1, parallel2 }) {
  return (
    <html lang="en">
      <body>
        <h1>Navigation Page in Root</h1>
        <div>{children}</div>
        <div >{parallel1}</div>
          <div >{parallel2}</div>
       
      </body>
    </html>
  );
}
