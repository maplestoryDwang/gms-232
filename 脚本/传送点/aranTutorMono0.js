function start() {
    if (cm.getInfoQuest(21002).equals("")) {
        cm.updateInfoQuest(21002, "mo1=o");
        cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/aranTutorial/legendBalloon1")
    }
};