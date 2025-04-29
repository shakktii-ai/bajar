import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Only fetch when we have a slug from the router
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        // First get all blogs and find the one matching the slug
        const res = await fetch('/api/blogs');
        const data = await res.json();
        
        if (data) {
          const foundBlog = data.find(b => b.slug === slug);
          if (foundBlog) {
            setBlog(foundBlog);
          } else {
            setError('Blog post not found');
          }
        } else {
          setError('Failed to load blog');
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to connect to server');
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlog();
  }, [slug]);

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('mr-IN', options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{blog ? `${blog.title} - ब्लॉग` : 'ब्लॉग पोस्ट'} - दिंडोरी कृषि उत्पन्न बाजार समिती</title>
        <meta name="description" content={blog ? blog.subTitle : 'Blog post from Dindori Krishi Utpann Bajar Samiti'} />
      </Head>
      
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          {/* Back link */}
          <div className="mb-6">
            <Link href="/blogs" className="text-green-700 hover:text-green-900 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              सर्व ब्लॉग पोस्ट पहा
            </Link>
          </div>

          {loading ? (
            <div className="mb-10 text-center py-8">
              <p className="text-gray-600">ब्लॉग पोस्ट लोड करत आहे...</p>
            </div>
          ) : error ? (
            <div className="mb-10 text-center py-8 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600">{error}</p>
              <p className="mt-4">
                <Link href="/blogs" className="text-green-600 hover:text-green-800 font-medium">
                  सर्व ब्लॉग पोस्ट पहा
                </Link>
              </p>
            </div>
          ) : blog ? (
            <div className="prose max-w-none">
              <h1 className="text-3xl font-bold text-green-800 mb-4">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-gray-600 mb-6">
                <p className="mr-4">प्रकाशित: {formatDate(blog.createdAt)}</p>
                {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
                  <p>अपडेटेड: {formatDate(blog.updatedAt)}</p>
                )}
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">{blog.subTitle}</h2>
                
                <div className="mt-6 text-gray-800 whitespace-pre-line">
                  {blog.desc.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-8">
                <p className="text-sm text-gray-600">
                  या ब्लॉग पोस्टमध्ये व्यक्त केलेली मते दिंडोरी कृषि उत्पन्न बाजार समितीची आधिकारिक मते असतीलच असे नाही.
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-10 text-center py-8">
              <p className="text-gray-600">ब्लॉग पोस्ट आढळली नाही</p>
            </div>
          )}
        </div>
        
        {/* Related posts or back button */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-4">अधिक ब्लॉग पोस्ट</h3>
          <div className="flex justify-center">
            <Link href="/blogs" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
              सर्व ब्लॉग पोस्ट पहा
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
