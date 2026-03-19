function start() {
    cm.warp(200090000, 4);
    if (cm.getClient().getChannelServer().getEventSM().getEventManager("Boats").getProperty("haveBalrog").equals("true")) {
        cm.fieldEffect_PlayBGM("Bgm04/ArabPirate")
    }
};