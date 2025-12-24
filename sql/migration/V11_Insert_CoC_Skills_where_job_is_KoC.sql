INSERT INTO swordie.skills (charid, skillid, rootid, maxlevel, currentlevel, masterlevel)
SELECT characterid, ((s.job * 10000) + 1000), s.job, 30, 30, 30
FROM characterstats as s 
WHERE s.job = 1112 OR s.job = 1212 OR s.job = 1312 OR s.job = 1412 OR s.job = 1512