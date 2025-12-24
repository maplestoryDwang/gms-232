alter table accounts add column nxPrepaid int default 0;

UPDATE accounts acc 
SET acc.nxPrepaid = (SELECT u.nxPrepaid 
FROM users u
WHERE u.id = acc.userid);


alter table users drop column nxPrepaid;
