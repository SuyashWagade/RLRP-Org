export const handleDonation = (req, res) => {
  const { amount, currency, donorName } = req.body;
  if (!amount) {
    return res.status(400).json({ success: false, message: 'Donation amount is required' });
  }

  res.status(201).json({
    success: true,
    message: 'Donation processed successfully',
    data: {
      transactionId: 'TXN_' + Math.random().toString(36).substring(2, 10).toUpperCase(),
      amount,
      currency: currency || 'USD',
      donorName: donorName || 'Anonymous',
      timestamp: new Date().toISOString(),
    },
  });
};
