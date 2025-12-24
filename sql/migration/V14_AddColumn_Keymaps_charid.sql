delete from keymaps;
alter table characters drop foreign key characters_ibfk_9;
alter table characters drop column funckeymap_id;
delete from funckeymap;
alter table funckeymap add column charid int null;
create index funckeymap_charid_index on funckeymap(charid);