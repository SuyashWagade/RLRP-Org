-- Seed Data for RLRP Savali Nivara Kendra PostgreSQL Database

-- 1. Insert Core Work Programs
INSERT INTO programs (title, category, slug, description, metrics_summary, target_location) VALUES
(
    'Care For Patients',
    'Hospital Support',
    'care-for-patients',
    'No patient should have to suffer alone. We support underprivileged patients at YCM Hospital with meals, medical equipment and essential care.',
    '500,000+ meals distributed',
    'YCM Hospital, Pimpri, Pune'
),
(
    'Rescue & Rehabilitation',
    'Shelter & Restoration',
    'rescue-rehabilitation',
    'We rescue homeless people from the streets of Pune and bring them to Savali Nivara Kendra. We provide shelter, care and work towards reuniting them with their families or helping them become independent.',
    '1,000+ admissions & 5,000+ family reunifications',
    'Savali Nivara Kendra, Pune'
),
(
    'Nutrition For Tribal Children',
    'Child Development',
    'nutrition-tribal-children',
    'We provide nutrition kits to children from tribal and semi-tribal areas to fight malnutrition and help them grow healthy, learn and build a better future.',
    '500+ monthly nutrition kits distributed',
    'Tribal belts of Western Maharashtra'
);

-- 2. Insert Official Impact Metrics (2010 to 2026)
INSERT INTO impact_metrics (metric_value, metric_label, display_order, icon_name) VALUES
('100+', 'People currently living at Savali Nivara', 1, 'Users'),
('1,000+', 'People given admission & shelter', 2, 'Home'),
('422+', 'People reunited with their families', 3, 'HeartHandshake'),
('122', 'People now working independently', 4, 'Briefcase'),
('500,000+', 'Meals distributed in hospitals', 5, 'Utensils'),
('2,900+', 'Provided medical care & equipment', 6, 'Stethoscope'),
('1,200+', 'Last rites of unknown patients in hospitals', 7, 'Flame'),
('50+', 'Students supported throughout the academic year', 8, 'GraduationCap'),
('5,000+', 'People sent back home and reunited with their families', 9, 'PlaneTakeoff');
