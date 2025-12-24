DROP TABLE IF EXISTS accountdailyentries;
create table accountdailyentries
(
    id            int not null auto_increment,
    accId         int,
    monsterparkentries int default -1,
    evolabentries int default -1,
    dojoentries int default -1,
    pqentries int default -1,
    whipthewhelpsquest int default -1,
    defeatgoldenwyvernquest int default -1,
    primary key (id),
    foreign key (accid) references accounts (id) on delete cascade
);
create index ade_accId on accountdailyentries(accId);

DROP TABLE IF EXISTS contentcooldowns;
create table contentcooldowns
(
    id          int not null auto_increment,
    content     varchar(255),
    startDate 	datetime,
    primary key (id)
);
