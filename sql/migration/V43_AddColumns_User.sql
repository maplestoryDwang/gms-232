ALTER TABLE users ADD COLUMN resetKey varchar(255) NULL;
ALTER TABLE users ADD COLUMN lastReset datetime NULL;
ALTER TABLE users ADD COLUMN resetType int NULL;