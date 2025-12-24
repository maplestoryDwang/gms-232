CREATE TABLE emoticons (
    id           int not null auto_increment,
    charid       int null,
    emoticonid   int null,
    position     int null,
    primary key (id),
    foreign key (charid) references characters (id) on delete cascade
);