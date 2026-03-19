function start() {
    if (cm.isQuestFinished(1008)) {
        cm.effect_OnUserEff("UI/tutorial.img/22")
    } else {
        if (cm.isQuestFinished(1020)) {
            cm.effect_OnUserEff("UI/tutorial.img/27")
        }
    }
    return false
};