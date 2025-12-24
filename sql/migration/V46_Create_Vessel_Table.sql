CREATE TABLE vessel (
      id              int not null auto_increment,
      charid          int,
      type            int not null default 0,
      level           int default 1,
      exp             int default 0,
      energy          int default 100,
      primary key (id),
      foreign key (charid) references characters (id) on delete cascade
);