import { useState, useEffect } from 'react';

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    subTitle: '',
    desc: '',
  });
  const [editingBlog, setEditingBlog] = useState(null);

  // Fetch all blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Create a new blog
  const handleCreateBlog = async (e) => {
    e.preventDefault();
    await fetch('/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setFormData({ title: '', slug: '', subTitle: '', desc: '' });
  };

  // Handle update of existing blog
  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    await fetch(`/api/blogs?id=${editingBlog._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setEditingBlog(null);
    setFormData({ title: '', slug: '', subTitle: '', desc: '' });
  };

  // Handle delete of a blog
  const handleDeleteBlog = async (id) => {
    await fetch(`/api/blogs?id=${id}`, {
      method: 'DELETE',
    });
    setBlogs(blogs.filter((blog) => blog._id !== id));
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

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Management</h1>

      {/* Blog Form (Create or Update) */}
      <form
        className="mb-6 space-y-4 p-6 border border-gray-300 rounded-lg shadow-md"
        onSubmit={editingBlog ? handleUpdateBlog : handleCreateBlog}
      >
        <h2 className="text-2xl mb-4">
          {editingBlog ? 'Edit Blog' : 'Create Blog'}
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />

        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={formData.slug}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />

        <input
          type="text"
          name="subTitle"
          placeholder="SubTitle"
          value={formData.subTitle}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />

        <textarea
          name="desc"
          placeholder="Description"
          value={formData.desc}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
        >
          {editingBlog ? 'Update Blog' : 'Create Blog'}
        </button>
      </form>

      {/* List of Blogs */}
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="p-4 border border-gray-200 rounded-md">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p>{blog.subTitle}</p>
            <p>{blog.desc}</p>

            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => handleEditBlog(blog)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
              >
                Edit
              </button>

              <button
                onClick={() => handleDeleteBlog(blog._id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
