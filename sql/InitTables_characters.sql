set FOREIGN_KEY_CHECKS = 0;
drop table if exists
    users,
    accounts,
    damageskinsavedatas,
    matrix_records,
    matrix_slots,
    friends,
    linkskills,
    monster_collection_rewards,
    monster_collection_mobs,
    monster_collection_explorations,
    monster_collections,
    macroskills,
    macros,
    donations,
    familiars,
    collectedfamiliars,
    familiarcodexmanager,
    stolenskills,
    chosenskills,
    skillcooltimes,
    hyperrockfields,
    characterpotentials,
    test,
    skills,
    characters,
    zeroinfo,
    avatardata,
    alliance_gradenames,
    alliances,
    keymaps,
    funckeymap,
    offenses,
    offense_managers,
    characterstats,
    hairequips,
    unseenequips,
    petids,
    totems,
    spset,
    extendsp,
    noncombatstatdaylimit,
    systemtimes,
    charactercards,
    avatarlook,
    items,
    auction_items,
    inventories,
    questprogressrequirements,
    questprogressitemrequirements,
    questprogresslevelrequirements,
    questprogressmoneyrequirements,
    questprogressmobrequirements,
    questmanagers,
    quests,
    bbs_replies,
    bbs_records,
    bbs_upvotes,
    gradenames,
    guildmembers,
    guildrequestors,
    guildskill,
    guilds,
    monsterbookcards,
    monsterbookinfos,
    trunks,
    cashiteminfos,
    unions,
    unionboards,
    unionmembers,
    unionraid,
    bosscooldowns,
    ignoreditems,
    emoticons,
    emoticonshortcuts,
    vessel,
    blacklist,
    trade_transaction,
    soulcollection,
    rankingresults,
    first_enter_rewards,
    hyperstatsmanager,
    hyperstatinfos,
    minigamerecords,
    accountdailyentries,
    contentcooldowns
;
set FOREIGN_KEY_CHECKS = 1;

create table trunks
(
    id        int not null auto_increment,
    slotcount int,
    money     bigint,
    primary key (id)
);
create table questmanagers
(
    id bigint not null auto_increment,
    primary key (id)
);
create table quests
(
    id              bigint not null auto_increment,
    questmanager_id bigint,
    qrkey           int,
    qrvalue         varchar(255),
    status          int,
    completedtime   datetime,
    primary key (id),
    foreign key (questmanager_id) references questmanagers (id)
);



create table questprogressrequirements
(
    id            bigint not null auto_increment,
    orderNum      int,
    progresstype  varchar(255),
    questid       bigint,
    unitid        int,
    requiredcount int,
    currentcount  int,
    primary key (id),
    foreign key (questid) references quests (id) on delete cascade
);

create table inventories
(
    id    int not null auto_increment,
    type  int,
    slots int,
    primary key (id)
);

create table items
(
    id                   bigint not null auto_increment,
    inventoryid          int,
    trunkid              int,
    itemid               int,
    bagindex             int,
    bagitemindex         int default -1,
    cashitemserialnumber bigint,
    dateexpire           datetime,
    invtype              int,
    type                 int,
    iscash               boolean,
    quantity             int,
    owner                varchar(255),
    bossid	             int,
    playercount          int,
    price                bigint,
    obtaineddate         datetime,
    tradable             boolean default false,
    jokertosetitem       boolean null,


    # Pet items
    name                 varchar(255),
    #  level         tinyint, # exists in equips
    tameness             smallint,
    repleteness          tinyint,
    petattribute         smallint,
    petskill             int,
    datedead             datetime,
    remainlife           int,
    # attribute     smallint, # also exists in equips
    activestate          tinyint,
    autobuffskill        int,
    autobuffskill2       int,
    pethue               int,
    giantrate            smallint,

    # Equips
    equippeddate         datetime,
    prevbonusexprate     int,
    options              varchar(255),
    sockets              varchar(255),
    tuc                  smallint,
    cuc                  smallint,
    istr                 smallint,
    idex                 smallint,
    iint                 smallint,
    iluk                 smallint,
    imaxhp               int,
    imaxmp               smallint,
    ipad                 smallint,
    imad                 smallint,
    ipdd                 smallint,
    imdd                 smallint,
    iacc                 smallint,
    ieva                 smallint,
    icraft               smallint,
    ispeed               smallint,
    ijump                smallint,
    attribute            smallint,
    leveluptype          smallint,
    level                smallint,
    exp                  smallint,
    durability           smallint,
    iuc                  smallint,
    ipvpdamage           smallint,
    ireducereq           smallint,
    specialattribute     smallint,
    durabilitymax        smallint,
    iincreq              smallint,
    growthenchant        smallint,
    psenchant            smallint,
    hyperupgrade         smallint,
    bdr                  smallint,
    imdr                 smallint,
    damr                 smallint,
    statr                smallint,
    cuttable             smallint,
    exgradeoption        bigint,
    itemstate            smallint,
    grade                smallint,
    chuc                 smallint,
    souloptionid         smallint,
    soulsocketid         smallint,
    souloption           smallint,
    specialgrade         int,
    tradeblock           boolean,
    equiptradeblock      boolean,
    fixedgrade           int,
    arc                  smallint,
    symbolexp            int,
    symbollevel          smallint,
    bossreward           boolean,
    fstr                 smallint,
    fdex                 smallint,
    fint                 smallint,
    fluk                 smallint,
    fatt                 smallint,
    fmatt                smallint,
    fdef                 smallint,
    fhp                  smallint,
    fmp                  smallint,
    fspeed               smallint,
    fjump                smallint,
    fallstat             smallint,
    fboss                smallint,
    fdamage              smallint,
    flevel               smallint,
    title                varchar(255),
    primary key (id),
    foreign key (trunkid) references trunks(id) on delete cascade,
    foreign key (inventoryid) references inventories(id) on delete cascade
);

create table cashiteminfos
(
    id             bigint not null auto_increment,
    accountid      int,
    characterid    int,
    commodityid    int,
    buycharacterid varchar(255),
    paybackrate    int,
    discount       double,
    orderno        int,
    productno      int,
    refundable     boolean,
    sourceflag     tinyint,
    storebank      boolean,
    itemid         bigint,
    trunkid        int,
    position       int,
    primary key (id),
    foreign key (trunkid) references trunks (id) on delete cascade,
    foreign key (itemid) references items(id) on delete cascade
);

create table monsterbookinfos
(
    id      int not null auto_increment,
    setid   int,
    coverid int,
    primary key (id)
);

create table monsterbookcards
(
    id     bigint not null auto_increment,
    bookid int,
    cardid int,
    primary key (id),
    foreign key (bookid) references monsterbookinfos (id) on delete cascade
);

create table avatarlook
(
    id                    int not null auto_increment,
    gender                int,
    skin                  int,
    face                  int,
    hair                  int,
    weaponstickerid       int,
    weaponid              int,
    subweaponid           int,
    job                   int,
    drawelfear            boolean,
    demonslayerdeffaceacc int,
    xenondeffaceacc       int,
    beasttamerdeffaceacc  int,
    iszerobetalook        boolean,
    mixedhaircolor        int,
    mixhairpercent        int,
    ears                  int,
    tail                  int,
    totems                varchar(255),
    petids                varchar(255),
    hairequips            text,
    unseenequips          text,
    earstyle              int not null default 0,
    primary key (id)
);

create table hairequips
(
    id      int not null auto_increment,
    alid    int,
    equipid int,
    primary key (id),
    foreign key (alid) references avatarlook (id) on delete cascade
);

create table unseenequips
(
    id      int not null auto_increment,
    alid    int,
    equipid int,
    primary key (id),
    foreign key (alid) references avatarlook (id) on delete cascade
);

create table petids
(
    id    int not null auto_increment,
    alid  int,
    petid int,
    primary key (id),
    foreign key (alid) references avatarlook (id) on delete cascade
);

create table zeroinfo
(
    id                     int not null auto_increment,
    betastate              boolean,
    subhp                  int,
    submhp                 int,
    submp                  int,
    submmp                 int      default 100,
    subskin                int,
    subhair                int,
    subface                int,
    dbcharzerolinkcashpart int null default 0,
    mixbasehaircolor       int null default 0,
    mixaddhaircolor        int null default 0,
    mixhairbaseprob        int null default 0,
    wpcoin                 int null default 0,
    primary key (id)
);

create table totems
(
    id      int not null auto_increment,
    alid    int,
    totemid int,
    primary key (id),
    foreign key (alid) references avatarlook (id) on delete cascade
);

create table extendsp
(
    id int not null auto_increment,
    primary key (id)
);

create table spset
(
    id          int not null auto_increment,
    extendsp_id int,
    joblevel    tinyint,
    sp          int,
    primary key (id),
    foreign key (extendsp_id) references extendsp (id) on delete cascade
);

create table systemtimes
(
    id   int not null auto_increment,
    yr   int,
    mnth int,
    primary key (id)
);

create table noncombatstatdaylimit
(
    id                      int not null auto_increment,
    charisma                smallint,
    charm                   smallint,
    insight                 smallint,
    will                    smallint,
    craft                   smallint,
    sense                   smallint,
    lastupdatecharmbycashpr datetime,
    charmbycashpr           tinyint,
    primary key (id)
);

create table charactercards
(
    id          int not null auto_increment,
    characterid int,
    job         int,
    level       tinyint,
    primary key (id)
);

create table characterstats
(
    id                    int not null auto_increment,
    characterid           int,
    characteridforlog     int,
    worldidforlog         int,
    name                  varchar(255),
    gender                int,
    skin                  int,
    face                  int,
    hair                  int,
    mixbasehaircolor      int,
    mixaddhaircolor       int,
    mixhairbaseprob       int,
    level                 int,
    job                   int,
    str                   int,
    dex                   int,
    inte                  int,
    luk                   int,
    hp                    int,
    maxhp                 int,
    mp                    int,
    maxmp                 int,
    ap                    int,
    sp                    int,
    exp                   long,
    pop                   int,
    money                 long,
    wp                    int,
    extendsp              int,
    posmap                long,
    portal                int,
    subjob                int,
    deffaceacc            int,
    fatigue               int,
    lastfatigueupdatetime int,
    charismaexp           int,
    insightexp            int,
    willexp               int,
    craftexp              int,
    senseexp              int,
    charmexp              int,
    noncombatstatdaylimit int,
    pvpexp                int,
    pvpgrade              int,
    pvppoint              int,
    pvpmodelevel          int,
    pvpmodetype           int,
    eventpoint            int,
    albaactivityid        int,
    albastarttime         datetime,
    albaduration          int,
    albaspecialreward     int,
    burning               boolean,
    charactercard         int,
    accountlastlogout     int,
    lastlogout            datetime,
    gachexp               int,
    honorexp              int,
    nextavailablefametime datetime,
    lastlevelobtainedtime datetime,
    primary key (id),
    foreign key (extendsp) references extendsp (id),
    foreign key (noncombatstatdaylimit) references noncombatstatdaylimit (id),
    foreign key (charactercard) references charactercards (id),
    foreign key (accountlastlogout) references systemtimes (id)
);

create table avatardata
(
    id             int not null auto_increment,
    characterstat  int,
    avatarlook     int,
    zeroavatarlook int,
    zeroinfo       int,

    primary key (id),
    foreign key (characterstat) references characterstats (id),
    foreign key (avatarlook) references avatarlook (id),
    foreign key (zeroinfo) references zeroinfo (id)
);

create table funckeymap
(
    id     int not null auto_increment,
    charid int,
    primary key (id)
);

create table keymaps
(
    id      int not null auto_increment,
    fkmapid int,
    idx     int,
    type    tinyint,
    val     int,
    primary key (id),
    foreign key (fkmapid) references funckeymap (id) on delete cascade
);


create table guilds
(
    id                  int not null auto_increment,
    name                varchar(255),
    leaderid            int,
    worldid             int,
    markbg              int,
    markbgcolor         int,
    mark                int,
    markcolor           int,
    maxmembers          int,
    notice              varchar(255),
    points              int,
    seasonpoints        int,
    allianceid          int,
    level               int,
    `rank`              int,
    ggp                 int,
    appliable           boolean,
    joinsetting         int,
    reqlevel            int,
    battleSp            int,
    fk_allianceid       int,
    gradenames          varchar(255),
    gradePermissions    varchar(255) default '-1,0,0,0,0',
    customMark          BLOB,
    activeTimes         int default 0,
    mainActivity        int default 0,
    ageGroup            int default 0,
    primary key (id)
);

create table alliances
(
    id           int not null auto_increment,
    name         varchar(255),
    maxmembernum int,
    notice       varchar(255),
    gradenames   varchar(255),
    primary key (id)
);

create table alliance_gradenames
(
    id         int not null auto_increment,
    gradename  varchar(255),
    allianceid int,
    primary key (id),
    foreign key (allianceid) references alliances (id) on delete cascade
);

create table bbs_records
(
    id           int not null auto_increment,
    idforbbs     int,
    creatorid    int,
    msg          text,
    creationdate datetime,
    guildid      int,
    isAnnouncement boolean default false,
    primary key (id)
);

create table bbs_upvotes (
    recordId int,
    upvoteId int,
    primary key (recordId, upvoteId),
    foreign key (recordId) references bbs_records(id) on delete cascade
);

create table bbs_replies
(
    id           int not null auto_increment,
    idforreply   int,
    creatorid    int,
    creationdate datetime,
    msg          text,
    recordid     int,
    primary key (id),
    foreign key (recordid) references bbs_records (id) on delete cascade
);

create table offense_managers
(
    id     int not null auto_increment,
    points int,
    lieDetectorBans int,
    lieDetectorFails int,
    trust  int,
    primary key (id)
);

create table offenses
(
    id             bigint not null auto_increment,
    manager_id     int,
    charid         int,
    accountid      int,
    msg            text,
    type           varchar(255),
    issuedate      datetime,
    issuer_char_id int,
    primary key (id),
    foreign key (manager_id) references offense_managers (id) on delete cascade
);

create table monster_collections
(
    id int not null auto_increment,
    mc_group int,
    primary key (id)
);

create table users
(
    id                   int not null auto_increment,
    banExpireDate        datetime,
    banReason            varchar(255),
    offensemanager       int,
    votepoints           int     default 0,
    donationpoints       int     default 0,
    maplePoints          int     default 0,
    name                 varchar(255),
    password             varchar(255),
    pic                  varchar(255),
    mac                  varchar(255),
    accounttype          int     default 0,
    age                  int     default 0,
    vipgrade             int     default 0,
    nblockreason         int     default 0,
    gender               tinyint default 0,
    msg2                 tinyint default 0,
    purchaseexp          tinyint default 0,
    pblockreason         tinyint default 3,
    chatunblockdate      bigint  default 0,
    hascensorednxloginid boolean default 0,
    gradecode            tinyint default 0,
    censorednxloginid    varchar(255),
    characterslots       int     default 4,
    creationdate         datetime,
    email                varchar(255),
    registerip           varchar(255),
    nextPossibleVoteTime datetime,
    resetKey             varchar(255),
    lastReset            datetime,
    resetType            int,
    primary key (id),
    foreign key (offensemanager) references offense_managers (id)
);

create table accounts
(
    id                     int not null auto_increment,
    worldid                int,
    userid                 int,
    trunkid                int,
    nxCredit               int default 0,
    nxPrepaid	           int default 0,
    monstercollectionid    int,
    unionid                int,
    unionraidid            int,
    completedAccountQuests varchar(1000),
    powercrystals          int default -1,
    primary key (id),
    foreign key (userid) references users (id) on delete cascade,
    foreign key (trunkid) references trunks (id),
    foreign key (monstercollectionid) references monster_collections (id)
);

create table auction_items
(
    id           int not null auto_increment,
    type         int,
    accountid    int,
    charid       int,
    state        int,
    itemType     int,
    charName     varchar(255),
    price        bigint,
    secondprice  bigint,
    directprice  bigint,
    endDate      datetime,
    biduserid    int,
    bidusername  varchar(255),
    idk          int,
    bidworld     int,
    oid          int,
    regdate      datetime,
    deposit      bigint,
    sstype       int,
    idk2         int,
    idk3         int,
    unkdate      datetime,
    item         bigint,
    itemname     varchar(255),
    soldquantity int,
    primary key (id),
    foreign key (accountid) references accounts (id) on delete cascade,
    foreign key (item) references items(id)
);

create table familiarcodexmanager
(
    id                  bigint not null auto_increment,
    summongauge         int default 2000,
    familiarslots       int default 100,
    activefamiliars     varchar(255), # inlined array
    activebadges        varchar(255), # inlined array
    primary key (id)
);
create table characters
(
    id                int not null auto_increment,
    accid             int,
    userid            int,
    avatardata        int,
    equippedinventory int,
    equipinventory    int,
    consumeinventory  int,
    etcinventory      int,
    installinventory  int,
    cashinventory     int,
    decinventory      int,
    funckeymap_id     int,
    fieldid           int,
    questmanager      bigint,
    guild             int,
    familiarcodexmanager bigint,
    rewardPoints      int,
    monsterbook       int,
    partyid           int,
    previousFieldID   bigint,
    quickslotKeys     varchar(255), # inlined array
    petfunckeymap     varchar(255), # inlined array
    towerChairs       varchar(255), # inlined array
    hyperrockfields   varchar(255), # inlined array
    location          int,
    primary key (id),
    foreign key (accid) references accounts (id) on delete cascade,
    foreign key (avatardata) references avatardata (id),
    foreign key (equippedinventory) references inventories (id),
    foreign key (equipinventory) references inventories (id),
    foreign key (consumeinventory) references inventories (id),
    foreign key (etcinventory) references inventories (id),
    foreign key (installinventory) references inventories (id),
    foreign key (cashinventory) references inventories (id),
    foreign key (decinventory) references inventories (id),
    foreign key (funckeymap_id) references funckeymap (id),
    foreign key (questmanager) references questmanagers (id),
    foreign key (monsterbook) references monsterbookinfos (id),
    foreign key (familiarcodexmanager) references familiarcodexmanager (id)
);

create table familiars
(
    id         bigint not null auto_increment,
    charid     int,
    familiarid int,
    name       varchar(13),
    locked     tinyint(4),
    level      int(11) default 1,
    levelcap   int(11) default 5,
    lvexp      int(11) default 0,
    grade      int(11) default 0,
    gradeexp   int(11) default 0,
    attack     int(11) default 0,
    defense    int(11) default 0,
    options    varchar(255) default '0,0', # inlined array
    primary key (id),
    foreign key (charid) references characters (id) on delete cascade
);

create table stolenskills
(
    id        int not null auto_increment,
    charid    int,
    skillid   int,
    position  int,
    currentlv tinyint,
    primary key (id),
    foreign key (charid) references characters (id) on delete cascade
);

create table chosenskills
(
    id       int not null auto_increment,
    charid   int,
    skillid  int,
    position int,
    primary key (id),
    foreign key (charid) references characters (id) on delete cascade
);

create table skillcooltimes
(
    id             int not null auto_increment,
    charid         int,
    skillid        int,
    nextusabletime bigint,
    primary key (id),
    foreign key (charid) references characters (id) on delete cascade
);

create table bosscooldowns
(
    id            int not null auto_increment,
    accid         int,
    boss          varchar(255),
    nextentrytime datetime,
    primary key (id),
    foreign key (accid) references accounts (id) on delete cascade
);

create table hyperrockfields
(
    id      bigint not null auto_increment,
    charid  int,
    ord     int,
    fieldid int,
    primary key (id),
    foreign key (charid) references characters (id) on delete cascade
);

create table characterpotentials
(
    id      bigint not null auto_increment,
    potkey  tinyint,
    skillid int,
    slv     int,
    grade   tinyint,
    charid  int,
    primary key (id),
    foreign key (charid) references characters (id) on delete cascade
);

create table guildskill
(
    id                  int not null auto_increment,
    guildid             int,
    skillid             int,
    level               int,
    expiredate          datetime,
    buycharactername    varchar(255),
    extendcharactername varchar(255),
    primary key (id),
    foreign key (guildid) references guilds (id)
);

create table guildmembers
(
    id                int not null auto_increment,
    charid            int,
    guildid           int,
    grade             int,
    alliancegrade     int,
    commitment        int,
    daycommitment     int,
    igp               int,
    commitmentinctime datetime,
    name              varchar(255),
    job               int,
    level             int,
    loggedin          boolean,
    lastOnline        datetime default '1970-01-01 00:00:01',
    primary key (id),
    foreign key (guildid) references guilds (id) on delete cascade
);

create table guildrequestors
(
    id       int not null auto_increment,
    charid   int,
    guildid  int,
    name     varchar(255),
    job      int,
    level    int,
    loggedin boolean,
    introduction varchar(255),
    primary key (id),
    foreign key (guildid) references guilds (id) on delete cascade
);

create table gradenames
(
    id        int not null auto_increment,
    gradename varchar(255),
    guildid   int,
    primary key (id),
    foreign key (guildid) references guilds (id) on delete cascade
);


create table skills
(
    id           int not null auto_increment,
    charid       int,
    skillid      int,
    rootid       int,
    maxlevel     int,
    currentlevel int,
    masterlevel  int,
    primary key (id),
    foreign key (charid) references characters (id) on delete cascade
);

create table macros
(
    id       bigint not null auto_increment,
    charid   int,
    skills   varchar(255),
    muted    boolean,
    name     varchar(255),
    macroPos int default 0,
    primary key (id),
    foreign key (charid) references characters (id) on delete cascade
);

create table macroskills
(
    id       bigint not null auto_increment,
    ordercol int,
    skillid  int,
    macroid  bigint,
    primary key (id),
    foreign key (macroid) references macros (id) on delete cascade
);


create table monster_collection_mobs
(
    id           int not null auto_increment,
    collectionid int,
    mobid        int,
    primary key (id),
    foreign key (collectionid) references monster_collections(id) on delete cascade
);

create table monster_collection_explorations
(
    id            bigint not null auto_increment,
    collectionid  int,
    collectionkey int,
    monsterkey    varchar(255),
    endDate       datetime,
    position      int,
    primary key (id),
    foreign key (collectionid) references monster_collections(id) on delete cascade
);

create table monster_collection_rewards
(
    region       int,
    session      int,
    groupid      int,
    collectionid int,
    primary key (region, session, groupid),
    foreign key (collectionid) references monster_collections(id) on delete cascade
);



create table linkskills
(
    id          bigint not null auto_increment,
    accid       int,
    linkskillid int,
    level       int,
    originid    int,
    usingid     int,
    primary key (id),
    foreign key (accid) references accounts (id) on delete cascade
);

create table matrix_records
(
    id         bigint not null auto_increment,
    iconid     int,
    skillid1   int,
    skillid2   int,
    skillid3   int,
    slv        int,
    maxLevel   int,
    `row`      int,
    exp        int,
    crc        bigint,
    expiredate datetime,
    charid     int,
    position   int,
    locked     boolean not null default false,
    primary key (id),
    foreign key (charid) references characters (id) on delete cascade
);

create table matrix_slots
(
    id                 bigint not null auto_increment,
    charid             int,
    position           int,
    enhancementLv      int,
    unlockedByPurchase boolean,
    primary key (id),
    foreign key (charid) references characters (id) on delete cascade
);

create table damageskinsavedatas
(
    id           bigint not null auto_increment,
    damageskinid int,
    itemid       int,
    notsave      boolean,
    description  varchar(255),
    accid        int,
    primary key (id),
    foreign key (accid) references accounts (id) on delete cascade
);

create table friends
(
    id              int not null auto_increment,
    ownerid         int,
    owneraccid      int,
    friendid        int,
    friendaccountid int,
    name            varchar(255),
    flag            tinyint,
    groupname       varchar(255),
    mobile          tinyint,
    nickname        varchar(255),
    memo            varchar(255),
    primary key (id)
);

create table unions
(
    id           bigint not null auto_increment,
    unionCoin    int,
    unionRank    int,
    presets      int,
    activepreset int    not null default 0,
    primary key (id)
);

create table unionboards
(
    id          bigint not null auto_increment,
    unionid     bigint,
    unionpower  int,
    uniondamage bigint,
    synergyGrid text,
    primary key (id),
    foreign key (unionid) references unions (id) on delete cascade
);

create table unionmembers
(
    id           bigint not null auto_increment,
    unionboardid bigint,
    type         int,
    charid       int,
    mobileName   varchar(30),
    gridpos      int,
    gridrotation int,
    primary key (id),
    foreign key (unionboardid) references unionboards (id) on delete cascade
);

create table unionraid
(
    id              bigint     not null auto_increment,
    totaldamagedone bigint(20) null default 0,
    curboss         int        null default 0,
    curshield       bigint(20) null default 0,
    curhp           bigint(20) null default 0,
    unclaimedcoins  int        null default 0,
    lasttime        bigint(20) null default 0,
    primary key (id)
);

create table donations
(
    id                  bigint not null auto_increment,
    uuid                varchar(40),
    claimed             boolean,
    claimedUserId       int,
    donationAmount      int,
    donationPoints      int,
    donationPointsBonus int,
    primary key (id)
);

create table ignoreditems
(
    charid      int,
    ignoreditem int,
    primary key (charid, ignoreditem),
    foreign key (charid) references characters (id) on delete cascade
);

create table collectedfamiliars
(
    charid      int,
    familiarId  int,
    primary key (charid, familiarId),
    foreign key (charid) references characters (id) on delete cascade
);

CREATE TABLE emoticons (
    id           int not null auto_increment,
    charid       int null,
    emoticonid   int null,
    position     int null,
    primary key (id),
    foreign key (charid) references characters (id) on delete cascade
);

CREATE TABLE emoticonshortcuts (
    id              int not null auto_increment,
    charid          int null,
    emoticonid      int null,
    position        int null,
    shortcut        varchar(20) null,
    primary key (id),
    foreign key (charid) references characters (id) on delete cascade
);

CREATE TABLE vessel (
    id              int not null auto_increment,
    charid          int,
    type            int not null default 0,
    level           int default 1,
    exp             int default 0,
    energy          int default 100,
    primary key (id),
    foreign key (charid) references characters (id) on delete cascade
);

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

CREATE TABLE trade_transaction (
    id                      bigint not null auto_increment,
    uuid                    varchar(255) not null,
    fileTime                datetime not null,
    characterIdFrom         int not null,
    characterIdTo           int not null,
    characterNameFrom       varchar(255) not null,
    characterNameTo         varchar(255) not null,
    userIdTo                int not null default 0,
    userIdFrom              int not null default 0,
    itemId                  bigint,
    templateItemId          int,
    description             varchar(255),
    money                   bigint,
    tradeTransactionType    varchar(255),
    mapId					int default 0,
    primary key (id)
);

CREATE TABLE soulcollection (
    id              int not null auto_increment,
    accountid       int null,
    bosssoul        int null,
    flag            int null,

    primary key (id),
    foreign key (accountid) references accounts (id) on delete cascade
);

CREATE TABLE rankingresults (
    id              int not null auto_increment,
    charnames       varchar(555),
    amount          bigint default 0,
    amount2         bigint default 0,
    amount3         bigint default 0,
    rankingtime     int null,
    timestamp       datetime,
    rankingtype     int not null,

    primary key (id)
);

CREATE TABLE first_enter_rewards(
	id				int not null auto_increment,
    accountId 		int,
    charId			int default 0,
    rewardType 		varchar(255),
    itemId 			int default 0,
    quantity 		int default 1,
	descr		 	varchar(8000),
    expireTime 		datetime,
	primary key (id),
    foreign key(accountId) references accounts (id) on delete cascade
);

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

CREATE TABLE minigamerecords(
    id              int not null auto_increment,
    charid          int,
    type            int,
    win             int,
    tie             int,
    loss            int,
    primary key (id),
    foreign key(charid) references characters(id) on delete cascade
);

create table accountdailyentries
(
    id            int not null auto_increment,
    accId         int,
    monsterparkentries int default -1,
    evolabentries int default -1,
    dojoentries int default -1,
    pqentries int default -1,
    whipthewhelpsquest int default -1,
    defeatgoldenwyvernquest int default -1,
    powercrystal int default -1,
    vanishingjourneyentries int default -1,
    chuchuentries int default -1,
    lacheleinentries int default -1,
    arcanaentries int default -1,
    morassentries int default -1,
    esferaentries int default -1,
    cerniumentries int default -1,
    hotelarcusentries int default -1,
    primary key (id),
    foreign key (accid) references accounts (id) on delete cascade
);

create table contentcooldowns
(
    id          int not null auto_increment,
    content     varchar(255),
    startDate 	datetime,
    primary key (id)
);