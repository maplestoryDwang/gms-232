DROP TABLE IF EXISTS minigamerecords;

CREATE TABLE minigamerecords(
        id              int not null auto_increment,
        charid          int,
        type            int,
        win             int,
        tie             int,
        loss            int,
        primary key (id),
        foreign key(charid) references characters(id) on delete cascade
);