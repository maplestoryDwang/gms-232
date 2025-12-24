
CREATE TABLE soulcollection (
       id              int not null auto_increment,
       accountid       int null,
       bosssoul        int null,
       flag            int null,

       primary key (id),
       foreign key (accountid) references accounts (id) on delete cascade
);