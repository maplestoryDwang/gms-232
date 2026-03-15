var status = -1;

function start(c, b, a) {
    cm.dispose()
}

function end(c, b, a) {
    status++;
    if (status == 0) {
        cm.sendNext("What? You found my glasses? I better put it on first, to make sure that it''s really mine. Oh, it really is mine. Thank you so much!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2030019# 5 #t2030019#s\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0#  1000 EXP")
    } else {
        cm.gainItem(2030019, 5);
        cm.gainExp(1000);
        cm.forceCompleteQuest();
        cm.dispose()
    }
};