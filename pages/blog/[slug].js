import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import connectToDatabase from '../../middleware/mongoose';
import Blog from '../../models/Blogs';

export default function BlogDetail({ blog, error }) {
  const router = useRouter();

  // If the page is still being generated via SSR
  if (router.isFallback) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
      </div>
    );
  }

  // If blog wasn't found
  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Head>
          <title>ब्लॉग नाही सापडला - दिंडोरी कृषि उत्पन्न बाजार समिती</title>
          <meta name="description" content="Blog not found" />
        </Head>
        
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">ब्लॉग नाही सापडला</h1>
            <p className="text-gray-600 mb-6">आपण शोधत असलेला ब्लॉग अस्तित्वात नाही किंवा हटवला गेला आहे.</p>
            <Link href="/blogs" className="inline-block px-5 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700">
              सर्व ब्लॉग्स पहा
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{blog.title} - दिंडोरी कृषि उत्पन्न बाजार समिती</title>
        <meta name="description" content={blog.subTitle} />
      </Head>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="mb-8">
              <Link href="/blogs" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                सर्व ब्लॉग्स पहा
              </Link>
              
              <h1 className="text-3xl font-bold text-green-800 mb-3">
                {blog.title}
              </h1>
              
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <span>प्रकाशित: {formatDate(blog.createdAt)}</span>
                {blog.updatedAt !== blog.createdAt && (
                  <span className="ml-4">अद्यतनित: {formatDate(blog.updatedAt)}</span>
                )}
              </div>
              
              <p className="text-xl text-gray-700 italic border-b border-gray-100 pb-4 mb-6">
                {blog.subTitle}
              </p>
            </div>
            
            <div className="prose max-w-none">
              {/* Render blog content - split into paragraphs */}
              {blog.desc.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-12 pt-6 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <Link href="/blogs" className="inline-flex items-center text-green-600 hover:text-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  सर्व ब्लॉग्स पहा
                </Link>
                
                <div className="text-gray-500 text-sm">
                  शेअर करा: 
                  <button className="ml-2 text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </button>
                  <button className="ml-2 text-blue-400 hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>
                  <button className="ml-2 text-green-600 hover:text-green-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps({ params }) {
  try {
    await connectToDatabase();
    
    // Find the blog by slug
    const blog = await Blog.findOne({ slug: params.slug });
    
    // If no blog found
    if (!blog) {
      return {
        props: { 
          error: 'Blog not found',
          blog: null
        },
        revalidate: 60, // revalidate after 60 seconds
      };
    }

    // Return the blog data
    return {
      props: {
        blog: JSON.parse(JSON.stringify(blog)), // Convert MongoDB object to plain object
        error: null
      },
      revalidate: 60, // revalidate after 60 seconds
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: { 
        error: 'Failed to fetch blog',
        blog: null
      },
      revalidate: 60, // revalidate after 60 seconds
    };
  }
}

// Generate static paths for blogs
export async function getStaticPaths() {
  try {
    await connectToDatabase();
    
    // Find all blogs to generate paths
    const blogs = await Blog.find({}, 'slug');
    
    // Create paths with params
    const paths = blogs.map((blog) => ({
      params: { slug: blog.slug },
    }));
    
    return {
      paths,
      fallback: true, // Show fallback loading for new blogs
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [],
      fallback: true,
    };
  }
}
