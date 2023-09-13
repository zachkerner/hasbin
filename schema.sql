CREATE DATABASE recycledb;

CREATE TABLE bin(
  id uuid PRIMARY KEY,
  bin_path VARCHAR(255) NOT NULL,
  created_at TIMESTAMP
);

CREATE TABLE request(
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  bin_id uuid FOREIGN KEY REFERENCES bin(id),
  mongo_id VARCHAR(255) NOT NULL,
  received_at TIMESTAMP,
  http_method VARCHAR(8),
  http_path VARCHAR(255)
);
