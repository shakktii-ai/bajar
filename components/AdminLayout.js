import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState(null);
  
  // Get today's date in Marathi
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const todayMarathi = today.toLocaleDateString('mr-IN', options);
  
  // Check authentication status on component mount
  useEffect(() => {
    const checkAuth = () => {
      // Check if admin is logged in via localStorage
      const adminAuth = localStorage.getItem('adminAuth');
      if (!adminAuth) {
        // Not authenticated, redirect to login
        router.push('/admin/login');
        return;
      }
      
      try {
        const authData = JSON.parse(adminAuth);
        if (!authData.isLoggedIn || !authData.token) {
          // Invalid auth data, redirect to login
          router.push('/admin/login');
          return;
        }
        
        // Set authenticated state and user info
        setIsAuthenticated(true);
        setAdminUser(authData.user);
      } catch (err) {
        console.error('Auth parsing error:', err);
        router.push('/admin/login');
      }
    };
    
    checkAuth();
  }, [router]);
  
  // Handle logout
  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('adminAuth');
    // Redirect to login page
    router.push('/admin/login');
  };

  // If not authenticated, don't render the layout
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-green-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">दिंडोरी कृषि उत्पन्न बाजार समिती - प्रशासक पॅनल</h1>
            <p className="text-sm">{todayMarathi}</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-green-700 px-3 py-1 rounded-full text-sm">{adminUser || 'Admin'}</span>
            <button 
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm">
              लॉग आउट
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white shadow-md h-screen sticky top-0 pt-6">
          <nav>
            <ul className="space-y-2 px-4">
              <li>
                <Link href="/admin" className={`block px-4 py-2 rounded font-medium ${
                  router.pathname === '/admin' ? 'bg-green-600 text-white' : 'hover:bg-green-100 text-green-800'
                }`}>
                  डॅशबोर्ड
                </Link>
              </li>
              <li>
                <Link href="/admin/product-catalog" className={`block px-4 py-2 rounded font-medium ${
                  router.pathname === '/admin/product-catalog' ? 'bg-green-600 text-white' : 'hover:bg-green-100 text-green-800'
                }`}>
                  उत्पादन तालिका
                </Link>
              </li>
              <li>
                <Link href="/admin/daily-pricing" className={`block px-4 py-2 rounded font-medium ${
                  router.pathname === '/admin/daily-pricing' ? 'bg-green-600 text-white' : 'hover:bg-green-100 text-green-800'
                }`}>
                  आजचे बाजार भाव
                </Link>
              </li>
              <li>
                <Link href="/admin/price-history" className={`block px-4 py-2 rounded font-medium ${
                  router.pathname === '/admin/price-history' ? 'bg-green-600 text-white' : 'hover:bg-green-100 text-green-800'
                }`}>
                  भाव इतिहास
                </Link>
              </li>
              <li>
                <Link href="/admin/farmers" className={`block px-4 py-2 rounded font-medium ${
                  router.pathname === '/admin/farmers' ? 'bg-green-600 text-white' : 'hover:bg-green-100 text-green-800'
                }`}>
                  शेतकरी व्यवस्थापन
                </Link>
              </li>
              <li>
                <Link href="/admin/traders" className={`block px-4 py-2 rounded font-medium ${
                  router.pathname === '/admin/traders' ? 'bg-green-600 text-white' : 'hover:bg-green-100 text-green-800'
                }`}>
                  व्यापारी व्यवस्थापन
                </Link>
              </li>
             
              <li>
                <Link href="/admin/gallery" className={`block px-4 py-2 rounded font-medium ${
                  router.pathname === '/admin/gallery' ? 'bg-green-600 text-white' : 'hover:bg-green-100 text-green-800'
                }`}>
                  फोटो/व्हिडिओ अपलोड
                </Link>
              </li>
              <li>
                <Link href="/admin/add-interview" className={`block px-4 py-2 rounded font-medium ${
                  router.pathname === '/admin/add-interview' ? 'bg-green-600 text-white' : 'hover:bg-green-100 text-green-800'
                }`}>
                  मुलाखती व्यवस्थापन
                </Link>
              </li>
              <li>
                <Link href="/admin/addBlogs" className={`block px-4 py-2 rounded font-medium ${
                  router.pathname === '/admin/addBlogs' ? 'bg-green-600 text-white' : 'hover:bg-green-100 text-green-800'
                }`}>
                  ब्लॉग व्यवस्थापन
                </Link>
              </li>
              <li>
                <Link href="/admin/reports" className={`block px-4 py-2 rounded font-medium ${
                  router.pathname === '/admin/reports' ? 'bg-green-600 text-white' : 'hover:bg-green-100 text-green-800'
                }`}>
                  अहवाल
                </Link>
              </li>
              <li>
                <Link href="/admin/settings" className={`block px-4 py-2 rounded font-medium ${
                  router.pathname === '/admin/settings' ? 'bg-green-600 text-white' : 'hover:bg-green-100 text-green-800'
                }`}>
                  सेटिंग्ज
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
