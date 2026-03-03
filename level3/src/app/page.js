"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>

      <button onClick={() => router.push("/about")} role="button">
        Go to About
      </button>



      <div>
        <img src="/next.svg" alt="Vercel Logo" style={{ width: "250px" }} />{" "}
        <br />
        <Image src="/reactLogo.png" alt="React Logo" width={150} height={150} />
        <br />
        <img
          src="/reactLogo.png"
          alt="Vercel Logo"
          style={{ width: "250px" }}
        />{" "}
        <br />
      </div>
    </>
  );
}
