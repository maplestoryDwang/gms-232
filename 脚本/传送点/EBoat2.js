function start() {
    cm.warp(200090000, 5);
    if (cm.getEventManager("Boats").getProperty("haveBalrog").equals("true")) {
        cm.fieldEffect_PlayBGM("Bgm04/ArabPirate")
    }
};