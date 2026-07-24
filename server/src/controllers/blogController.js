const mockBlogs = [
  { id: 1, title: 'How Solar Water Wells are Changing Villages', date: 'July 15, 2026', author: 'Team RLRP', excerpt: 'Clean water access has led to a 40% drop in waterborne diseases in our partner villages.' },
  { id: 2, title: 'Empowering Girls Through Coding Bootcamps', date: 'July 10, 2026', author: 'Priya Sharma', excerpt: 'Our rural tech literacy program has graduated over 500 young female developers.' },
];

export const getBlogs = (req, res) => {
  res.status(200).json({ success: true, count: mockBlogs.length, data: mockBlogs });
};

export const getBlogById = (req, res) => {
  const blog = mockBlogs.find((b) => b.id === parseInt(req.params.id, 10));
  if (!blog) {
    return res.status(404).json({ success: false, message: 'Blog post not found' });
  }
  res.status(200).json({ success: true, data: blog });
};
