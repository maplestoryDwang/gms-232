function start() {
    if (cm.getInfoQuest(22014).equals("mo30=o")) {
        cm.updateInfoQuest(22014, "mo30=o;mo40=o");
        cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon40");
        return true
    }
};