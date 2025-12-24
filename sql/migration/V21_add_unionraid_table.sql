CREATE TABLE unionraid (
       `id` INT NOT NULL AUTO_INCREMENT,
       `totaldamagedone` BIGINT(20) NULL DEFAULT 0,
       `curboss` INT NULL DEFAULT 0,
       `curshield` BIGINT(20) NULL DEFAULT 0,
       `curhp` BIGINT(20) NULL DEFAULT 0,
       `claimedcoins` INT NULL DEFAULT 0,
       `lasttime` BIGINT(20) NULL DEFAULT 0,
       PRIMARY KEY (`id`)
);


ALTER TABLE accounts
ADD COLUMN `unionraidid` INT NULL DEFAULT NULL AFTER `unionid`;