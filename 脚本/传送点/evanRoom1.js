function start() {
    if (cm.getInfoQuest(22013).equals("dt00=o;dt01=o;mo00=o;mo01=o;mo10=o;mo02=o;mo11=o;mo20=o;mo21=o")) {
        cm.updateInfoQuest(22013, "dt00=o;dt01=o;mo00=o;mo01=o;mo10=o;hand=o;mo02=o;mo11=o;mo20=o;mo21=o");
        cm.onScriptMessage_显示教程引导图片(["UI/tutorial/evan/0/0"]);
        cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon70");
        return true
    }
};