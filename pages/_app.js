import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import AdminNav from "@/components/adminNav";
import Navbar from "@/components/Navbar";



export default function App({ Component, pageProps }) {
  const [user, setUser] = useState({ value: null });
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ value: token });
    }

  }, [router.query]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser({ value: null });
    router.push('/');
  };
  const isAdminRoute = router.pathname.startsWith('/admin');

  return<>
 {isAdminRoute ?  <div className="flex min-h-screen bg-cover" style={{ backgroundImage: "url('/bg.jpg')" }}>
 <AdminNav /> 
 <Component {...pageProps} user={user} Logout={logout} />
 </div> : ''}
 
   {!isAdminRoute ? <><Navbar/> <Component {...pageProps} user={user} Logout={logout} /></>:''}
  </>
}
