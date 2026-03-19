function start() {
    if (cm.getMap().getReactorByName("watergate").getState() == 1 || (cm.getPlayer().getEventInstance() != null && cm.getPlayer().getEventInstance().getProperty("stage3clear") != null && cm.getPlayer().getEventInstance().getProperty("stage3clear").equals("true"))) {
        cm.warp(990000600);
        return true
    } else {
        cm.playerMessage("绁?绉????????绘?㈢??浣?????杩???");
        return false
    }
};