alter table bbs_records drop column subject;
alter table bbs_records drop column icon;
alter table bbs_records add column isAnnouncement boolean default 0;

create table bbs_upvotes (
    recordId int,
    upvoteId int,
    primary key (recordId, upvoteId),
    foreign key (recordId) references bbs_records(id) on delete cascade
);

alter table guilds drop column bbsNotice;