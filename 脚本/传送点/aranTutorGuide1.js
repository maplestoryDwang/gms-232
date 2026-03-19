function start() {
    if (cm.getInfoQuest(21002).equals("normal=o;arr0=o;arr1=o;mo1=o;mo2=o;mo3=o;mo4=o")) {
        cm.playerMessage(5, "按住Ctrl键，能够进行连续攻击。");
        cm.updateInfoQuest(21002, "normal=o;arr0=o;arr1=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o");
        cm.fieldEffect_ScreenMsg("aran/tutorialGuide2")
    }
};