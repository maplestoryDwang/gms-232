drop table if exists npc;

CREATE TABLE `npc` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `npcid` int(11) DEFAULT NULL,
   `mapid` int(11) DEFAULT NULL,
   `x` int(11) DEFAULT NULL,
   `y` int(11) DEFAULT NULL,
   `cy` int(11) DEFAULT NULL,
   `rx0` int(11) DEFAULT NULL,
   `rx1` int(11) DEFAULT NULL,
   `fh` int(11) DEFAULT NULL,
   PRIMARY KEY (`id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

##Frederick in FM
INSERT INTO npc (npcid, mapid, x, y, cy, rx0, rx1, fh)
VALUES (9030000, 910000000, -857, -184, -176, -907, -807, 81);  