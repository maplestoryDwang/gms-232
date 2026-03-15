var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    cm.forceStartQuest();
    cm.dispose()
}

function end(c, b, a) {
    status++;
    cm.sendNext_Bottom("我，我好害怕……求你帮帮我……");
    cm.gainExp(31215);
    cm.forceCompleteQuest();
    cm.dispose()
};