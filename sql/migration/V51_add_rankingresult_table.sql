CREATE TABLE rankingresults (
    id              int not null auto_increment,
    charid          int null,
    charname        varchar(255),
    amount          bigint default 0,
    amount2         bigint default 0,
    amount3         bigint default 0,
    rankingtime     int null,
    timestamp       datetime,
    rankingtype     int not null,

    primary key (id)
);