-- RLRP Savali Nivara Kendra PostgreSQL Database Schema (2010-2026)

-- Drop existing tables if re-initializing
DROP TABLE IF EXISTS contact_messages CASCADE;
DROP TABLE IF EXISTS donations CASCADE;
DROP TABLE IF EXISTS impact_metrics CASCADE;
DROP TABLE IF EXISTS programs CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- 1. Users / Admin Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'admin',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Core NGO Work Programs Table
CREATE TABLE programs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    category VARCHAR(100) NOT NULL,
    slug VARCHAR(150) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    metrics_summary VARCHAR(255),
    target_location VARCHAR(200),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Impact Metrics & Statistics Table (2010-2026)
CREATE TABLE impact_metrics (
    id SERIAL PRIMARY KEY,
    metric_value VARCHAR(50) NOT NULL,
    metric_label VARCHAR(255) NOT NULL,
    display_order INT DEFAULT 0,
    icon_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Donations Table
CREATE TABLE donations (
    id SERIAL PRIMARY KEY,
    donor_name VARCHAR(150) NOT NULL,
    donor_email VARCHAR(150) NOT NULL,
    donor_phone VARCHAR(50),
    pan_number VARCHAR(20),
    amount DECIMAL(10, 2) NOT NULL,
    payment_method VARCHAR(50) DEFAULT 'upi',
    transaction_id VARCHAR(100),
    is_tax_receipt_generated BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Contact Inquiries Table
CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(200) DEFAULT 'General Inquiry',
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'unread',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
