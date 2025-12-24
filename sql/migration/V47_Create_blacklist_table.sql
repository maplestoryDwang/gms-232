CREATE TABLE blacklist (
   id              int not null auto_increment,
   accountid       int null,
   tab             int null,
   targetname      varchar(45) null,
   nickname        varchar(45) null,
   charid          int null,
   guildid         int null,

   primary key (id),
   foreign key (accountid) references accounts (id) on delete cascade
);