/* Add zeroinfo column */
alter table avatardata
add column zeroinfo int null default null;


/* Create zeroinfo table */
create table zeroinfo
(
  id	int not null auto_increment,
  betastate boolean,
  subhp int,
  submhp int,
  submp int,
  submmp int default 100,
  subskin int,
  subhair int,
  subface int,
  dbcharzerolinkcashpart	int null default 0,
  mixbasehaircolor int null default 0,
  mixaddhaircolor int null default 0,
  mixhairbaseprob int null default 0,
  wpcoin int null default 0,
  primary key (id)
);