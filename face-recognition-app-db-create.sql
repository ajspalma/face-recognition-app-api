CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email TEXT NOT NULL,
    entries BIGINT DEFAULT 0,
    joined TIMESTAMP NOT NULL
);

CREATE TABLE login (
    id SERIAL PRIMARY KEY,
    hash VARCHAR(100) NOT NULL,
    email TEXT NOT NULL
);