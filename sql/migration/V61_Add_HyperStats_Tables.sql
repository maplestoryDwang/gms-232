CREATE TABLE hyperstatsmanager(
      id              int not null auto_increment,
      charid          int null,
      currentpreset   int not null default 0,
      primary key (id),
      foreign key(charid) references characters(id) on delete cascade
);

CREATE TABLE hyperstatinfos(
      id              int not null auto_increment,
      hsmid           int null,
      preset          int,
      skillid         int,
      lv              int,
      primary key (id),
      foreign key(hsmid) references hyperstatsmanager(id) on delete cascade
);