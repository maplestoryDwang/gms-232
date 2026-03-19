function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (!cm.getInfoQuest(64203).contains("event3_camera=2")) {
        cm.addPopupSay(9400602, 2000, "现在无法移动。再多坚持一会儿。", "", 0)
    } else {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.warp(867236150, 0)
    }
};