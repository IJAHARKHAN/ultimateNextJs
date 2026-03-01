'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  console.log(router);
  return (
    <>
    <ul>
      <Link href="/"><li>Home</li></Link>
      <Link href="/about"><li>About</li></Link>
      <Link href="/contact"><li>Contact</li></Link>
    </ul>

    <button onClick={() => router.push("/about")} role="button">Go to About</button>
    </>
  );
}
