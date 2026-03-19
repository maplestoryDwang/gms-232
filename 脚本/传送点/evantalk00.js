function start() {
    if (cm.getInfoQuest(22013).equals("")) {
        cm.updateInfoQuest(22013, "mo00=o");
        cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon00");
        return true
    }
};