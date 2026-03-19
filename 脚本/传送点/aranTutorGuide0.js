function start() {
    if (cm.getInfoQuest(21002).equals("arr0=o;mo1=o;mo2=o;mo3=o")) {
        cm.playerMessage(5, "按一下Ctrl键，能够对怪兽进行一般攻击。");
        cm.updateInfoQuest(21002, "normal=o;arr0=o;mo1=o;mo2=o;mo3=o");
        cm.fieldEffect_ScreenMsg("aran/tutorialGuide1")
    }
};