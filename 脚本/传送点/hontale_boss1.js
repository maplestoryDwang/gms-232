function start() {
    if (cm.getMapId() == 240060000) {
        var a = cm.getEventManager("HorntailBattle");
        if (a != null) {
            var b = a.getProperty("preheadCheck");
            if (b != null && b.equals("0")) {
                cm.mapMessage(6, "娲??ｆ繁澶???宸ㄥぇ?????戒?姝ｅ?ㄩ??杩?锛?");
                a.setProperty("preheadCheck", "2")
            }
        }
    } else {
        var a = cm.getEventManager("ChaosHorntail");
        if (a != null) {
            var b = a.getProperty("preheadCheck");
            if (b != null && b.equals("0")) {
                cm.mapMessage(6, "娲??ｆ繁澶???宸ㄥぇ?????戒?姝ｅ?ㄩ??杩?锛?");
                a.setProperty("preheadCheck", "2")
            }
        }
    }
};