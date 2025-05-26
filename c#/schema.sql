CREATE DATABASE EventPortal;
USE EventPortal;

CREATE TABLE Users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE Events (
  event_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL
);

CREATE TABLE Registrations (
  registration_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  event_id INT,
  FOREIGN KEY (user_id) REFERENCES Users(user_id),
  FOREIGN KEY (event_id) REFERENCES Events(event_id)
);
