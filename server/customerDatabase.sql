

DROP TABLE IF EXISTS customers;

CREATE TABLE IF NOT EXISTS customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    ic_number VARCHAR(14) NOT NULL,
    date_of_birth DATE NOT NULL,
    address VARCHAR(100),
    address_country ENUM('Malaysia', 'Singapore') NOT NULL,
    address_postcode VARCHAR(20)
);

-- Insert sample data into the customers table
INSERT INTO customers (name, ic_number, date_of_birth, address, address_country, address_postcode) VALUES
('John Doe', '12345678901234', '1980-01-01', '123 Main St', 'Malaysia', '12345'),
('Jane Smith', '23456789012345', '1985-02-15', '456 Elm St', 'Singapore', '54321'),
('Michael Johnson', '34567890123456', '1990-03-20', '789 Maple Ave', 'Malaysia', '67890'),
('Emily Brown', '45678901234567', '1982-04-25', '890 Oak Blvd', 'Singapore', '09876'),
('David Lee', '56789012345678', '1988-05-10', '567 Pine Rd', 'Malaysia', '45678'),
('Sarah Wilson', '67890123456789', '1995-06-30', '234 Cedar Ln', 'Singapore', '76543'),
('Chris Taylor', '78901234567890', '1987-07-05', '901 Birch Dr', 'Malaysia', '23456'),
('Amanda Clark', '89012345678901', '1984-08-12', '345 Oakwood Ave', 'Singapore', '65432'),
('Daniel Martinez', '90123456789012', '1979-09-18', '678 Maplewood St', 'Malaysia', '54321'),
('Jessica White', '01234567890123', '1993-10-22', '987 Cherry Ln', 'Singapore', '32109'),
('Patrick Garcia', '12345678901234', '1981-11-14', '345 Walnut Dr', 'Malaysia', '43210'),
('Samantha Nguyen', '23456789012345', '1986-12-03', '567 Cedar Ave', 'Singapore', '21098'),
('Kevin Hernandez', '34567890123456', '1989-01-28', '789 Elmwood Rd', 'Malaysia', '87654'),
('Olivia Perez', '45678901234567', '1994-02-09', '123 Hickory St', 'Singapore', '76543'),
('Andrew Smith', '56789012345678', '1983-03-17', '456 Pinecrest Blvd', 'Malaysia', '65432'),
('Jennifer Davis', '67890123456789', '1991-04-05', '678 Oak Hill Ave', 'Singapore', '54321'),
('Matthew Wilson', '78901234567890', '1980-05-19', '890 Maple Ln', 'Malaysia', '43210'),
('Lauren Martin', '89012345678901', '1985-06-24', '234 Cedarwood Dr', 'Singapore', '32109'),
('Joshua Anderson', '90123456789012', '1992-07-11', '567 Oakwood Rd', 'Malaysia', '21098'),
('Ashley Thompson', '01234567890123', '1978-08-06', '789 Pinecrest Ave', 'Singapore', '09876'),
('Brandon Walker', '12345678901234', '1984-09-02', '901 Hickory Ln', 'Malaysia', '98765'),
('Hannah Harris', '23456789012345', '1989-10-15', '123 Elm Ave', 'Singapore', '87654'),
('Tyler Martinez', '34567890123456', '1986-11-30', '456 Maplewood Blvd', 'Malaysia', '76543'),
('Megan Rodriguez', '45678901234567', '1993-12-21', '789 Oak Hill Rd', 'Singapore', '65432'),
('Justin Lewis', '56789012345678', '1981-01-07', '901 Birchwood Dr', 'Malaysia', '54321'),
('Kayla Allen', '67890123456789', '1988-02-18', '234 Cedarcrest Ave', 'Singapore', '43210'),
('Nicholas Young', '78901234567890', '1987-03-03', '567 Pine Ave', 'Malaysia', '32109'),
('Stephanie King', '89012345678901', '1982-04-16', '890 Maple Rd', 'Singapore', '21098'),
('Ryan Scott', '90123456789012', '1990-05-31', '123 Oakwood Dr', 'Malaysia', '09876');