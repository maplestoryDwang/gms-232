function start() {
    if (cm.getInfoQuest(22013).equals("mo00=o")) {
        cm.updateInfoQuest(22013, "dt00=o;mo00=o");
        cm.fieldEffect_ScreenMsg("evan/dragonTalk00");
        return true
    }
};