function start() {
    if (cm.getInfoQuest(21002).equals("normal=o;arr0=o;arr1=o;arr2=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o")) {
        cm.playerMessage(5, "连续攻击后，通过方向键和攻击键可以实现命令攻击。");
        cm.updateInfoQuest(21002, "cmd=o;normal=o;arr0=o;arr1=o;arr2=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o");
        cm.fieldEffect_ScreenMsg("aran/tutorialGuide3")
    }
};