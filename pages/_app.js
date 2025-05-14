import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Animation imports
import AOS from "aos";
import "aos/dist/aos.css";



export default function App({ Component, pageProps }) {
  const [user, setUser] = useState({ value: null });
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ value: token });
    }
    
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out',
      mirror: true
    });
  }, [router.query]);
  
  // Refresh AOS on route change
  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      AOS.refresh();
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser({ value: null });
    router.push('/');
  };
  const isAdminRoute = router.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute ? (
        // For regular site pages, show the navbar, page content, and footer
        <>
          <Navbar />
          <Component {...pageProps} user={user} Logout={logout} />
          <Footer />
        </>
      ) : (
        // For admin pages, show the page content and footer (AdminLayout is used within those pages)
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Component {...pageProps} user={user} Logout={logout} />
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}
