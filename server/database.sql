CREATE DATABASE admin_panel;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(255) NOT NULL
)

CREATE TABLE classes(
    id SERIAL PRIMARY KEY,
    "userId" INTEGER NOT NULL REFERENCES users(id),
    name VARCHAR(255) UNIQUE NOT NULL,
    description VARCHAR(255)
);