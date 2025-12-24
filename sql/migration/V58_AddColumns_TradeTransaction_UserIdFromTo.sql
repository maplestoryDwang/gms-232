ALTER TABLE trade_transaction ADD COLUMN userIdTo int not null default 0;
ALTER TABLE trade_transaction ADD COLUMN userIdFrom int not null default 0;

create index tt_userIdTo on trade_transaction (userIdTo);
create index tt_userIdFrom on trade_transaction (userIdFrom);
