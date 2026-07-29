import prisma from '../config/db.js';

export const getBlogPosts = async (req, res, next) => {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, count: posts.length, data: posts });
  } catch (error) {
    next(error);
  }
};

export const getBlogPostBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const post = await prisma.blogPost.findUnique({
      where: { slug },
    });

    if (!post) {
      return res.status(404).json({ success: false, message: 'Article not found' });
    }

    res.json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
};

export const createBlogPost = async (req, res, next) => {
  try {
    const { title, content, author, category, imageUrl } = req.body;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const image = req.file ? `/uploads/${req.file.filename}` : imageUrl;

    const post = await prisma.blogPost.create({
      data: { title, slug, content, author, category, imageUrl: image },
    });

    res.status(201).json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
};

export const deleteBlogPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.blogPost.delete({ where: { id } });
    res.json({ success: true, message: 'Article deleted successfully' });
  } catch (error) {
    next(error);
  }
};
