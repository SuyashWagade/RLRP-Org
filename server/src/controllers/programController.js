import prisma from '../config/db.js';

export const getPrograms = async (req, res, next) => {
  try {
    const programs = await prisma.program.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, count: programs.length, data: programs });
  } catch (error) {
    next(error);
  }
};

export const getProgramById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const program = await prisma.program.findUnique({
      where: { id },
      include: { donations: true },
    });

    if (!program) {
      return res.status(404).json({ success: false, message: 'Program not found' });
    }

    res.json({ success: true, data: program });
  } catch (error) {
    next(error);
  }
};

export const createProgram = async (req, res, next) => {
  try {
    const { title, category, description, targetAmount, imageUrl } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : imageUrl;

    const newProgram = await prisma.program.create({
      data: {
        title,
        category,
        description,
        targetAmount: parseFloat(targetAmount) || 0,
        imageUrl: image,
      },
    });

    res.status(201).json({ success: true, data: newProgram });
  } catch (error) {
    next(error);
  }
};

export const updateProgram = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, category, description, targetAmount, raisedAmount, status, imageUrl } = req.body;

    const dataToUpdate = {
      ...(title && { title }),
      ...(category && { category }),
      ...(description && { description }),
      ...(targetAmount !== undefined && { targetAmount: parseFloat(targetAmount) }),
      ...(raisedAmount !== undefined && { raisedAmount: parseFloat(raisedAmount) }),
      ...(status && { status }),
    };

    if (req.file) {
      dataToUpdate.imageUrl = `/uploads/${req.file.filename}`;
    } else if (imageUrl) {
      dataToUpdate.imageUrl = imageUrl;
    }

    const updatedProgram = await prisma.program.update({
      where: { id },
      data: dataToUpdate,
    });

    res.json({ success: true, data: updatedProgram });
  } catch (error) {
    next(error);
  }
};

export const deleteProgram = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.program.delete({ where: { id } });
    res.json({ success: true, message: 'Program deleted successfully' });
  } catch (error) {
    next(error);
  }
};
