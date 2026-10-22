CREATE DATABASE IF NOT EXISTS personalwebsite;

USE personalwebsite;

-- =========================
-- PAYMENTS TABLE
-- =========================

CREATE TABLE IF NOT EXISTS payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    payment_provider VARCHAR(50),
    payment_reference VARCHAR(255),
    card_last_four CHAR(4),
    expiration_date DATE
);

-- =========================
-- USER TABLE
-- =========================

CREATE TABLE IF NOT EXISTS `User` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    payment_id INT,

    CONSTRAINT fk_user_payment
        FOREIGN KEY (payment_id)
        REFERENCES payments(id)
        ON DELETE SET NULL
);

-- =========================
-- CONTACT TABLE
-- =========================

CREATE TABLE IF NOT EXISTS contact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    message TEXT NOT NULL
);

-- =========================
-- VERIFY TABLES
-- =========================

SHOW TABLES;

DESCRIBE `User`;
DESCRIBE contact;
DESCRIBE payments;