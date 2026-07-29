import prisma from '../config/db.js';

export const getGalleryImages = async (req, res, next) => {
  try {
    const images = await prisma.galleryImage.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, count: images.length, data: images });
  } catch (error) {
    next(error);
  }
};

export const uploadGalleryImage = async (req, res, next) => {
  try {
    const { title, category, caption, imageUrl } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : imageUrl;

    if (!imagePath) {
      return res.status(400).json({ success: false, message: 'Image file or URL is required' });
    }

    const newImage = await prisma.galleryImage.create({
      data: {
        title: title || 'RLRP Media',
        category: category || 'General',
        imageUrl: imagePath,
        caption: caption || '',
      },
    });

    res.status(201).json({ success: true, data: newImage });
  } catch (error) {
    next(error);
  }
};
