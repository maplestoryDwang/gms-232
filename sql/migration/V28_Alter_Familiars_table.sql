ALTER TABLE `characters`
  ADD COLUMN `familiarcodexmanager` INT NULL AFTER `petfunckeymap`;



ALTER TABLE `familiars`
  DROP COLUMN `vitality`,
  DROP COLUMN `expiration`,
  DROP COLUMN `idk5`,
  DROP COLUMN `idk4`,
  DROP COLUMN `fatigue`,
  DROP COLUMN `idk3`,
  DROP COLUMN `idk2`,
  DROP COLUMN `idk1`,
  ADD COLUMN `locked` TINYINT NULL AFTER `name`,
  ADD COLUMN `level` INT NULL DEFAULT 1 AFTER `locked`,
  ADD COLUMN `levelcap` INT NULL DEFAULT 5 AFTER `level`,
  ADD COLUMN `lvexp` INT NULL DEFAULT 0 AFTER `levelcap`,
  ADD COLUMN `grade` INT NULL DEFAULT 0 AFTER `lvmaxexp`,
  ADD COLUMN `gradeexp` INT NULL DEFAULT 0 AFTER `grade`,
  ADD COLUMN `attack` INT NULL DEFAULT 0 AFTER `gradeexp`,
  ADD COLUMN `defense` INT NULL DEFAULT 0 AFTER `attack`,
  ADD COLUMN `options` VARCHAR(255) NULL DEFAULT '0,0' AFTER `defense`;


create table familiarcodexmanager
(
  id                  bigint not null auto_increment,
  summongauge         int default 2000,
  familiarslots       int default 100,
  activefamiliars     varchar(255) default '0,0,0', # inlined array
  activebadges        varchar(255) default '-1,-1,-1,-1,-1,-1,-1,-1', # inlined array
  primary key (id)
);