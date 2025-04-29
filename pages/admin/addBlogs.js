import { useState, useEffect } from 'react';
import Head from 'next/head';
import AdminLayout from '../../components/AdminLayout';

export default function BlogsAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    subTitle: '',
    desc: '',
  });
  const [editingBlog, setEditingBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [refreshData, setRefreshData] = useState(false);

  // Fetch all blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/blogs');
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setStatus({
          type: 'error',
          message: 'Failed to fetch blogs. Please try again.'
        });
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [refreshData]);

  // Generate slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Auto-generate slug when title changes and slug is empty or we're creating a new blog
    if (name === 'title' && (!formData.slug || !editingBlog)) {
      setFormData(prev => ({
        ...prev,
        slug: generateSlug(value)
      }));
    }
  };

  // Validate form data
  const validateForm = () => {
    if (!formData.title.trim()) {
      setStatus({ type: 'error', message: 'Title is required' });
      return false;
    }
    if (!formData.slug.trim()) {
      setStatus({ type: 'error', message: 'Slug is required' });
      return false;
    }
    if (!formData.subTitle.trim()) {
      setStatus({ type: 'error', message: 'SubTitle is required' });
      return false;
    }
    if (!formData.desc.trim()) {
      setStatus({ type: 'error', message: 'Description is required' });
      return false;
    }
    return true;
  };

  // Create a new blog
  const handleCreateBlog = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      setStatus({ type: '', message: '' });

      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({ title: '', slug: '', subTitle: '', desc: '' });
        setStatus({ type: 'success', message: 'Blog created successfully!' });
        setRefreshData(!refreshData); // Trigger refresh
      } else {
        setStatus({ 
          type: 'error', 
          message: data.message || 'Failed to create blog'
        });
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      setStatus({
        type: 'error',
        message: 'An error occurred while creating the blog'
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle update of existing blog
  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      setStatus({ type: '', message: '' });

      const response = await fetch(`/api/blogs?id=${editingBlog._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setEditingBlog(null);
        setFormData({ title: '', slug: '', subTitle: '', desc: '' });
        setStatus({ type: 'success', message: 'Blog updated successfully!' });
        setRefreshData(!refreshData); // Trigger refresh
      } else {
        setStatus({ 
          type: 'error', 
          message: data.message || 'Failed to update blog'
        });
      }
    } catch (error) {
      console.error('Error updating blog:', error);
      setStatus({
        type: 'error',
        message: 'An error occurred while updating the blog'
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle delete of a blog
  const handleDeleteBlog = async (id) => {
    if (!confirm('Are you sure you want to delete this blog?')) {
      return;
    }

    try {
      setLoading(true);
      setStatus({ type: '', message: '' });

      const response = await fetch(`/api/blogs?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setBlogs(blogs.filter((blog) => blog._id !== id));
        setStatus({ type: 'success', message: 'Blog deleted successfully!' });
      } else {
        const data = await response.json();
        setStatus({ 
          type: 'error', 
          message: data.message || 'Failed to delete blog'
        });
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      setStatus({
        type: 'error',
        message: 'An error occurred while deleting the blog'
      });
    } finally {
      setLoading(false);
    }
  };

  // Start editing a blog
  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      slug: blog.slug,
      subTitle: blog.subTitle,
      desc: blog.desc,
    });
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingBlog(null);
    setFormData({ title: '', slug: '', subTitle: '', desc: '' });
  };

  return (
    <AdminLayout>
      <Head>
        <title>{editingBlog ? 'Edit Blog' : 'Add Blog'} - Admin Dashboard</title>
        <meta name="description" content="Manage blogs for the market website" />
      </Head>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold text-center text-green-800 mb-6">
            Admin Dashboard - {editingBlog ? 'Edit Blog' : 'Add New Blog'}
          </h1>

          {status.message && (
            <div className={`mb-6 p-4 rounded-md ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              {status.message}
            </div>
          )}
          
          <form onSubmit={editingBlog ? handleUpdateBlog : handleCreateBlog} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Blog Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter blog title"
                />
              </div>
              
              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                  Slug * (URL-friendly version of title)
                </label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="enter-slug-here"
                />
                <p className="text-xs text-gray-500 mt-1">Auto-generated from title, but you can edit it</p>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="subTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Sub Title *
                </label>
                <input
                  type="text"
                  id="subTitle"
                  name="subTitle"
                  value={formData.subTitle}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter a short subtitle or summary"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="desc" className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                id="desc"
                name="desc"
                value={formData.desc}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Enter the full blog content here"
              ></textarea>
            </div>
            
            <div className="flex justify-end space-x-4">
              {editingBlog && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 rounded-md text-white font-medium ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
              >
                {loading ? 'Processing...' : editingBlog ? 'Update Blog' : 'Add Blog'}
              </button>
            </div>
          </form>
        </div>
        
        {/* Existing Blogs */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-green-800 mb-4">
            Existing Blogs
          </h2>
          
          {loading && !blogs.length ? (
            <div className="flex justify-center my-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
            </div>
          ) : blogs.length === 0 ? (
            <p className="text-gray-500 text-center py-6">No blogs added yet.</p>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <div key={blog._id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-green-800 mb-2 line-clamp-2">{blog.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{blog.subTitle}</p>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-3">{blog.desc}</p>
                    
                    <div className="border-t pt-3 flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditBlog(blog)}
                          className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteBlog(blog._id)}
                          className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
