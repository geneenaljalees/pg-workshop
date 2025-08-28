BEGIN;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL
);

INSERT INTO users (name, location) VALUES ('geneen', 'gaza');
INSERT INTO users (name, location) VALUES ('aya', 'gaza');
INSERT INTO users (name, location) VALUES ('baraa', 'gaza');

COMMIT;