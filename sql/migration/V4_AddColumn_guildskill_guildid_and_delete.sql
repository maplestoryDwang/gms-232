delete from guildskill;
drop table guildskill;

alter table guildskill add column guildid int;
alter table guildskill add foreign key (guildid) references guilds(id);