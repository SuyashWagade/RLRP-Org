import prisma from '../config/db.js';

export const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'All required fields must be filled' });
    }

    const contact = await prisma.contactMessage.create({
      data: { name, email, phone, subject, message },
    });

    res.status(201).json({ success: true, message: 'Your message has been sent successfully.', data: contact });
  } catch (error) {
    next(error);
  }
};

export const getContactMessages = async (req, res, next) => {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    next(error);
  }
};
