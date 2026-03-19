function start() {
    var c = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    var b = cm.getInfoQuest(62012);
    if (b.equals("hidden=" + a + ";find=0")) {
        cm.openNpc(0, "少林寺藏经阁_传送点提示")
    } else {
        cm.sendNormalTalk_Bottom("这里除了厚厚的灰尘，什么都没有。", 57, 0, false, false)
    }
};