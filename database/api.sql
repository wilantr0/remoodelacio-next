/*
In Neon, databases are stored on branches. By default, a project has one branch and one database.
You can select the branch and database to use from the drop-down menus above.

Try generating sample data and querying it by running the example statements below, or click
New Query to clear the editor.
*/


CREATE TABLE IF NOT EXISTS users (
  id text PRIMARY KEY,
  name text NOT NULL UNIQUE,
  email text NOT NULL UNIQUE,
  password text NOT NULL,
  role text NOT NULL
);

CREATE TABLE IF NOT EXISTS clases(
  id text PRIMARY KEY,
  name text,
  teacher text references users(id),
  classCode text                           
);

CREATE TABLE IF NOT EXISTS tasks(
  id text PRIMARY KEY NOT NULL,
  name text NOT NULL,
  description text NOT NULL,
  classId text NOT NULL references clases(id),
  teacher text NOT NULL references users(id),
  createdAt text NOT NULL,
  updatedAt text NOT NULL
);