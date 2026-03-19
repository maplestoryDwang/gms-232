function start() {
    if (cm.getQuestStatus(32205) == 1) {
        cm.effect_OnUserEff("UI/tutorial.img/21");
        return true
    }
};