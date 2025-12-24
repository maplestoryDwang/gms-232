alter table guilds drop column joinsetting;
alter table guilds add column activeTimes int default 0;
alter table guilds add column mainActivity int default 0;
alter table guilds add column ageGroup int default 0;