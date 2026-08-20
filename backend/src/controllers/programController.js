import pool from '../config/db.js';

const mockPrograms = [
  {
    id: 1,
    title: "Care For Patients",
    category: "Hospital Support",
    slug: "care-for-patients",
    description: "No patient should have to suffer alone. We support underprivileged patients at YCM Hospital with meals, medical equipment and essential care.",
    metrics: "500,000+ meals distributed",
    target_location: "YCM Hospital, Pune",
  },
  {
    id: 2,
    title: "Rescue & Rehabilitation",
    category: "Shelter & Restoration",
    slug: "rescue-rehabilitation",
    description: "We rescue homeless people from the streets of Pune and bring them to Savali Nivara Kendra. We provide shelter, care and work towards reuniting them with their families.",
    metrics: "1,000+ admissions, 5,000+ reunifications",
    target_location: "Savali Nivara Kendra, Pune",
  },
  {
    id: 3,
    title: "Nutrition For Tribal Children",
    category: "Child Development",
    slug: "nutrition-tribal-children",
    description: "We provide nutrition kits to children from tribal and semi-tribal areas to fight malnutrition and help them grow healthy, learn and build a better future.",
    metrics: "500+ monthly nutrition kits",
    target_location: "Tribal hamlets, Pune & Western Ghats",
  }
];

export const getPrograms = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM programs ORDER BY id ASC');
    if (result.rows && result.rows.length > 0) {
      return res.json({ success: true, data: result.rows });
    }
    return res.json({ success: true, data: mockPrograms });
  } catch (error) {
    // Fallback to mock data if DB is not populated yet
    return res.json({ success: true, data: mockPrograms });
  }
};

export const getProgramBySlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const result = await pool.query('SELECT * FROM programs WHERE slug = $1', [slug]);
    if (result.rows && result.rows.length > 0) {
      return res.json({ success: true, data: result.rows[0] });
    }
    const found = mockPrograms.find(p => p.slug === slug);
    if (found) return res.json({ success: true, data: found });
    return res.status(404).json({ success: false, message: 'Program not found' });
  } catch (error) {
    const found = mockPrograms.find(p => p.slug === slug);
    if (found) return res.json({ success: true, data: found });
    return res.status(404).json({ success: false, message: 'Program not found' });
  }
};
