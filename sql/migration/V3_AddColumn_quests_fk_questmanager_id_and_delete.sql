alter table quests add column questmanager_id bigint;
alter table quests add foreign key (questmanager_id) references questmanagers(id) on delete cascade;

delete from questlists;
delete from quests;
drop table questlists;