# petitems
alter table items add name          varchar(255);
alter table items add tameness      smallint;
alter table items add repleteness   tinyint;
alter table items add petattribute  smallint;
alter table items add petskill      int;
alter table items add datedead      datetime;
alter table items add remainlife    int;
alter table items add attribute     smallint;
alter table items add activestate   tinyint;
alter table items add autobuffskill int;
alter table items add pethue        int;
alter table items add giantrate     smallint;
# equips
alter table items add title			   varchar(255);
alter table items add equippeddate     datetime;
alter table items add prevbonusexprate int;
alter table items add options          varchar(255);
alter table items add sockets          varchar(255);
alter table items add tuc              smallint;
alter table items add cuc              smallint;
alter table items add istr             smallint;
alter table items add idex             smallint;
alter table items add iint             smallint;
alter table items add iluk             smallint;
alter table items add imaxhp           smallint;
alter table items add imaxmp           smallint;
alter table items add ipad             smallint;
alter table items add imad             smallint;
alter table items add ipdd             smallint;
alter table items add imdd             smallint;
alter table items add iacc             smallint;
alter table items add ieva             smallint;
alter table items add icraft           smallint;
alter table items add ispeed           smallint;
alter table items add ijump            smallint;
alter table items add leveluptype      smallint;
alter table items add level            smallint;
alter table items add exp              smallint;
alter table items add durability       smallint;
alter table items add iuc              smallint;
alter table items add ipvpdamage       smallint;
alter table items add ireducereq       smallint;
alter table items add specialattribute smallint;
alter table items add durabilitymax    smallint;
alter table items add iincreq          smallint;
alter table items add growthenchant    smallint;
alter table items add psenchant        smallint;
alter table items add hyperupgrade     smallint;
alter table items add bdr              smallint;
alter table items add imdr             smallint;
alter table items add damr             smallint;
alter table items add statr            smallint;
alter table items add cuttable         smallint;
alter table items add exgradeoption    bigint;
alter table items add itemstate        smallint;
alter table items add grade            smallint;
alter table items add chuc             smallint;
alter table items add souloptionid     smallint;
alter table items add soulsocketid     smallint;
alter table items add souloption       smallint;
alter table items add rstr             smallint;
alter table items add rdex             smallint;
alter table items add rint             smallint;
alter table items add rluk             smallint;
alter table items add rlevel           smallint;
alter table items add rjob             smallint;
alter table items add rpop             smallint;
alter table items add specialgrade     int;
alter table items add fixedpotential   boolean;
alter table items add tradeblock       boolean;
alter table items add isonly           boolean;
alter table items add notsale          boolean;
alter table items add attackspeed      int;
alter table items add price            int;
alter table items add charmexp         int;
alter table items add expireonlogout   boolean;
alter table items add setitemid        int;
alter table items add exitem           boolean;
alter table items add equiptradeblock  boolean;
alter table items add islot            varchar(255);
alter table items add vslot            varchar(255);
alter table items add fixedgrade       int;
alter table items add nopotential      boolean;
alter table items add arc              smallint;
alter table items add symbolexp        int;
alter table items add symbollevel      smallint;
alter table items add bossreward       boolean;
alter table items add fstr             smallint;
alter table items add fdex             smallint;
alter table items add fint             smallint;
alter table items add fluk             smallint;
alter table items add fatt             smallint;
alter table items add fmatt            smallint;
alter table items add fdef             smallint;
alter table items add fhp              smallint;
alter table items add fmp              smallint;
alter table items add fspeed           smallint;
alter table items add fjump            smallint;
alter table items add fallstat         smallint;
alter table items add fboss            smallint;
alter table items add fdamage          smallint;
alter table items add flevel           smallint;
alter table items add superioreqp      boolean;
alter table items add android          int;
alter table items add androidgrade     int;

update items i
inner join petitems pi on pi.item_fk = i.id
set 
    i.itemid = pi.itemid,
    i.name = pi.name,
    i.level = pi.level,
    i.tameness = pi.tameness,
    i.repleteness = pi.repleteness,
    i.petattribute = pi.petattribute,
    i.petskill = pi.petskill,
    i.datedead = pi.datedead,
    i.remainlife = pi.remainlife,
    i.attribute = pi.attribute,
    i.activestate = pi.activestate,
    i.autobuffskill = pi.autobuffskill,
    i.pethue = pi.pethue,
    i.giantrate = pi.giantrate;
    
update items i
inner join equips e on e.item_fk = i.id
set
    i.equippeddate = e.equippeddate,     
    i.prevbonusexprate = e.prevbonusexprate, 
    i.options = e.options,          
    i.sockets = e.sockets,          
    i.tuc = e.tuc,              
    i.cuc = e.cuc,              
    i.istr = e.istr,             
    i.idex = e.idex,             
    i.iint = e.iint,             
    i.iluk = e.iluk,             
    i.imaxhp = e.imaxhp,           
    i.imaxmp = e.imaxmp,           
    i.ipad = e.ipad,             
    i.imad = e.imad,             
    i.ipdd = e.ipdd,             
    i.imdd = e.imdd,             
    i.iacc = e.iacc,             
    i.ieva = e.ieva,             
    i.icraft = e.icraft,           
    i.ispeed = e.ispeed,           
    i.ijump = e.ijump,            
    i.attribute = e.attribute,        
    i.leveluptype = e.leveluptype,      
    i.level = e.level,            
    i.exp = e.exp,              
    i.durability = e.durability,       
    i.iuc = e.iuc,              
    i.ipvpdamage = e.ipvpdamage,       
    i.ireducereq = e.ireducereq,       
    i.specialattribute = e.specialattribute, 
    i.durabilitymax = e.durabilitymax,    
    i.iincreq = e.iincreq,          
    i.growthenchant = e.growthenchant,    
    i.psenchant = e.psenchant,        
    i.hyperupgrade = e.hyperupgrade,     
    i.bdr = e.bdr,              
    i.imdr = e.imdr,             
    i.damr = e.damr,             
    i.statr = e.statr,            
    i.cuttable = e.cuttable,         
    i.exgradeoption = e.exgradeoption,    
    i.itemstate = e.itemstate,        
    i.grade = e.grade,            
    i.chuc = e.chuc,             
    i.souloptionid = e.souloptionid,     
    i.soulsocketid = e.soulsocketid,     
    i.souloption = e.souloption,       
    i.rstr = e.rstr,             
    i.rdex = e.rdex,             
    i.rint = e.rint,             
    i.rluk = e.rluk,             
    i.rlevel = e.rlevel,           
    i.rjob = e.rjob,             
    i.rpop = e.rpop,             
    i.specialgrade = e.specialgrade,     
    i.fixedpotential = e.fixedpotential,   
    i.tradeblock = e.tradeblock,       
    i.isonly = e.isonly,           
    i.notsale = e.notsale,          
    i.attackspeed = e.attackspeed,      
    i.price = e.price,            
    i.charmexp = e.charmexp,         
    i.expireonlogout = e.expireonlogout,   
    i.setitemid = e.setitemid,        
    i.exitem = e.exitem,           
    i.equiptradeblock = e.equiptradeblock,  
    i.islot = e.islot,            
    i.vslot = e.vslot,            
    i.fixedgrade = e.fixedgrade,       
    i.nopotential = e.nopotential,      
    i.arc = e.arc,              
    i.symbolexp = e.symbolexp,        
    i.symbollevel = e.symbollevel,      
    i.bossreward = e.bossreward,       
    i.fstr = e.fstr,             
    i.fdex = e.fdex,             
    i.fint = e.fint,             
    i.fluk = e.fluk,             
    i.fatt = e.fatt,             
    i.fmatt = e.fmatt,            
    i.fdef = e.fdef,             
    i.fhp = e.fhp,              
    i.fmp = e.fmp,              
    i.fspeed = e.fspeed,           
    i.fjump = e.fjump,            
    i.fallstat = e.fallstat,         
    i.fboss = e.fboss,            
    i.fdamage = e.fdamage,          
    i.flevel = e.flevel,           
    i.superioreqp = e.superioreqp,      
    i.android = e.android,          
    i.androidgrade = e.androidgrade;

