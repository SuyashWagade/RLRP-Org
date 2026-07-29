import prisma from '../config/db.js';

export const registerVolunteer = async (req, res, next) => {
  try {
    const { name, email, phone, skills, availability, notes } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, message: 'Name, email, and phone are required' });
    }

    const volunteer = await prisma.volunteer.create({
      data: { name, email, phone, skills, availability, notes },
    });

    res.status(201).json({ success: true, message: 'Volunteer application submitted successfully', data: volunteer });
  } catch (error) {
    next(error);
  }
};

export const getVolunteers = async (req, res, next) => {
  try {
    const volunteers = await prisma.volunteer.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, count: volunteers.length, data: volunteers });
  } catch (error) {
    next(error);
  }
};

export const updateVolunteerStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const updated = await prisma.volunteer.update({
      where: { id },
      data: { status, notes },
    });

    res.json({ success: true, data: updated });
  } catch (error) {
    next(error);
  }
};
