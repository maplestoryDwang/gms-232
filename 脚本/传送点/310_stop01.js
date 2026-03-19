function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getNumberFromQuestInfo(64015, "chk1") == 0) {
        cm.onTeleport(1, cm.getPlayer().getId(), -1380, 380);
        cm.addPopupSay(9400583, 2000, "#face0#先干掉那边剩下的怪物！呃……！", "", 0);
        cm.playerMessage(5, "先帮助这里的人吧！");
        cm.playerMessage(-1, "先帮助这里的人吧！")
    } else {
        if (cm.getNumberFromQuestInfo(64015, "chk2") == 0) {
            cm.onTeleport(1, cm.getPlayer().getId(), -1380, 380);
            cm.addPopupSay(9400583, 2000, "#face0#这边！你到我旁边来抬着这个！", "", 0);
            cm.playerMessage(5, "先帮助这里的人吧！");
            cm.playerMessage(-1, "先帮助这里的人吧！")
        }
    }
};