CREATE TABLE emoticonshortcuts (
  id              int not null auto_increment,
  charid          int null,
  emoticonid      int null,
  position        int null,
  shortcut        varchar(20) null,
  primary key (id),
  foreign key (charid) references characters (id) on delete cascade
);