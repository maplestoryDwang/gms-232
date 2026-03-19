function start() {
    if (cm.getInfoQuest(21002).equals("mo1=o;mo2=o")) {
        cm.updateInfoQuest(21002, "mo1=o;mo2=o;mo3=o");
        cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/aranTutorial/legendBalloon3")
    }
};