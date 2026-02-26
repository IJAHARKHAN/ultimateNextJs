import Image from "next/image";

export default async function Home() {
  // Test ke liye delay (5 seconds)
  await new Promise((resolve) => setTimeout(resolve, 5000));
  
  return (
    <>
    <h1>Home page</h1>
    </>
  );
}
