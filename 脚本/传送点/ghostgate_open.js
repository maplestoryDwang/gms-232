function start() {
    if (cm.getMap().getReactorByName("ghostgate").getState() == 1 || (cm.getPlayer().getEventInstance() != null && cm.getPlayer().getEventInstance().getProperty("stage4clear") != null && cm.getPlayer().getEventInstance().getProperty("stage4clear").equals("true"))) {
        cm.warp(990000800, 0);
        return true
    } else {
        cm.playerMessage("神秘的力量阻止着你的前进。");
        return false
    }
};