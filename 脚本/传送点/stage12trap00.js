function start() {
    var a = cm.getMap().getPortal(0).getPosition();
    cm.onTeleport(1, cm.getPlayer().getId(), a.getX(), a.getY());
    cm.getWeatherEffectNotice("当心！那有陷阱。这次你试着从别的方向通过吧。", 147, 60000, 1);
    return true
};