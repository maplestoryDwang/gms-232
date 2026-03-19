function start() {
    var a = cm.getMap().getPortal(3).getPosition();
    cm.onTeleport(1, cm.getPlayer().getId(), a.getX(), a.getY());
    cm.getWeatherEffectNotice("该死！有陷阱。让我们绕过这里从别处走吧。", 147, 60000, 1);
    return true
};