import prisma from '../config/db.js';

export const getEvents = async (req, res, next) => {
  try {
    const events = await prisma.event.findMany({
      orderBy: { date: 'asc' },
    });
    res.json({ success: true, count: events.length, data: events });
  } catch (error) {
    next(error);
  }
};

export const createEvent = async (req, res, next) => {
  try {
    const { title, description, date, location, imageUrl } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : imageUrl;

    const event = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        location,
        imageUrl: image,
      },
    });

    res.status(201).json({ success: true, data: event });
  } catch (error) {
    next(error);
  }
};
