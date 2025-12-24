drop table if exists rankingresults;

CREATE TABLE rankingresults (
    id              int not null auto_increment,
    charnames       varchar(555),
    amount          bigint default 0,
    amount2         bigint default 0,
    amount3         bigint default 0,
    rankingtime     int null,
    timestamp       datetime,
    rankingtype     int not null,

    primary key (id)
);