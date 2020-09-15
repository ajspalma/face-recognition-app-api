-- -------------------------------------------------------------
-- TablePlus 3.8.0(336)
--
-- https://tableplus.com/
--
-- Database: face-recognition-app
-- Generation Time: 2020-09-15 15:29:43.8800
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS login_id_seq;

-- Table Definition
CREATE TABLE "public"."login" (
    "id" int4 NOT NULL DEFAULT nextval('login_id_seq'::regclass),
    "hash" varchar(100) NOT NULL,
    "email" text NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS users_id_seq;

-- Table Definition
CREATE TABLE "public"."users" (
    "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    "name" varchar(100),
    "email" text NOT NULL,
    "entries" int8 DEFAULT 0,
    "joined" timestamp NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."login" ("id", "hash", "email") VALUES
('1', '$2a$10$x8/uD63/M.KdCSuYznZPbuPh9lQLZP8vZUQk7cf2jifg/MObJgtA.', 'ann@gmail.com'),
('3', '$2a$10$FZrE4LIK0KBezEI2AcUHW.8WwbYNhb9WGypDjX/PdQPCecnOYLoqu', 'anne@gmail.com'),
('4', '$2a$10$PCID92moSNzjZXzcEPx3K.faBOpZqNyXMBToE96dMYtvsoVSBBwG2', 'robert@gmail.com'),
('5', '$2a$10$QKf314GjwcppPz9QwDN2Hu00c2acJm8HtnROMIDKUtcaur9uG1o3a', 'jane@gmail.com'),
('6', '$2a$10$Lb4PNxePoRDswK04IJ68hewDDEgqB8yCdvYSZx8QRTwTa/fE8uY/m', 'wes@gmail.com');

INSERT INTO "public"."users" ("id", "name", "email", "entries", "joined") VALUES
('1', 'Sally', 'sally@gmail.com', '3', '2020-09-15 10:15:11.791'),
('2', 'John', 'john@gmail.com', '0', '2020-09-15 10:18:35.329'),
('5', 'Amy', 'amy@gmail.com', '0', '2020-09-15 10:27:37.047'),
('6', 'Ann', 'ann@gmail.com', '2', '2020-09-15 10:50:58.454'),
('7', 'Anne', 'anne@gmail.com', '6', '2020-09-15 10:51:53.145'),
('8', 'Robert', 'robert@gmail.com', '0', '2020-09-15 11:04:59.66'),
('9', 'Jane', 'jane@gmail.com', '1', '2020-09-15 11:08:29.851'),
('10', 'Wes', 'wes@gmail.com', '3', '2020-09-15 13:29:32.169');

