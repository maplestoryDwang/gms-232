function start() {
    if (cm.getMap().getReactorByName("kinggate").getState() == 1) {
        cm.warp(990000900, 1);
        if (cm.getEventInstance().getProperty("boss") != null && cm.getEventInstance().getProperty("boss").equals("true")) {
            cm.fieldEffect_PlayBGM("Bgm10/Eregos")
        }
        return true
    } else {
        cm.playerMessage("This door is closed.");
        return false
    }
};