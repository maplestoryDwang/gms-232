function start() {
    if (cm.getMapId() == 4000001) {
        cm.openNpc(10310, "infoPortalTuto")
    } else {
        cm.effect_OnUserEff("UI/tutorial.img/22")
    }
    return true
};