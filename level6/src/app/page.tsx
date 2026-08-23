// 'use client';

// import { useEffect, useState } from "react";

// export default function Home() {
//   const [first, setFirst] = useState([]) 
//    const fetchData = async () => {
//     try {
//       const response = await fetch("/api/users");
//       const data = await response.json();
//       setFirst(data);
      
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//     <h1 className="text-center text-3xl mt-4 font-bold">Using CSR</h1>
//     <ul>
//       {first.map((user: any) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//     </>
//   );
// }




// export default async function Home() {
//   const data = await fetch("http://localhost:3000/api/users", { cache: "no-store" });
//   const users = await data.json();

//   return (
//     <>
//     <h1 className="text-center text-3xl mt-4 font-bold">Using SSR </h1>
//     <ul>
//       {users.map((user: any) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//     </>
//   );
// }

// export default async function Home() {
//   const data = await fetch("http://localhost:3000/api/users", { cache: "force-cache" });
//   const users = await data.json();

//   return (
//     <>
//     <h1 className="text-center text-3xl mt-4 font-bold">Using SSG </h1>
//     <ul>
//       {users.map((user: any) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//     </>
//   );
// }


export default async function Home() {
  const data = await fetch("http://localhost:3000/api/users", { next: { revalidate: 5 } });
  const users = await data.json();

  return (
    <>
    <h1 className="text-center text-3xl mt-4 font-bold">Using ISR </h1>
    <ul>
      {users.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    </>
  );
}