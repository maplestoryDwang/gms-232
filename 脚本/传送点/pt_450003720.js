function start() {
    cm.updateInfoQuest(34340, "enter=2");
    cm.onTeleport(0, 3, cm.getPlayer().getId(), -12, -1);
    cm.sendNormalTalk("(好像无法从这里经过。)", 2, 0, false, true);
    cm.forceCompleteQuest(34302)
};