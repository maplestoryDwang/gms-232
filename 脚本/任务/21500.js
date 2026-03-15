var status = -1;

function start(c, b, a) {
    cm.sendNext("I finally acknowledge you as my owner. Please, take this skill. It is Echo of Hero.");
    cm.teachSkill(20001005, 1, 1);
    cm.forceCompleteQuest();
    cm.dispose()
}

function end(c, b, a) {
    cm.sendNext("I finally acknowledge you as my owner. Please, take this skill. It is Echo of Hero.");
    cm.teachSkill(20001005, 1, 1);
    cm.forceCompleteQuest();
    cm.dispose()
};