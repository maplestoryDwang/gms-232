function start() {
    if (cm.getMap().getReactorByName("speargate").getState() == 4) {
        cm.warp(990000401);
        return true
    } else {
        var a = cm.getPlayer().getEventInstance().getMapFactory().getMap(990000440);
        if (a.getReactorByName("spear1").getState() >= 1 && a.getReactorByName("spear2").getState() >= 1 && a.getReactorByName("spear3").getState() >= 1 && a.getReactorByName("spear4").getState() >= 1) {
            cm.warp(990000401);
            return true
        }
        cm.playerMessage("绁?绉????????绘?㈢??浣?????杩???");
        return false
    }
};