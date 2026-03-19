function start() {
    if (cm.getInfoQuest(22013).equals("dt00=o;mo00=o;mo01=o;mo10=o;mo02=o")) {
        cm.updateInfoQuest(22013, "dt00=o;dt01=o;mo00=o;mo01=o;mo10=o;mo02=o");
        cm.fieldEffect_ScreenMsg("evan/dragonTalk01");
        return true
    }
};