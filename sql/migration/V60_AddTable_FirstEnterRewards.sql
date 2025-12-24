CREATE TABLE first_enter_rewards(
	id				int not null auto_increment,
    accountId 		int,
    charId			int default 0,
    rewardType 		varchar(255),
    itemId 			int default 0,
    quantity 		int default 1,
	descr		 	varchar(8000),
    expireTime 		datetime,
	primary key (id)
);