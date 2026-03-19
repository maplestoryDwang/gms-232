function start() {
    if (cm.getInfoQuest(22014).equals("")) {
        cm.updateInfoQuest(22014, "mo30=o");
        cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon30");
        return true
    }
};