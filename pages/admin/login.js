import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaUser, FaLock, FaArrowLeft } from 'react-icons/fa';

export default function AdminLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // In a real implementation, this would make an API call to verify credentials
      // For now, we'll use a simple mock check
      if (formData.email === 'admin@dindori.com' && formData.password === 'admin123') {
        // Set some mock auth data in localStorage or a cookie
        localStorage.setItem('adminAuth', JSON.stringify({
          isLoggedIn: true,
          user: 'Admin User',
          token: 'mock-token-' + Date.now()
        }));
        
        // Redirect to admin dashboard
        router.push('/admin');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Login - दिंडोरी कृषि उत्पन्न बाजार समिती</title>
        <meta name="description" content="Admin login for Dindori Krishi Utpann Bajar Samiti" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto p-6">
          <div className="mt-7 bg-white rounded-xl shadow-lg">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mb-6">
                  <FaArrowLeft className="mr-2" /> मुख्यपृष्ठावर परत जा
                </Link>
                <h1 className="block text-2xl font-bold text-gray-800">अॅडमिन लॉगइन</h1>
                <p className="mt-2 text-sm text-gray-600">
                  दिंडोरी कृषि उत्पन्न बाजार समिती प्रशासन पॅनेल
                </p>
              </div>

              <div className="mt-8">
                {error && (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
                    <p>{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">ईमेल किंवा यूजरनेम</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaUser className="text-gray-500" />
                        </div>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-sm focus:border-green-500 focus:ring-green-500"
                          placeholder="admin@dindori.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">पासवर्ड</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaLock className="text-gray-500" />
                        </div>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-sm focus:border-green-500 focus:ring-green-500"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember_me"
                          name="remember_me"
                          type="checkbox"
                          className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                        />
                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700">
                          मला लक्षात ठेवा
                        </label>
                      </div>

                      <div>
                        <a className="text-sm text-green-600 hover:text-green-700 cursor-pointer">
                          पासवर्ड विसरलात?
                        </a>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm"
                        disabled={loading}
                      >
                        {loading ? 'लोड होत आहे...' : 'लॉगिन करा'}
                      </button>
                    </div>
                  </div>
                </form>

                <div className="mt-5 text-center">
                  <p className="text-sm text-gray-600">
                    For testing purposes, use: admin@dindori.com / admin123
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <footer className="mt-8 text-center pb-8">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} दिंडोरी कृषि उत्पन्न बाजार समिती - सर्व हक्क राखीव</p>
        </footer>
      </div>
    </>
  );
}
