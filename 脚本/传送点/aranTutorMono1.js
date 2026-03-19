function start() {
    if (cm.getInfoQuest(21002).equals("mo1=o")) {
        cm.fieldEffect_PlayFieldSound("Aran/balloon");
        cm.updateInfoQuest(21002, "mo1=o;mo2=o");
        cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/aranTutorial/legendBalloon2")
    }
};