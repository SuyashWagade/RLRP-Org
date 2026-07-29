import prisma from '../config/db.js';

export const getDonations = async (req, res, next) => {
  try {
    const donations = await prisma.donation.findMany({
      include: { program: { select: { title: true } } },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, count: donations.length, data: donations });
  } catch (error) {
    next(error);
  }
};

export const createDonation = async (req, res, next) => {
  try {
    const { donorName, donorEmail, donorPhone, amount, programId, transactionId } = req.body;

    if (!donorName || !donorEmail || !amount) {
      return res.status(400).json({ success: false, message: 'Name, email, and amount are required' });
    }

    const donation = await prisma.donation.create({
      data: {
        donorName,
        donorEmail,
        donorPhone,
        amount: parseFloat(amount),
        programId: programId || null,
        transactionId: transactionId || `TXN_${Date.now()}`,
        paymentStatus: 'COMPLETED',
      },
    });

    if (programId) {
      await prisma.program.update({
        where: { id: programId },
        data: { raisedAmount: { increment: parseFloat(amount) } },
      });
    }

    res.status(201).json({ success: true, data: donation });
  } catch (error) {
    next(error);
  }
};

export const getDonationStats = async (req, res, next) => {
  try {
    const totalDonations = await prisma.donation.aggregate({
      _sum: { amount: true },
      _count: { id: true },
    });

    const totalPrograms = await prisma.program.count();
    const totalVolunteers = await prisma.volunteer.count();

    res.json({
      success: true,
      stats: {
        totalRaised: totalDonations._sum.amount || 0,
        totalDonors: totalDonations._count.id || 0,
        totalPrograms,
        totalVolunteers,
      },
    });
  } catch (error) {
    next(error);
  }
};
