// pages/api/blogs/index.js
import connectToDatabase from '../../middleware/mongoose';
import Blog from '../../models/Blogs';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  // Handling different methods using if-else
  if (method === 'GET') {
    try {
      // If an ID is provided in the query params, get a specific blog
      if (req.query.id) {
        const blog = await Blog.findById(req.query.id);
        if (!blog) {
          return res.status(404).json({ message: 'Blog not found' });
        }
        return res.status(200).json(blog);
      }

      // If no ID, get all blogs
      const blogs = await Blog.find();
      return res.status(200).json(blogs);
    } catch (error) {
      return res.status(500).json({ message: 'Server Error', error });
    }
  } else if (method === 'POST') {
    try {
      // Create a new blog
      const { title, slug, subTitle, desc } = req.body;
      const newBlog = new Blog({ title, slug, subTitle, desc });
      await newBlog.save();
      return res.status(201).json(newBlog);
    } catch (error) {
      return res.status(500).json({ message: 'Server Error', error });
    }
  } else if (method === 'PUT') {
    try {
      // Update an existing blog
      const { id } = req.query;
      if (!id) {
        return res.status(400).json({ message: 'Blog ID is required for update' });
      }

      const { title, slug, subTitle, desc } = req.body;
      const updatedBlog = await Blog.findByIdAndUpdate(
        id,
        { title, slug, subTitle, desc },
        { new: true }
      );

      if (!updatedBlog) {
        return res.status(404).json({ message: 'Blog not found' });
      }

      return res.status(200).json(updatedBlog);
    } catch (error) {
      return res.status(500).json({ message: 'Server Error', error });
    }
  } else if (method === 'DELETE') {
    try {
      // Delete a blog
      const { id } = req.query;
      if (!id) {
        return res.status(400).json({ message: 'Blog ID is required for delete' });
      }

      const deletedBlog = await Blog.findByIdAndDelete(id);
      if (!deletedBlog) {
        return res.status(404).json({ message: 'Blog not found' });
      }

      return res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Server Error', error });
    }
  } else {
    // Method Not Allowed
    return res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
}
