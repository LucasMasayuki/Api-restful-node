CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    disease VARCHAR(255) NOT NULL
);

INSERT INTO patients (name, disease)
VALUES  ('Fulano', 'Corona virus');