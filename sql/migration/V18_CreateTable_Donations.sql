create table donations
(
    id                    bigint not null auto_increment,
    uuid                  varchar(40),
    claimed               boolean,
    claimedUserId         int,
    donationAmount        int,
    donationPoints        int,
    donationPointsBonus   int,
    primary key (id)
);