import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        const data = await response.json();
        
        setBlogs(data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ब्लॉग - दिंडोरी कृषि उत्पन्न बाजार समिती</title>
        <meta name="description" content="Read latest blogs and news from Dindori Krishi Utpann Bajar Samiti" />
      </Head>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-4">
            दिंडोरी कृषि उत्पन्न बाजार समिती
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-8">
            ब्लॉग / लेख
          </h2>

          {loading ? (
            <div className="flex justify-center my-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 p-4 rounded-md text-red-700 text-center my-8">
              {error}
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">कोणतेही ब्लॉग अद्याप उपलब्ध नाहीत.</p>
              <p className="text-gray-500 mt-2">लवकरच नवीन ब्लॉग प्रकाशित केले जातील.</p>
            </div>
          ) : (
            <>
              {/* Featured Blog - Latest blog gets featured treatment */}
              {blogs.length > 0 && (
                <div className="mb-12">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg overflow-hidden shadow-md">
                    <div className="p-6 md:p-8">
                      <div className="text-sm text-gray-500 mb-2">
                        {formatDate(blogs[0].createdAt)}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-3">
                        {blogs[0].title}
                      </h3>
                      <p className="text-lg text-gray-700 italic mb-4">{blogs[0].subTitle}</p>
                      
                      <div className="mb-6">
                        <p className="text-gray-600 line-clamp-4">{blogs[0].desc.substring(0, 300)}...</p>
                      </div>
                      
                      <Link href={`/blog/${blogs[0].slug}`} className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors">
                        संपूर्ण वाचा
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Blog List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.slice(1).map((blog) => (
                  <Link href={`/blog/${blog.slug}`} key={blog._id}>
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                      <div className="p-5">
                        <div className="text-xs text-gray-500 mb-2">{formatDate(blog.createdAt)}</div>
                        <h3 className="text-xl font-bold text-green-800 mb-2 line-clamp-2">{blog.title}</h3>
                        <p className="text-sm text-gray-600 mb-3 italic line-clamp-2">{blog.subTitle}</p>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-3">{blog.desc}</p>
                        <div className="text-green-600 font-medium text-sm hover:text-green-700">
                          संपूर्ण वाचा &rarr;
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
