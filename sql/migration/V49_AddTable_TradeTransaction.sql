CREATE TABLE trade_transaction (
    id                      bigint not null auto_increment,
    uuid                    varchar(255) not null,
    fileTime                datetime not null,
    characterIdFrom         int not null,
    characterIdTo           int not null,
    characterNameFrom       varchar(255) not null,
    characterNameTo         varchar(255) not null,
    itemId                  bigint,
    templateItemId          int,
    description             varchar(255),
    money                   bigint,
    tradeTransactionType    varchar(255),
    primary key (id)
);

create index tt_uuid on trade_transaction (uuid);
create index tt_fileTime on trade_transaction (fileTime);
create index tt_characterIdFrom on trade_transaction (characterIdFrom);
create index tt_characterIdTo on trade_transaction (characterIdTo);
create index tt_characterNameFrom on trade_transaction (characterNameFrom);
create index tt_characterNameTo on trade_transaction (characterNameTo);
create index tt_itemId on trade_transaction (itemId);
create index tt_templateItemId on trade_transaction (templateItemId);
create index tt_money on trade_transaction (money);