update items set sockets = '0,0,0' where sockets is not null;

delete ai from auction_items ai
inner join items i on ai.item = i.id
where i.itemid = 2430692
    or i.itemid = 2930000
    or i.itemid = 5750001
    or (i.itemid >= 3060000 and i.itemid < 3070000);

delete from items where itemid = 2430692 
or itemid = 2930000
or itemid = 5750001
or (itemid >= 3060000 and itemid < 3070000);