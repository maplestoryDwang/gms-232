function start() {
    var a = cm.getMap().getPortal(0).getPosition();
    cm.onTeleport(1, cm.getPlayer().getId(), a.getX(), a.getY());
    cm.getWeatherEffectNotice("唉……好危险啊。还好我的力量可以把你带到这里来。小心别坠落了。", 147, 60000, 1);
    return true
};