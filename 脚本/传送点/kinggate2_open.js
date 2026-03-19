function start() {
    if (cm.getMap().getReactorByName("kinggate").getState() == 1) {
        cm.warp(990000900, 2);
        if (cm.getEventInstance().getProperty("boss") != null && cm.getEventInstance().getProperty("boss").equals("true")) {
            cm.fieldEffect_PlayBGM("Bgm10/Eregos")
        }
        return true
    } else {
        cm.playerMessage("This crack appears to be blocked off by the door nearby.");
        return false
    }
};