'use client';
import { useEffect, useState } from "react";


export default function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    <h1 className="text-center text-2xl my-3">Moon Khan</h1>


    
    <table className="table-auto border-collapse border border-slate-500 w-[50%] mx-auto">
  <thead>
    <tr>
      <th className="border border-slate-600">Name</th>
      <th className="border border-slate-600">Email</th>
      <th className="border border-slate-600">Mobile</th>
    </tr>
  </thead>
  
  <tbody>
    {users.map((user: any) => (
      <tr key={user.id}>
        <td className="border border-slate-700">{user.name}</td>
        <td className="border border-slate-700">{user.email}</td>
        <td className="border border-slate-700">{user.mobile}</td>
      </tr>
    ))}
  </tbody>
</table>
    </>
  );
}
