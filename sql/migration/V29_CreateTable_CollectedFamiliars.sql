create table collectedfamiliars
(
    charid      int,
    familiarId  int,
    primary key (charid, familiarId),
    foreign key (charid) references characters (id) on delete cascade
);