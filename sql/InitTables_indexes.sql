create index idx_characterstats_name on characterstats (name);
create index idx_auction_items_endDate on auction_items (endDate);

create index idx_tt_uuid on trade_transaction (uuid);
create index idx_tt_fileTime on trade_transaction (fileTime);
create index idx_tt_characterIdFrom on trade_transaction (characterIdFrom);
create index idx_tt_characterIdTo on trade_transaction (characterIdTo);
create index idx_tt_characterNameFrom on trade_transaction (characterNameFrom);
create index idx_tt_characterNameTo on trade_transaction (characterNameTo);
create index idx_tt_itemId on trade_transaction (itemId);
create index idx_tt_templateItemId on trade_transaction (templateItemId);
create index idx_tt_money on trade_transaction (money);

create index idx_fer_accountId on first_enter_rewards (accountId);
create index idx_fer_charId on first_enter_rewards (charId);

create index idx_chr_accId on characters (accid);
create index idx_acc_worldId on accounts (worldid);
create index idx_chr_fcm on characters (familiarcodexmanager);
create index idx_ade_accId on accountdailyentries(accId);

create index idx_inventories_index on items(inventoryid);
create index idx_trunk_index on items(trunkid);
create index idx_bagindex_index on items(bagindex);

create index idx_characterstats_characterid on characterstats (characterid);

create index idx_funckeymap_charid on funckeymap(charid);