function start() {
    if (cm.getMap().getReactorByName("statuegate").getState() == 1 || (cm.getPlayer().getEventInstance() != null && cm.getPlayer().getEventInstance().getProperty("stage1clear") != null && cm.getPlayer().getEventInstance().getProperty("stage1clear").equals("true"))) {
        cm.warp(990000301);
        return true
    } else {
        cm.playerMessage("杩?涓??ㄦ???抽????锛?璇峰????杩??ㄧ?????????");
        return false
    }
};