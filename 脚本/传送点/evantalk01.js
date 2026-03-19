function start() {
    if (cm.getInfoQuest(22013).equals("dt00=o;mo00=o")) {
        cm.updateInfoQuest(22013, "dt00=o;mo00=o;mo01=o");
        cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon01");
        return true
    }
};