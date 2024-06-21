CREATE DATABASE remoodelacio;

CREATE TABLE clases(
  id text PRIMARY KEY,
  name text,
  teacher text,
  classCode text                           
);

CREATE TABLE tasks(
  id text PRIMARY KEY NOT NULL,
  name text NOT NULL,
  description text NOT NULL,
  classId text NOT NULL,
  teacher text NOT NULL,
  createdAt text NOT NULL,
  updatedAt text NOT NULL
);

INSERT INTO tasks(id, name, description, classId, teacher, createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5, $6, $7);