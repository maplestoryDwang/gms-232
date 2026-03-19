function start() {
    if (cm.getNumberFromQuestInfo(22700, "V02") == 0) {
        cm.updateInfoQuest(22700, "V01=1;V02=1");
        if (cm.getPlayer().getGender() == 0) {
            var a = 1531000
        } else {
            var a = 1531052
        }
        cm.addPopupSay(a, 2000, "杰，超简单的嘛！");
        cm.addPopupSay(1531001, 2000, "#face9#你等着，到下一个房间，我会给你召唤怪物的。")
    }
};