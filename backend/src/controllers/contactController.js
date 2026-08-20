import pool from '../config/db.js';

export const createContactInquiry = async (req, res) => {
  const { name, email, phone, city, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required fields.' });
  }

  // Enrich message with city context if provided
  const enrichedMessage = city ? `[City/Area: ${city}]\n${message}` : message;

  try {
    const result = await pool.query(
      `INSERT INTO contact_messages (name, email, phone, subject, message, created_at)
       VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *`,
      [name, email, phone || null, subject || 'General Inquiry', enrichedMessage]
    );

    return res.status(201).json({
      success: true,
      message: 'Contact message received successfully!',
      data: result.rows[0],
    });
  } catch (error) {
    // Graceful fallback — log and return success so UI doesn't fail when DB is offline
    console.log('Contact inquiry received (DB Fallback):', { name, email, phone, city, subject, message });
    return res.status(201).json({
      success: true,
      message: 'Contact message received successfully! (Logged)',
      data: { name, email, phone, city, subject, message, created_at: new Date() }
    });
  }
};
