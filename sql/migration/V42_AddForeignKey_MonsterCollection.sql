drop table monster_collection;
alter table monster_collection_mobs add foreign key (collectionid) references monster_collections(id) on delete cascade;
alter table monster_collection_explorations add foreign key (collectionid) references monster_collections(id) on delete cascade;
alter table monster_collection_rewards add foreign key (collectionid) references monster_collections(id) on delete cascade;