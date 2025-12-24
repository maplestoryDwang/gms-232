# Update FK types
alter table auction_items modify item bigint;
alter table cashiteminfos modify itemid bigint;

# Add FKs to AH/CS
alter table auction_items add foreign key (item) references items(id);
alter table cashiteminfos add foreign key (itemid) references items(id);

# Delete floating items
delete from items 
where 
inventoryid is null 
and trunkid is null
and id not in (select item from auction_items)
and id not in (select itemid from cashiteminfos);

# Delete CS items that are in floating inventories
delete from cashiteminfos 
where itemid in 
(select id from items
where inventoryid is not null
and inventoryid not in (select id from inventories));

# Delete floating items in floating inventories
delete from items 
where inventoryid is not null
and inventoryid not in (select id from inventories);

# Delete 
delete from auction_items where item not in (select id from items);
delete from cashiteminfos where itemid not in (select id from items);

# Add FKs to inventory/trunk for items
alter table items add foreign key (trunkid) references trunks(id) on delete cascade;
alter table items add foreign key (inventoryid) references inventories(id) on delete cascade;