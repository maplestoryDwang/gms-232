function start() {
    var b = cm.getMap().getPortal(50).getPosition();
    cm.onTeleport(1, cm.getPlayer().getId(), b.getX(), b.getY());
    cm.getMap().getWeatherEffectNotice("很好。让我们前往下一层吧。", 147, 60000, 1);
    var a = cm.getEventManager("副本_起源之塔");
    a.setProperty("stage27", "clear");
    cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear");
    return true
};