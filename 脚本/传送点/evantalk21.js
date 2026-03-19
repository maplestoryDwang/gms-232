function start() {
    if (cm.getInfoQuest(22013).equals("dt00=o;dt01=o;mo00=o;mo01=o;mo10=o;mo02=o;mo11=o;mo20=o")) {
        cm.updateInfoQuest(22013, "dt00=o;dt01=o;mo00=o;mo01=o;mo10=o;mo02=o;mo11=o;mo20=o;mo21=o");
        cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon21");
        return true
    }
};