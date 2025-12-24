create table ignoreditems (
    charid int,
    ignoreditem int,
    primary key (charid, ignoreditem),
    foreign key (charid) references characters (id) on delete cascade
)