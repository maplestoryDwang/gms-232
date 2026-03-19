function start() {
    if (cm.getMap().getReactorByName("stonegate").getState() == 1) {
        cm.warp(990000430, 0);
        return true
    } else {
        cm.playerMessage("?板?ㄥ?抽??浜?缂╁?扮?炽??");
        return false
    }
};