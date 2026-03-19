function start() {
    var d = cm.getPortal().getId();
    var a = parseInt(em.getProperty("stage47_trigger"));
    if (d != a) {
        return true
    }
    var c = em.getMapFactoryMap(cm.getMapId());
    var b = em.getMonster(9309128);
    c.spawnMonsterOnGroundBelow(b, new java.awt.Point(500, 185));
    cm.fieldEffect_ScreenMsg("Effect/OnUserEff.img/aquarisTower/success");
    cm.playerMessage(5, "似乎触发了什么机关。去门口看看吧。");
    return true
};