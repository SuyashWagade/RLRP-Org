import pool from '../config/db.js';

const mockImpactStats = [
  { metric: "100+", label: "People currently living at Savali Nivara" },
  { metric: "1,000+", label: "People given admission & shelter" },
  { metric: "422+", label: "People reunited with their families" },
  { metric: "122", label: "People now working independently" },
  { metric: "500,000+", label: "Meals distributed in hospitals" },
  { metric: "2,900+", label: "Provided medical care & equipment" },
  { metric: "1,200+", label: "Last rites of unknown patients in hospitals" },
  { metric: "50+", label: "Students supported throughout the academic year" },
  { metric: "5,000+", label: "People sent back home and reunited with their families" }
];

export const getImpactStats = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM impact_metrics ORDER BY display_order ASC');
    if (result.rows && result.rows.length > 0) {
      return res.json({ success: true, data: result.rows });
    }
    return res.json({ success: true, data: mockImpactStats });
  } catch (error) {
    return res.json({ success: true, data: mockImpactStats });
  }
};
